import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
const getCurrentHost =
  import.meta.env.MODE === "devlopment"
    ? "http://localhost:5173"
    : import.meta.env.VITE_CURRENT_HOST;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lag: "en",
    debug: false,
    interpolination: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}./../public/languages/{{lng}}.json`,
    },
  });
export default i18n;
