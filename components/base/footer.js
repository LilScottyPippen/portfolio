import styles from "@/public/css/page.module.css"

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
        {YEAR}&copy; lilscottypippen
    </footer>
  );
}
