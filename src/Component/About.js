import React from 'react'
import Nav from './Nav'
import { useTranslation } from 'react-i18next';


function About() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Nav />
            <div className="aboutMe">
            <h1>{t('about.title')}</h1>
                <p>{t('about.content')}</p>
            </div>
        </div>
    )
}

export default About
