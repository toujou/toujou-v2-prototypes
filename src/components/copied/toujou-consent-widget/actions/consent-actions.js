export const CLEAR_CONSENT_TYPE_DATA = 'CLEAR_CONSENT_TYPE_DATA';
export const SAVE_ALL_CONSENTS = 'SAVE_ALL_CONSENTS';
export const SAVE_SINGLE_CONSENT = 'SAVE_SINGLE_CONSENT';
export const DISMISS_CONSENT_BOX = 'DISMISS_CONSENT_BOX';
export const UNDISMISS_CONSENT_BOX = 'UNDISMISS_CONSENT_BOX';

// eslint-disable-next-line import/prefer-default-export
export const INITIAL_STATE = {
  consents: {
    consentBoxDismissed: false,
  },
};

export const clearConsentTypeData = (consentType) => ({
  type: CLEAR_CONSENT_TYPE_DATA,
  payload: consentType,
});

export const saveAllConsents = (newConsents) => ({
  type: SAVE_ALL_CONSENTS,
  payload: newConsents,
});

export const saveSingleConsent = (consentType, consentData) => ({
  type: SAVE_SINGLE_CONSENT,
  payload: { consentType, consentData },
});

export const dismissConsentBox = () => ({
  type: DISMISS_CONSENT_BOX,
});

export const undismissConsentBox = () => ({
  type: UNDISMISS_CONSENT_BOX,
});
