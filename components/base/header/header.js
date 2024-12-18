import styles from "@/public/css/page.module.css"
import Lang from "../lang/lang"
import Map from "./map"
import TypeItText from "../../typeIt"

export default function Header({ t, locale, title }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.lang}>
          <Lang locale={locale} />
        </div>
        
        <h1>&#8288;<TypeItText text={title}/></h1>

        <div className={styles.nav}>
          <Map t={t} locale={locale} title={title} />
        </div>

        <div className={styles.download}>
          <a href={`/pdf/cv/lsp-cv-${locale}.pdf`} download>{t('download-pdf')}</a>
        </div>
      </header>
    </>
  )
}