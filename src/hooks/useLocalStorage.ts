/**
 * Provides a set of methods to interact with the local storage.
 * @returns {Object} An object containing methods to get, set, remove, and clear items in local storage.
 */
export const useLocalStorage = () => {
  /**
   * Retrieves an item from local storage.
   * @param {string} key - The key of the item to retrieve.
   * @returns {any} The item from local storage, or null if the item does not exist.
   */
  const getStorageItem = (key: string) => {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data!);
  };

  /**
   * Stores an item in local storage.
   * @param {string} key - The key under which to store the item.
   * @param {unknown} value - The item to store.
   */
  const setStorageItem = (key: string, value: unknown) => {
    return window.localStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * Removes an item from local storage.
   * @param {string} key - The key of the item to remove.
   */
  const removeStorageItem = (key: string) => {
    return window.localStorage.removeItem(key);
  };

  /**
   * Clears all items from local storage.
   */
  const clearStorage = () => {
    return window.localStorage.clear();
  };

  return {
    getStorageItem,
    setStorageItem,
    removeStorageItem,
    clearStorage,
  };
};
