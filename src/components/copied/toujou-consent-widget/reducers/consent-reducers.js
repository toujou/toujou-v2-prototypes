import { handlePersistanceDataToSave } from '../store-persistence';
import {
  INITIAL_STATE,
  CLEAR_CONSENT_TYPE_DATA,
  DISMISS_CONSENT_BOX,
  SAVE_ALL_CONSENTS,
  SAVE_SINGLE_CONSENT,
  UNDISMISS_CONSENT_BOX,
} from '../actions/consent-actions';

// eslint-disable-next-line import/prefer-default-export
function consentReducers(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CLEAR_CONSENT_TYPE_DATA: {
      const newClearedConsents = { ...state.consents };
      delete newClearedConsents[action.payload];
      return {
        ...state,
        consents: newClearedConsents,
      };
    }

    case SAVE_ALL_CONSENTS: {
      const newAllConsents = { ...state.consents, ...action.payload };
      return {
        ...state,
        consents: newAllConsents,
      };
    }

    case SAVE_SINGLE_CONSENT: {
      const newConsentsWithSingleConsentChange = { ...state.consents };
      // eslint-disable-next-line max-len
      newConsentsWithSingleConsentChange[action.payload.consentType] = { ...action.payload.consentData };
      return {
        ...state,
        consents: newConsentsWithSingleConsentChange,
      };
    }

    case DISMISS_CONSENT_BOX: {
      const newDismissedBoxConsents = { ...state.consents };
      newDismissedBoxConsents.consentBoxDismissed = true;
      return {
        ...state,
        consents: newDismissedBoxConsents,
      };
    }

    case UNDISMISS_CONSENT_BOX: {
      const newUndismissedBoxConsents = { ...state.consents };
      newUndismissedBoxConsents.consentBoxDismissed = false;
      return {
        ...state,
        consents: newUndismissedBoxConsents,
      };
    }
  }

  return state;
}

let initialStatePushedToDataLayer = false;

export default function consentReducersExport(state = INITIAL_STATE, action) {
  const reducedState = consentReducers(state, action);
  handlePersistanceDataToSave(reducedState);

  if (typeof window.dataLayer === 'object' && (!initialStatePushedToDataLayer || (reducedState.consents.consentBoxDismissed !== undefined && reducedState.consents.consentBoxDismissed))) {
    window.dataLayer.push({ event: 'consent-changed', ...reducedState.consents });
    initialStatePushedToDataLayer = true;
  }

  return reducedState;
}
