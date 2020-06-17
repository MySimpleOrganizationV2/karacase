/*!
 * karacase <https://github.com/Phillip9587/karacase>
 */
function titlecase(input: string): string { return input[0].toLocaleUpperCase() + input.slice(1); }

/**
 * Converts a string to karacase
 * @param value Input String
 * @param isSimple Simple karacase string
 * @param version Version of the karacase string
 */
export function karacase(value: any, isSimple: boolean = false, version: number = 0): string {
    if (value === null || value === void 0) return '';
    if (typeof value.toString !== 'function') return '';

    let input: string = value.toString().trim();
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