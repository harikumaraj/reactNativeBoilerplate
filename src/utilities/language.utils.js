import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import en from "../locales/en";
import hi from "../locales/hi";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag; // Can also be hard coded
}

I18n.fallbacks = true; // If an English translation is not available in en.js, it will look inside hi.js
I18n.missingBehaviour = "guess"; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.defaultLocale = "en"; // If the current locale in device is not en

I18n.translations = {
    en,
    hi
};

/* manullay set the locale*/
export const setLocale = (locale) => {
    I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale; // It will be used to define intial language state in reducer.

// export default I18n.translate.bind(I18n);
export default I18n;
