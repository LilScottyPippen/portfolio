import styles from "./page.module.css";

export default function Header({ t, title }) {
  return (
    <>
      <div className={styles.lang}>
        <p className={styles.bold}>en</p>
        /
        <a href="#">ru</a>
      </div>

      <h1>{title}</h1>

      <div className={styles.nav}>
        <p className={styles.bold}>{title}</p>
        <a href="#">{t('elements:projects')}</a>
      </div>
    </>
  );
}
