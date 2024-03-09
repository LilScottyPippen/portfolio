"use client"
import styles from "@/public/css/page.module.css";
import getTranslation from "../../components/base/lang/translations";
import Header from "../../components/base/header/header";
import Footer from "../../components/base/footer";

export default async function Home({ params: { locale } }) {
  const t = await getTranslation(locale);
  
  return (
    <>
      <Header t={t} locale={locale} title={t('elements:projects')} />
      <main className={styles.main}>
        
      </main>
      <Footer />
    </>
  );
}
