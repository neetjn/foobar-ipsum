import dictionary from './dictionary.json'

export default class {

  /**
   * Represents the core text generator.
   * @param {object} opts - Options for generator to consume.
   * @returns {string}
   */
  constructor(opts) {
    opts = Object.assign({}, opts)
    opts.size.sentence = opts.size.sentence || 15
    opts.size.paragraph = opts.size.paragraph || 3
    opts.dictionary = opts.dictionary || dictionary.words
    this.opts = opts
  }

  /**
   * Generate a random word given the provided dictionary.
   * @returns {string}
   */
  word() {
    return this.opts.dictionary[Math.floor(Math.random() * this.opts.dictionary.length)]
  }

  /**
   * Generate a random sentence given the provided dictionary and sentence bounds.
   * @returns {string}
   */
  sentence(size = null) {
    let sentence = Array(size || this.opts.size.sentence)
      .map(` ${this.word()}`)
      .join('')
      .slice(1)
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }

  /**
   * Generate a random paragraph given the provided dictionary and paragraph bounds.
   * @param {int} size - Optional paragraph size specification in number of sentences.
   * @returns {string}
   */
  paragraph(size = null) {
    size = size || this.opts.size.paragraph
    const paragraph = Array()
      .map(`. ${this.sentence()}`)
      .join('')
      .slice(2)
    // # left here, add character split for each finished paragraph
    for (let i = 0; i < size)
  }

}
