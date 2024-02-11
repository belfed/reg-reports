/** Formats a number into a two digit number with leading zeros if less than 9. 
 * @param {Number} number - The number to format.
*/
const pad = (number) => String(number).padStart(2, "0");

/**
 * Converts the total number of seconds into an elapsed time string format.
 *
 * @param {number} totalSeconds - The total number of seconds.
 * @returns {string} The elapsed time string in the format 'HH:MM:SS'.
 */
const getTimeString = (hours, minutes, seconds) => {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export {
    getTimeString
};