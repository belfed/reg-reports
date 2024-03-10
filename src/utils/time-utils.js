/** Formats a number into a two digit number with leading zeros if less than 9.
 * @param {Number} number - The number to format.
 */
const pad = (number) => String(number).padStart(2, "0");

/** Returns the current day in the format "dd/mm/yyyy".
 * @returns {string} The current day.
 */
const getCurrentDay = () => {
  const today = new Date();
  return `${pad(today.getDate())}/${pad(today.getMonth() + 1)}/${pad(
    today.getFullYear()
  )}`;
};

/** Rounds the given time in seconds to the nearest hour.
* @param {number} seconds - The time in seconds.
* @returns {number} The rounded time in hours.
*/
const getRoundedTime = (seconds) => {
  let hours = (seconds / 3600).toFixed(2);
  const decimals = hours - Math.floor(hours);

  if (decimals > 0 && decimals <= 0.25) {
    return Math.floor(hours);
  }

  if ((decimals > 0.25 && decimals <= 0.5) || (decimals > 0.5 && decimals <= 0.75)) {
    return Math.floor(hours) + 0.5;
  }

  if (decimals > 0.75) {
    return Math.floor(hours) + 1;
  }

  return Number(hours);
}

/**
 * Converts the total number of seconds into an elapsed time string format.
 *
 * @param {number} totalSeconds - The total number of seconds.
 * @returns {string} The elapsed time string in the format 'HH:MM:SS'.
 */
const getTimeString = (hours, minutes, seconds) => {
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

export { getCurrentDay, getRoundedTime, getTimeString };
