'use client'
import styles from "@/public/css/page.module.css"
import { useUrl } from 'nextjs-current-url'

export default function Lang({ locale }) {
  const { href: currentUrl, pathname } = useUrl() ?? {}
  const currentPathWithoutLanguage = pathname ? pathname.replace(/^\/(en|ru)/, '') : ''
  const newPath = `/${locale === 'en' ? 'ru' : 'en'}${currentPathWithoutLanguage}`

  return (
    <>
        {locale === 'en' && (
        <>
            <p className={styles.bold}>en</p>
            /
            <a href={newPath}>ru</a>
        </>
        )}

        {locale === 'ru' && (
            <>
            <a href={newPath}>en</a>
            /
            <p className={styles.bold}>ru</p>
            </>
        )}
    </>
  )
}
