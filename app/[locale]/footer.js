import styles from "./page.module.css";
const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
        {YEAR}© lilscottypippen
    </footer>
  );
}
