import Layout from "../layout"
import styles from "@/public/css/page.module.css";
import getTranslation from "@/components/base/lang/translations";
import Header from "@/components/base/header/header";
import Footer from "@/components/base/footer";
import getSortedProjectsData from "./projects";

let t

export default async function Home({ params: { locale } }) {
  t = await getTranslation(locale);

  return (
    <>
      <Layout>
        <Header t={t} locale={locale} title={t('elements:projects')} />
        <main className={styles.main}>
          <div className={styles.description}>
            <Projects t={t} locale={locale} />
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  );
}

async function Projects(locale) {
  const projects = await getSortedProjectsData(locale)

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div className={styles.project} key={project.id}>
          <h3><a href={`/projects/${project.id}`}>{project.title}</a></h3>
          <span>{project.description}</span>
          <a href={`/projects/${project.id}`}>{t('elements:readMore')}</a>
        </div>
      ))}
    </div>
  )
}