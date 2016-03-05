/**
 * Converts a hex color string into an rgb hash.
 * @param {string} hex - The hex string to convert
 * @returns {object} Hash containing keys for red (r), green (g) and
 *                   blue (b) values
 * @example
 * rgb("#FFFFFF") 
 * // returns {r: 255, g: 255, b: 255}
 */
function rgb(hex) {
  // Error checking
  if (!isHex(hex)) {
    throw new Error("Must pass a valid hex string as argument to rgb()")
  }
  // Generate base 16 values for Red, Green, Blue.
  var base16Red = cutHex(hex).slice(0,2)
  var base16Green = cutHex(hex).slice(2,4)
  var base16Blue = cutHex(hex).slice(4)

  // Convert base 16 numbers to Integers and return.
  return {
    r: parseInt(base16Red, 16),
    g: parseInt(base16Green, 16),
    b: parseInt(base16Blue, 16),
  }
}

// Helper utility to remove the pound (#) from the hex string.
function cutHex(hex) {
  return hex.slice(1)
}

function isHex(hex) {
  if (hex[0] === '#'
      && hex.length === 7) {
    return true;
  }
  return false;
}

module.exports = rgb;
