import styles from "@/public/css/page.module.css"

export default function Map({t, locale, title}) {
  return (
    <>
      {title === 'LilScottyPippen' ? (
        <>
          <p className={styles.bold}>LilScottyPippen</p>
          <a href={`/${locale}/projects`}>{t('projects')}</a>
        </>
      ) : title === t('projects') ? (
        <>
          <a href={`/${locale}/`}>LilScottyPippen</a>
          <p className={styles.bold}>{t('projects')}</p>
        </>
      ) : (
        <>
          <a href={`/${locale}/`}>LilScottyPippen</a>
          <a href={`/${locale}/projects`}>{t('projects')}</a>
        </>
      )}
    </>
  )
}
