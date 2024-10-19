import Layout from "../layout"
import styles from "@/public/css/page.module.css"
import getTranslation from "@/components/base/lang/translations"
import Header from "@/components/base/header/header"
import Footer from "@/components/base/footer"
import getSortedProjectsData from "./projects"
import ArmyTimer from "@/components/timers/types/ArmyTimer"

let t

export default async function Home({ params: { locale } }) {
  t = await getTranslation(locale)

  return (
    <>
      <Layout>
        <Header t={t} locale={locale} title={t('projects')} />
        <ArmyTimer locale={locale}/>
        <main className={styles.main}>
          <div className={styles.description}>
            <Projects t={t} locale={locale} />
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

async function Projects(locale) {
  const projects = await getSortedProjectsData(locale)

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <div className={styles.project} key={project.id}>
          <span className={styles.project_header}>
            <h3><a href={`/projects/${project.id}`}>{project.title}</a></h3>
            <span className={styles.project_type}>{project.type}</span>
          </span>
          <span>{project.description}</span>
          <a href={`/projects/${project.id}`}>{t('readMore')}</a>
        </div>
      ))}
    </div>
  )
}