import Layout from "./layout"
import styles from "@/public/css/page.module.css"
import getTranslation from "@/components/base/lang/translations"
import Header from "@/components/base/header/header"
import Footer from "@/components/base/footer"
import ArmyTimer from "@/components/timers/types/ArmyTimer"

export default async function Home({ params: { locale } }) {
  const t = await getTranslation(locale)

  return (
    <>
      <Layout>
        <Header t={t} locale={locale} title="LilScottyPippen"/>
        <ArmyTimer locale={locale}/>
        <main className={styles.main}>
          <div className={styles.description}>
            <div>{t('about-me')}</div>
            <br></br>
            <div>{t('about-me-decription')}</div>
          </div>

          <div className={styles.block}>
            <h2>{t('elements:my-skills')}</h2>
            <iframe src="https://skillicons.dev/icons?i=python,django,html,css,js,mysql" height="50" title="skills"/>
          </div>
          <hr></hr>
          <div className={styles.block}>
            <h2>{t('elements:contacts')}</h2>
            <ul className={styles.contacts}>
              <li>GitHub: <a href="https://github.com/LilScottyPippen" target="_blank">@LilScottyPippen</a></li>
              {/* <li>Instagram: <a href="https://instagram.com/v_moem_serdce_dirka" target="_blank">@v_moem_serdce_dirka</a></li> */}
              <li>Telegram: <a href="https://t.me/lil_pig" target="_blank">@lil_pig</a></li>
              <li>Email: <a href="mailto:lilscottypippen33@gmail.com">lilscottypippen33@gmail.com</a></li>
            </ul>
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  )
}