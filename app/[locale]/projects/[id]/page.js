import Layout from "../../layout";
import styles from "@/public/css/page.module.css";
import getTranslation from "@/components/base/lang/translations";
import Header from "@/components/base/header/header";
import Footer from "@/components/base/footer";
import { getProjectData } from "../projects";
import ReactMarkdown from 'react-markdown';

export default async function Home({ params: { locale, id } }) {
  const t = await getTranslation(locale);
  const data = getProjectData(id, locale);

  const components = {
    a: ({ node, ...props }) => {
      return <a {...props} target="_blank" />;
    }
  };

  return (
    <>
      <Layout>
        <Header t={t} locale={locale} title={data.title} />
        <main className={styles.main}>
          <div className={styles.content}><ReactMarkdown components={components}>{data.content}</ReactMarkdown></div>
        </main>
        <Footer />
      </Layout>
    </>
  );
}