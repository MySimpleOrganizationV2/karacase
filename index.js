/*!
 * karacase <https://github.com/Phillip9587/karacase>
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.karacase = void 0;

function titlecase(input) { return input[0].toLocaleUpperCase() + input.slice(1); }

/**
 * Converts a string to karacase
 * @param value Input String
 * @param isSimple Simple karacase string
 * @param version Version of the karacase string
 */ 
function karacase(value, isSimple = false, version = 0) {
    if (value === null || value === void 0) return '';
    if (typeof value.toString !== 'function') return '';

    let input = value.toString().trim();
    if (input === '') return '';

    let pre = 'my';
    if (isSimple)
        pre += 'Simple';

    let post = '';
    if (version > 0)
        post = 'V' + version;

    if (input.length === 1) return pre + input.toLocaleUpperCase() + post;

    let match = input.match(/[a-zA-Z0-9]+/g);
    if (match) {
        return pre + match.map(m => titlecase(m)).join('') + post;
    }

    return pre + input + post;
};

exports = module.exports = karacase;