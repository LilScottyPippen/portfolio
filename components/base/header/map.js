import styles from "@/public/css/page.module.css";

export default function Map({t, locale, title}) {
  return (
    <>
      {title === 'LilScottyPippen' ? (
        <>
          <p className={styles.bold}>LilScottyPippen</p>
          <a href={`/${locale}/projects`}>{t('elements:projects')}</a>
        </>
      ) : title === t('elements:projects') ? (
        <>
          <a href={`/${locale}/`}>LilScottyPippen</a>
          <p className={styles.bold}>{t('elements:projects')}</p>
        </>
      ) : (
        <>
          <a href={`/${locale}/`}>LilScottyPippen</a>
          <a href={`/${locale}/projects`}>{t('elements:projects')}</a>
        </>
      )}
    </>
  );
}
