import parseToml from 'tomlparser.js'
/**
 * This function parses options.
 *
 * @param {Object} options - The options to parse.
 * @returns {Object} - The parsed options.
 */
function parseOptions(data) {
    const parsedTomlObject = parseToml(data);

    return parsedTomlObject
  }
