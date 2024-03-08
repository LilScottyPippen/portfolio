'use client'
import styles from "../../public/css/page.module.css";
import { useEffect, useState } from 'react';

export default function Header({ t, title }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const path = window.location.pathname;
    
    if (path.startsWith('/ru')) {
      setCurrentLanguage('ru');
    } else {
      setCurrentLanguage('en');
    }
  }, []);

  return (
    <>
      <div className={styles.lang}>
        {currentLanguage === "en" ? (
          <p className={styles.bold}>en</p>
        ) : (
          <a href="/en">en</a>
        )}
        /
        {currentLanguage === "ru" ? (
          <p className={styles.bold}>ru</p>
        ) : (
          <a href="/ru">ru</a>
        )}
      </div>

      <h1>{title}</h1>

      <div className={styles.nav}>
        <p className={styles.bold}>{title}</p>
        <a href="#">{t('elements:projects')}</a>
      </div>
    </>
  );
}
