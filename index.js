/*!
 * karacase <https://github.com/Phillip9587/karacase>
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.karacase = void 0;

function titlecase(input) { return input[0].toLocaleUpperCase() + input.slice(1); }

/**
 * Converts a string to karacase
 * @param str Input String
 * @param isSimple Simple karacase string
 * @param version Version of the karacase string
 */
function karacase(str, isSimple = false, version = 0) {
    if (str === null || str === void 0) return '';
    if (typeof str.toString !== 'function') return '';

    let input = str.toString().trim();
    if (input === '') return '';

    let pre = isSimple === true ? 'mySimple' : 'my';
    let post = (version != undefined && version > 0) ? `V${version}` : '';

    if (input.length === 1) return pre + input.toLocaleUpperCase() + post;

    let match = input.match(/[a-zA-Z0-9]+/g);
    if (match) {
        return pre + match.map(m => titlecase(m)).join('') + post;
    }

    return pre + input + post;
};

exports = module.exports = karacase;
