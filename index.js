/*!
 * karacase 
 */

const pascalcase = require('pascalcase');

module.exports = (value, isSimple = false, version = 0) => {
    let result = 'my';

    if (typeof (isSimple) !== 'boolean') isSimple = false;
    if (typeof (version) !== 'number') version = 0;

    if (isSimple)
        result += 'Simple';

    result += pascalcase(value);

    if (version > 0)
        result += 'V' + version;

    return result;
};