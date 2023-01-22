import { useState } from "react";
import { useTranslation } from "../i18n";

export const HelpButton = () => {
  const [showHelp, setShowHelp] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <button onClick={() => setShowHelp(true)}>{t("help_button.cta")}</button>

      {showHelp && <p>{t("help_button.description")}</p>}
    </div>
  );
};
