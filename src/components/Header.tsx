import {
  useTranslation,
  languagesLabels,
  changeLanguage,
  Language
} from "../i18n";

const LanguageSwitcher = () => {
  return (
    <ul>
      {Object.entries(languagesLabels).map(([key, label]) => (
        <li key={key}>
          <button
            onClick={() => {
              changeLanguage(key as Language);
            }}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <span>{t("header.title")}</span>

      <nav>
        <ul>
          <li>{t("header.navigation.blog")}</li>
          <li>{t("header.navigation.contact")}</li>
        </ul>
      </nav>

      <LanguageSwitcher />
    </header>
  );
};
