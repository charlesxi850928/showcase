/**
 * @typedef {'session' | 'local'} StorageType
 *
 */

/**
 * session / local storage hook
 */

const useStorage = () => {
  /**
   *
   * @param {StorageType} type
   * @returns {'localStorage' | 'sessionStorage'}
   */
  const storageType = (type) => `${type ?? 'session'}Storage`

  const isBrowser = typeof window !== 'undefined'

  /**
   * get value from storage
   * @param {string} key - storage key
   * @param {StorageType?} type - storage type
   * @returns {string}
   */
  const getItem = (key, type) => (isBrowser ? window[storageType(type)][key] : '')

  /**
   * set value to storage
   * @param {string} key - storage key
   * @param {string} value - storage value
   * @param {StorageType?} type - storage key
   * @returns {boolean}
   */
  const setItem = (key, value, type) => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value)
      return true
    }

    return false
  }

  /**
   * remove from storage
   * @param {string} key
   * @param {StorageType?} type
   */
  const removeItem = (key, type) => {
    window[storageType(type)].removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem
  }
}

export default useStorage
