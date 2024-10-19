"use client"
import styles from "@/public/css/timer.module.css"
import { useEffect, useState} from "react"
import initTranslations from "./base/lang/i18n"

const getDayWord = (days) => {
    const dayNum = parseInt(days, 10)
    if (dayNum % 10 === 1 && dayNum % 100 !== 11) {
        return 'day'
    } else if ((dayNum % 10 >= 2 && dayNum % 10 <= 4) && (dayNum % 100 < 10 || dayNum % 100 >= 20)) {
        return 'few_days'
    } else {
        return 'many_days'
    }
}

export default function Banner({ timeLeft, locale }) {
    const [t, setT] = useState(() => (key) => key)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadTranslations() {
            const { t } = await initTranslations(locale, ['default'])
            setT(() => t)
            setLoading(false)
        }

        loadTranslations()
    }, [locale])

    const dayWord = getDayWord(timeLeft.days)

    if (loading) {
        return (
            <div className={styles.timer}>
                <p>&#8203;</p>
            </div>
        )
    }

    return (
        <div className={styles.timer}>
            <p>
                {t('untilArmy')}: {timeLeft.days} {t(dayWord)} {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </p>
        </div>
    )
}