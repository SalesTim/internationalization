// I18N configuration
// Used both server-side and client-side

(function () {
  const i18nConfig = {
    // Supported locales - other locales will use fallback
    locales: [
      'en-us',
      'fr-fr',
      'es-es',
      'it-it',
      'de-de'
    ],
    // fallbacks for all Microsoft Teams supported languages
    fallbacks: {
      'ar-ae': 'en-us',
      'ar-bh': 'en-us',
      'ar-eg': 'en-us',
      'ar-iq': 'en-us',
      'ar-jo': 'en-us',
      'ar-kw': 'en-us',
      'ar-lb': 'en-us',
      'ar-ly': 'en-us',
      'ar-ma': 'en-us',
      'ar-om': 'en-us',
      'ar-qa': 'en-us',
      'ar-sa': 'en-us',
      'ar-tn': 'en-us',
      'ar-ye': 'en-us',
      bg: 'en-us',
      ca: 'en-us',
      cs: 'en-us',
      da: 'en-us',
      de: 'de-de',
      'de-at': 'de-de',
      'de-ch': 'de-de',
      'de-de': 'de-de',
      'de-li': 'de-de',
      'de-lu': 'de-de',
      el: 'en-us',
      en: 'en-us',
      'en-au': 'en-us',
      'en-bz': 'en-us',
      'en-ca': 'en-us',
      'en-gb': 'en-us',
      'en-ie': 'en-us',
      'en-in': 'en-us',
      'en-jm': 'en-us',
      'en-my': 'en-us',
      'en-nz': 'en-us',
      'en-ph': 'en-us',
      'en-tt': 'en-us',
      'en-za': 'en-us',
      'en-zw': 'en-us',
      es: 'es-es',
      'es-ar': 'es-es',
      'es-bo': 'es-es',
      'es-cl': 'es-es',
      'es-co': 'es-es',
      'es-cr': 'es-es',
      'es-do': 'es-es',
      'es-ec': 'es-es',
      'es-gt': 'es-es',
      'es-hn': 'es-es',
      'es-mx': 'es-es',
      'es-ni': 'es-es',
      'es-pa': 'es-es',
      'es-pe': 'es-es',
      'es-pr': 'es-es',
      'es-py': 'es-es',
      'es-sv': 'es-es',
      'es-uy': 'es-es',
      'es-ve': 'es-es',
      et: 'en-us',
      eu: 'en-us',
      fi: 'en-us',
      fr: 'fr-fr',
      'fr-be': 'fr-fr',
      'fr-ca': 'fr-fr',
      'fr-ch': 'fr-fr',
      'fr-lu': 'fr-fr',
      'fr-mc': 'fr-fr',
      gl: 'en-us',
      he: 'en-us',
      hi: 'en-us',
      hr: 'en-us',
      hu: 'en-us',
      id: 'en-us',
      it: 'it-it',
      'it-ch': 'it-it',
      ja: 'en-us',
      kk: 'en-us',
      ko: 'en-us',
      lt: 'en-us',
      lv: 'en-us',
      ms: 'en-us',
      nl: 'en-us',
      'nl-be': 'en-us',
      no: 'en-us',
      pl: 'en-us',
      'pl-pl': 'en-us',
      pt: 'en-us',
      'pt-br': 'en-us',
      'pt-pt': 'en-us',
      ro: 'en-us',
      'ro-md': 'en-us',
      ru: 'en-us',
      'ru-md': 'en-us',
      sk: 'en-us',
      sl: 'en-us',
      sr: 'en-us',
      sv: 'en-us',
      'sv-fi': 'en-us',
      'sv-se': 'en-us',
      th: 'en-us',
      tr: 'en-us',
      uk: 'en-us',
      vi: 'en-us',
      'zh-cn': 'en-us',
      'zh-hk': 'en-us',
      'zh-mo': 'en-us',
      'zh-sg': 'en-us',
      'zh-tw': 'en-us'
    },
    templatesLanguages: [
      {
        code: 'de-at',
        lang: 'de',
        country: 'at'
      },
      {
        code: 'de-ch',
        lang: 'de',
        country: 'ch'
      },
      {
        code: 'de-de',
        lang: 'de',
        country: 'de'
      },
      {
        code: 'de-li',
        lang: 'de',
        country: 'li'
      },
      {
        code: 'de-lu',
        lang: 'de',
        country: 'lu'
      },
      {
        code: 'en-au',
        lang: 'en',
        country: 'au'
      },
      {
        code: 'en-bz',
        lang: 'en',
        country: 'bz'
      },
      {
        code: 'en-ca',
        lang: 'en',
        country: 'ca'
      },
      {
        code: 'en-gb',
        lang: 'en',
        country: 'gb'
      },
      {
        code: 'en-ie',
        lang: 'en',
        country: 'ie'
      },
      {
        code: 'en-in',
        lang: 'en',
        country: 'in'
      },
      {
        code: 'en-jm',
        lang: 'en',
        country: 'jm'
      },
      {
        code: 'en-nz',
        lang: 'en',
        country: 'nz'
      },
      {
        code: 'en-ph',
        lang: 'en',
        country: 'ph'
      },
      {
        code: 'en-tt',
        lang: 'en',
        country: 'tt'
      },
      {
        code: 'en-us',
        lang: 'en',
        country: 'us'
      },
      {
        code: 'en-za',
        lang: 'en',
        country: 'za'
      },
      {
        code: 'en-zw',
        lang: 'en',
        country: 'zw'
      },
      {
        code: 'es-ar',
        lang: 'es',
        country: 'ar'
      },
      {
        code: 'es-bo',
        lang: 'es',
        country: 'bo'
      },
      {
        code: 'es-cl',
        lang: 'es',
        country: 'cl'
      },
      {
        code: 'es-co',
        lang: 'es',
        country: 'co'
      },
      {
        code: 'es-cr',
        lang: 'es',
        country: 'cr'
      },
      {
        code: 'es-do',
        lang: 'es',
        country: 'do'
      },
      {
        code: 'es-ec',
        lang: 'es',
        country: 'ec'
      },
      {
        code: 'es-es',
        lang: 'es',
        country: 'es'
      },
      {
        code: 'es-gt',
        lang: 'es',
        country: 'gt'
      },
      {
        code: 'es-hn',
        lang: 'es',
        country: 'hn'
      },
      {
        code: 'es-mx',
        lang: 'es',
        country: 'mx'
      },
      {
        code: 'es-ni',
        lang: 'es',
        country: 'ni'
      },
      {
        code: 'es-pa',
        lang: 'es',
        country: 'pa'
      },
      {
        code: 'es-pe',
        lang: 'es',
        country: 'pe'
      },
      {
        code: 'es-pr',
        lang: 'es',
        country: 'pr'
      },
      {
        code: 'es-py',
        lang: 'es',
        country: 'py'
      },
      {
        code: 'es-sv',
        lang: 'es',
        country: 'sv'
      },
      {
        code: 'es-uy',
        lang: 'es',
        country: 'uy'
      },
      {
        code: 'es-ve',
        lang: 'es',
        country: 've'
      },
      {
        code: 'fr-be',
        lang: 'fr',
        country: 'be'
      },
      {
        code: 'fr-ca',
        lang: 'fr',
        country: 'ca'
      },
      {
        code: 'fr-ch',
        lang: 'fr',
        country: 'ch'
      },
      {
        code: 'fr-fr',
        lang: 'fr',
        country: 'fr'
      },
      {
        code: 'fr-lu',
        lang: 'fr',
        country: 'lu'
      },
      {
        code: 'fr-mc',
        lang: 'fr',
        country: 'mc'
      },
      {
        code: 'it-it',
        lang: 'it',
        country: 'it'
      },
      {
        code: 'it-ch',
        lang: 'it',
        country: 'ch'
      }
    ],
    // Site wide default locale
    defaultLocale: 'en-us',

    // sets a custom cookie name to parse locale settings from - defaults to NULL
    // Unused parameter
    // cookie: 'yourcookiename',

    // query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
    // queryParameter: 'locale',

    // controll mode on directory creation - defaults to NULL which defaults to umask of process user. Setting has no effect on win.
    // Unused parameter
    // directoryPermissions: '755',

    // what to use as the indentation unit - defaults to "\t"
    indent: '\t',
    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.json',
    // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
    prefix: '',
    // enable object notation such as greetings.formal
    objectNotation: true

    // object or [obj1, obj2] to bind the i18n api and current locale to - defaults to null
    // Unused parameter
    // register: global,

    // hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
    // note that this will *not* overwrite existing properties with the same name
    // Unused parameter
    // api: {
    //   '__': 't',  //now req.__ becomes req.t
    //   '__n': 'tn' //and req.__n can be called as req.tn
    // }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = i18nConfig
  } else {
    window.i18nConfig = i18nConfig
  }
})(); // eslint-disable-line -- Required as it generates an error during bundling
