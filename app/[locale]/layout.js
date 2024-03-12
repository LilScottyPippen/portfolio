import "@/public/css/globals.css";
import styles from "@/public/css/page.module.css"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "LilScottyPippen",
  description: "This is the portfolio of a backend developer",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
