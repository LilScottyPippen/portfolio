import "@/public/css/globals.css";
import styles from "@/public/css/page.module.css"

export default function ProjectsLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}
