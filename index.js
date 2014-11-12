/*!
 * helper-lorem <https://github.com/jonschlinkert/helper-lorem>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var loremIpsum = require('lorem-ipsum');
var extend = require('extend-shallow');

module.exports = function lorem(locals) {
  var context = extend({}, this && this.context, locals);

  // Handlebars `root`
  if (context.data && context.data.root) {
    context = extend({}, context, context.data.root);
  }

  // Handlebars options `hash`
  if (context.hash) {
    context = extend({}, context, context.hash);
  }

  // default settings
  return loremIpsum(extend({
    count: 1,               // Number of words, sentences, or paragraphs to generate.
    units: 'sentences',     // Generate words, sentences, or paragraphs.
    sentenceLowerBound: 5,  // Minimum words per sentence.
    sentenceUpperBound: 10, // Maximum words per sentence.
    paragraphLowerBound: 3, // Minimum sentences per paragraph.
    paragraphUpperBound: 7, // Maximum sentences per paragraph.
    format: 'plain',        // Plain text or html
    random: Math.random     // A PRNG function. Uses Math.random by default
  }, context));
};