var language = window.navigator.userLanguage || window.navigator.language;
if (language === "ru") {
    window.location.href = '/ru'
} else if (language === "fr") {
    window.location.href = "/fr"
} else if (language === "zh") {
    window.location.href = "/zh"
} else {
    window.location.href = "/en"
}