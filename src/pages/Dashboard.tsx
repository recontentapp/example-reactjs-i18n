import { Header } from "../components/Header";
import { HelpButton } from "../components/HelpButton";
import { useTranslation } from "../i18n";

export const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Header />

      <h1>{t('dashboard.title')}</h1>

      <main>
        <HelpButton />
      </main>
    </div>
  );
};
