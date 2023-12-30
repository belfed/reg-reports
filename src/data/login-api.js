/**
 * Retrieves an item from the local storage based on the provided key.
 * @param {string} key - The key used to identify the item in local storage.
 * @returns {?string} - The value associated with the provided key, or null if the key is not found.
 */
export const getItemFromLocalStorage = (key) => localStorage.getItem(key);

/**
 * Sets a key-value pair in the local storage.
 * @param {Object} item - An object representing the key-value pair to be stored.
 * @param {string} item.key - The key used to identify the item in local storage.
 * @param {string} item.value - The value to be associated with the key in local storage.
 * @returns {void}
 */
export const setItemInLocalStorage = (item) => localStorage.setItem(item.key, item.value);