import words from './dictionary.json'

export default class {

  /**
   * Represents the core text generator.
   * @param {object} opts - Options for generator to consume.
   * @returns {string}
   */
  constructor(opts) {
    opts = Object.assign({}, opts)
    opts.count = opts.count || 1
    opts.units = this._plurarize(opts.units.toLowerCase()) || 'sentences'
    opts.sentenceLowerBound = opts.sentenceLowerBound || 5
    opts.sentenceUpperBound = opts.sentenceUpperBound || 15
    opts.paragraphLowerBound = opts.paragraphLowerBound || 3
    opts.paragraphUpperBound = opts.paragraphUpperBound || 7
    opts.format = opts.format || 'plain'
    opts.dictionary = opts.dictionary || words
    opts.suffix = opts.suffix

    this.opts = opts
  }

  /**
   * Simple method to plurarize words.
   * @param {string} str - Word to plurarize.
   * @returns {string}
   */
  _plurarize(str) {
    return str.endsWith('s') ? str : `${str}s`
  }

  /**
   * Generate a random integer given a minimum and maximum value.
   * @param {int} min - Minimum bound for random integer.
   * @param {int} max - Maximum bound for random integer.
   */
  _randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   * Generate a random word given the provided dictionary.
   * @returns {string}
   */
  randomWord() {
    return this.dictionary[this._randomInt(0, this.dictionary.length - 1)]
  }

  /**
   * Generate a random sentence given the provided dictionary and sentence bounds.
   * @returns {string}
   */
  randomSentence() {
    let sentence = ''
    const bounds = {
      min: 0,
      max: this._randomInt(this.sentenceLowerBound, this.sentenceUpperBound)
    }

    while (bounds.min < bounds.max) {
      sentence += ` ${this.randomWord(words)}`
      bounds.min++
    }

    if (sentence.length) {
      sentence = sentence.slice(1)
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
    }

    return sentence
  }

  /**
   * Generate a random paragraph given the provided dictionary and paragraph bounds.
   * @returns {string}
   */
  randomParagraph() {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      paragraph += '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min++;
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph += '.';
    }

    return paragraph;
  }


}

function generator() {

  function randomParagraph(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      paragraph += '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min++;
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph += '.';
    }

    return paragraph;
  }

  var iter = 0
    , bounds = {min: 0, max: count}
    , string = ''
    , prefix = ''
    , openingTag
    , closingTag;

  if (format === 'html') {
    openingTag = '<p>';
    closingTag = '</p>';
  }

  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string += ' ' + randomWord(words);
        break;
      case 'sentences':
        string += '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        var nextString = randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound);

        if (format === 'html') {
          nextString = openingTag + nextString + closingTag;
          if (bounds.min < bounds.max - 1) {
            nextString += suffix; // Each paragraph on a new line
          }
        } else if (bounds.min < bounds.max - 1) {
          nextString += suffix + suffix; // Double-up the EOL character to make distinct paragraphs, like carriage return
        }

        string += nextString;

        break;
    }

    bounds.min++;
  }

  if (string.length) {
    var pos = 0;

    if (string.indexOf('. ') === 0) {
      pos = 2;
    } else if (string.indexOf('.') === 0 || string.indexOf(' ') === 0) {
      pos = 1;
    }

    string = string.slice(pos);

    if (units === 'sentences') {
      string += '.';
    }
  }

  return string;
};
