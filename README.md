# foobar-ipsum

[![npm](https://img.shields.io/npm/dm/foobar-ipsum.svg)](https://www.npmjs.com/package/foobar-ipsum)

[![build](https://travis-ci.org/neetjn/foobar-ipsum.svg?branch=master)](https://travis-ci.org/neetjn/foobar-ipsum/)
[![npm version](https://badge.fury.io/js/foobar-ipsum.svg)](https://badge.fury.io/js/foobar-ipsum)
[![codecov](https://codecov.io/gh/neetjn/foobar-ipsum/branch/master/graph/badge.svg)](https://codecov.io/gh/neetjn/foobar-ipsum)

[![NPM](https://nodei.co/npm/foobar-ipsum.png)](https://nodei.co/npm/foobar-ipsum/)

## About

**foobar-ipsum** is a lightweight, universal javascript module for generating scaffholding text.

## Usage

To install via Bower, simply do the following:
```sh
bower install foobar-ipsum
```
To install via NPM:
```sh
npm install foobar-ipsum
```
For a quick start using jsdelivr:
```html
<script src="https://cdn.jsdelivr.net/npm/foobar-ipsum/dist/foobar-ipsum.min.js"></script>
```

**foobar-ipsum** supports the following options:

```javascript
> **`*sentenceLowerBound`** ; `int` : Minimum length of a sentence (words).
> **`*sentenceUpperBound`** ; `int` : Maximum length of a sentence (words).
> **`*paragraphLowerBound`** ; `int` : Minimum length of a paragraph (sentences).
> **`*paragraphUpperBound`** ; `int` : Maximum length of a paragraph (sentences).
> **`*dictionary`** ; `array` : List of words for generator to pool from.
```

### Using the CLI (Node.js)

lorem-ipsum.js includes a command line interface for generating passages of lorem ipsum text. Install the module globally to take advantage of this feature.

```bash
npm install lorem-ipsum --global
```

Execute the statement `lorem-ipsum` from your terminal to generate a passage of lorem ipsum text. You can pass arguments to the program to fine-tune the output.

```bash
lorem-ipsum --units words --count 100 --copy --format html
```

See below for a description of the arguments to the program.

<table>
  <tr>
    <th>Argument</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--count</td>
    <td>The <strong>number</strong> of words, sentences or paragraphs to generate</td>
  </tr>
  <tr>
    <td>--units</td>
    <td>Generate <strong>words</strong>, <strong>sentences</strong> or <strong>paragraphs</strong></td>
  </tr>
  <tr>
    <td>--copy</td>
    <td><strong>Copy</strong> the output to the system clipboard</td>
  </tr>
  <tr>
    <td>--format</td>
    <td><strong>html</strong> or <strong>plain</strong> text format</td>
  </tr>
</table>

You may now also use a short form when running lorem-ipsum.js from the command line. Here's some examples:

```
lorem-ipsum 1 word
```

```
lorem-ipsum 15 sentences --copy
```

```
lorem-ipsum 5 paragraphs --copy --format html
```

### Notes

The copy feature requires that you have xclip installed if you are using lorem-ipsum.js on Linux. The feature will work out of the box on Mac and Windows systems.

### License

This software is licensed under the MIT license.

Copyright (c) 2012-2017 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
