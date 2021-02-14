import React from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLanguaje = () => {
  const { t, i18n } = useTranslation('global');

  return (
    <>
      <div className="centrar">
        <h1>{t('header.Hello-World')}</h1>
        <button onClick={() => i18n.changeLanguage('es')}> 🇪🇸 </button>
        <button onClick={() => i18n.changeLanguage('en')}> 🇬🇧 </button>
        <button onClick={() => i18n.changeLanguage('pt')}> 🇵🇹 </button>
      </div>
    </>
  );
};
