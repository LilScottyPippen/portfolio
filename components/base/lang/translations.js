import initTranslations from "./i18n"

const files = ['default']

async function getTranslation(locale) {
    const { t } = await initTranslations(locale, files)
    return t
}

export default getTranslation