// These functions are used so we can save and read our toujou redux state
// using session and localStorage (so the state is persistent)

export const cookieStorage = {

  /**
   * @param {string} key
   * @param {string} value
   */
  setItem(key, value) {
    document.cookie = `${key}=${value};path=/;`;
  },

  /**
   * @param {string} key
   * @return {string|null}
   */
  getItem(key) {
    const nameEQ = `${key}=`;
    const ca = document.cookie.split(';');
    for (let i = 0, max = ca.length; i < max; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },
};

/**
 * Save the relevant properties of the new state into the correct storage
 *    'storageType': must be either 'sessionStorage' or 'localStorage'
 *    'itemName': String with the name of the item we want to save the state into,
 *         ex: 'consentsState'
 */
const saveStateToStorage = (state, storageType, itemName) => {
  try {
    const serializedState = JSON.stringify(state);
    storageType.setItem(itemName, serializedState);
    return;
  } catch (error) {
    console.error(`There was an error while saving the consents data to storage: Error: ${error}`);
  }
};

/**
 * Get correct persisted state for an item from the correct storage
 *    storeType: must be 'sessionStorate' or 'localStorage'
 *    itemName" String with the name of the item we want to get from Storage, ex: 'consentsState'
 */
const loadPersistedState = (storeType, itemName) => {
  try {
    const serializedState = storeType.getItem(itemName);
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error(`There was a problem loading the consents data from storage. Error: ${error}`);
    return {};
  }
};

/**
 * Get the persisted state from storage.
 * It calls functions to get state from the session and from the local storage
 * and then return the merge of the two results
 */
export const toujouLoadStorageState = () => {
  const sessionStorageData = loadPersistedState(cookieStorage, 'consentsState');
  const localStorageData = loadPersistedState(localStorage, 'consentsState');
  const finalData = {};
  finalData.consents = { ...sessionStorageData.consents, ...localStorageData.consents };
  return finalData;
};

/**
 * Because the consents may have different lifetimes,
 * we need to check which consent goes to the session or localStorage.
 * We then call the functions that will save it to the correct storage
 */
const prepareConsentsDataToSave = (consentsData) => {
  const dataToSaveOnSessionStorage = {};
  const dataToSaveOnLocalStorage = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in consentsData) {
    if (key === 'consentBoxDismissed') { // consentBoxDismissed
      dataToSaveOnLocalStorage[key] = consentsData[key];
    } else if (key === 'tracking' && consentsData[key].consentLifetime === 0) { // tracking: session
      dataToSaveOnSessionStorage[key] = consentsData[key];
    } else if (key === 'tracking' && consentsData[key].consentLifetime > 0) { // session: local
      dataToSaveOnLocalStorage[key] = consentsData[key];
    } else if (consentsData[key].consentLifetime === 0) { // externals: session
      dataToSaveOnSessionStorage[key] = consentsData[key];
    } else if (consentsData[key].consentLifetime > 0) { // externals: LOCAL
      dataToSaveOnLocalStorage[key] = consentsData[key];
    }
  }

  saveStateToStorage({ consents: dataToSaveOnSessionStorage }, cookieStorage, 'consentsState');
  saveStateToStorage({ consents: dataToSaveOnLocalStorage }, localStorage, 'consentsState');
};

/**
 * Handle the data we want to save on session or local storage
 * At the moment we want to make sure we only save the consents data
 * This function gets the 'state' from the consents reducer, just before it returns the new state
 */
export const handlePersistanceDataToSave = (state) => {
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const key in state) {
    if (key !== 'consents') {
      console.error('Unknown data "key" found while saving to session / local Storage');
      return;
    }

    prepareConsentsDataToSave(state.consents);
  }
};
