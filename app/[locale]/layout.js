import "../../public/css/globals.css";
import styles from "../../public/css/page.module.css"
import Footer from "../components/footer";

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
