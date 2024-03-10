import styles from "@/public/css/page.module.css";
import getTranslation from "../../components/base/lang/translations";
import Header from "../../components/base/header/header";
import Footer from "../../components/base/footer";
import getSortedProjectsData from "./projects";

export default async function Home({ params: { locale } }) {
  const t = await getTranslation(locale);
  return (
    <>
      <Header t={t} locale={locale} title={t('elements:projects')} />
      <main className={styles.main}>
        <div className={styles.description}>
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}

async function Projects() {
  const projects = await getSortedProjectsData()
 
  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <br></br>
          <span>Read more →</span>
        </div>
      ))}
    </div>
  )
}