import styles from "./page.module.css";
import initTranslations from "./i18n";
import Header from "./header";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['main', 'elements']);

  return (
    <main className={styles.main}>
      <Header t={t} title="LilScottyPippen" />

      <div className={styles.description}>
        <p>{t('about-me')}</p>
        <br></br>
        <p>{t('about-me-decription')}</p>
      </div>

      <div className={styles.block}>
        <h2>{t('elements:my-skills')}</h2>
        <iframe src="https://skillicons.dev/icons?i=python,django,html,css,js,mysql" height="50"/>
      </div>
      <hr></hr>
      <div className={styles.block}>
        <h2>{t('elements:contacts')}</h2>
        <ul className={styles.contacts}>
          <li>GitHub: <a href="https://github.com/LilScottyPippen" target="_blank">@LilScottyPippen</a></li>
          <li>Instagram: <a href="https://instagram.com/v_moem_serdce_dirka" target="_blank">@v_moem_serdce_dirka</a></li>
          <li>Telegram: <a href="https://t.me/lil_pigs" target="_blank">@lil_pigs</a></li>
          <li>Email: <a href="mailto:lilscottypippen33@gmail.com">lilscottypippen33@gmail.com</a></li>
        </ul>
      </div>
    </main>
  );
}
