import styles from "@/public/css/page.module.css";
import Lang from "../lang/lang";
import Map from "./map";

export default function Header({ t, locale, title }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.lang}>
          <Lang locale={locale} />
        </div>

        <h1>{title}</h1>

        <div className={styles.nav}>
          <Map t={t} locale={locale} title={title} />
        </div>
      </header>
    </>
  );
}
