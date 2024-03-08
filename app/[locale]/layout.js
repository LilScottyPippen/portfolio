import "./globals.css";
import styles from "./page.module.css"
import Footer from "./footer";

export const metadata = {
  title: "LilScottyPippen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
