import React from 'react';
import Nav from './Nav';
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t, i18n } = useTranslation();
  return (

    <div className="welcomePage">
        <Nav />
        <h1>{t('homePage.text')}</h1>
    </div>
  );
}

export default Welcome;
