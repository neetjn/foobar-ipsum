import dictionary from './dictionary.json'

export default class {

  /**
   * Represents the core text generator.
   * @param {object} opts - Options for generator to consume.
   * @returns {string}
   */
  constructor(opts) {
    opts = Object.assign({}, opts)
    opts.count = opts.count || 1
    opts.sentenceLowerBound = opts.sentenceLowerBound || 5
    opts.sentenceUpperBound = opts.sentenceUpperBound || 15
    opts.paragraphLowerBound = opts.paragraphLowerBound || 3
    opts.paragraphUpperBound = opts.paragraphUpperBound || 7
    opts.format = opts.format || 'plain'
    opts.dictionary = opts.dictionary || dictionary.words
    opts.suffix = opts.suffix

    this.opts = opts
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
  word() {
    return this.opts.dictionary[this._randomInt(0, this.opts.dictionary.length - 1)]
  }

  /**
   * Generate a random sentence given the provided dictionary and sentence bounds.
   * @returns {string}
   */
  sentence() {
    let sentence = ''
    const bounds = {
      min: 0,
      max: this._randomInt(this.opts.sentenceLowerBound, this.opts.sentenceUpperBound)
    }

    while (bounds.min < bounds.max) {
      sentence += ` ${this.word()}`
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
  paragraph() {
    let paragraph = ''
    const bounds = {
      min: 0,
      max: this._randomInt(this.opts.paragraphLowerBound, this.opts.paragraphUpperBound)
    }

    while (bounds.min < bounds.max) {
      paragraph += `. ${this.sentence()}`
      bounds.min++
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(2)
      paragraph += '.'
    }

    return paragraph
  }

}
