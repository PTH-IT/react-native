import {LANGUAGES_CHANGE} from '../constants/languages';

export function changeLanguages(Languages) {
  return {
    type: LANGUAGES_CHANGE,
    payload: Languages,
  };
}
