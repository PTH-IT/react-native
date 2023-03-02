import {LANGUAGES_CHANGE} from '../constants/constants';

export function changeLanguages(Languages) {
  return {
    type: LANGUAGES_CHANGE,
    payload: Languages,
  };
}
