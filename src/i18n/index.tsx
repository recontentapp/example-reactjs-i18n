import i18next from "i18next";
import { useTranslation as useI18NextTranslation } from "react-i18next";
import { Language } from "./types";

export * from "./types";
export * from "./constants";

export const useTranslation = useI18NextTranslation;

export const changeLanguage = async (language: Language) => {
  await i18next.changeLanguage(language)
}
