import {LANGUAGES_CHANGE} from '@Constants/constants';

export function changeLanguages(Languages) {
  return {
    type: LANGUAGES_CHANGE,
    payload: Languages,
  };
}
