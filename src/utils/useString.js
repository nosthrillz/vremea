import { STRINGS } from "../theme/strings";

export default function useString(locale = navigator.language) {
  let parsedLocale =
    locale.split("-").length > 1 ? locale.split("-")[0] : locale;

  parsedLocale = Object.keys(STRINGS).includes(parsedLocale)
    ? parsedLocale
    : "en";

  const t = (inputString) => {
    // inputString shape: 'main.welcome'
    const [section, string] = inputString.split(".");

    return STRINGS[parsedLocale][section][string];
  };

  return t;
}
