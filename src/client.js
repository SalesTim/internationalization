// Client-side I18N implementation
const I18NCLIENT_MODULE_TAGS = ['i18n', 'module:i18nClient']
const CDN_PUBLICURL = 'https://dist.salestim.io'

const I18n = function (options, constructorCallback) {
  try {
    for (const prop in options) {
      // Identified by security/detect-object-injection, but safe as no value holds user input
      // eslint-disable-next-line
      this[prop] = options[prop]
    }
    this.setLocale(this.locale, constructorCallback)
  } catch (err) {
    console.error('Unexpected error in I18n constructor.', I18NCLIENT_MODULE_TAGS, err)
    if (constructorCallback) { constructorCallback(err, null) }
  }
}

I18n.localeCache = {}

I18n.prototype = {
  // defaultLocale: window.i18nConfig.defaultLocale,
  // directory: window.i18nConfig.localesDirectory,
  // extension: window.i18nConfig.extension,

  getLocale: function () {
    return this.locale
  },

  setLocale: function (locale, setLocaleCallback) {
    try {
      if (!locale) {
        locale = window.$('html').attr('lang')
      }
      if (!locale) {
        locale = this.defaultLocale
      }
      this.locale = locale
      if (locale in I18n.localeCache) {
        if (setLocaleCallback) { setLocaleCallback(null, true) }
        return null
      } else {
        this.getLocaleFileFromServer(setLocaleCallback)
      }
    } catch (err) {
      console.error('Unexpected error in I18n setLocale.', I18NCLIENT_MODULE_TAGS, err)
      if (setLocaleCallback) { setLocaleCallback(err, null) }
    }
  },

  getLocaleFileFromServer: function (getLocaleFileFromServerCallback) {
    try {
      // Check for fallbacks
      let validLocale
      const fallbackLocale = window.i18nConfig.fallbacks[this.locale]
      if (!fallbackLocale) {
        validLocale = this.locale
      } else {
        validLocale = fallbackLocale
      }
      this.locale = validLocale
      // window.$.getJSON(this.directory + '/' + validLocale + this.extension)
      window.$.getJSON(CDN_PUBLICURL + '/clients/locales/' + validLocale + this.extension)
        .done(function (data) {
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          I18n.localeCache[validLocale] = data
          if (getLocaleFileFromServerCallback) { getLocaleFileFromServerCallback(null, true) }
        })
        .fail(function (err) {
          console.warn('Getting i18n from server KO error: ' + err)
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          I18n.localeCache[validLocale] = {}
          if (getLocaleFileFromServerCallback) { getLocaleFileFromServerCallback(null, false) }
        })
        .always(function (data) {
          // console.log('Getting i18n from server done.')
        })
    } catch (err) {
      console.error('Unexpected error in I18n getLocaleFileFromServer.', I18NCLIENT_MODULE_TAGS, err)
      if (getLocaleFileFromServerCallback) { getLocaleFileFromServerCallback(err, null) }
    }
  },

  __: function () {
    try {
      // Check if the key uses object notation syntax
      const key = arguments[0]
      let msg = ''
      if (key.includes('.')) {
        const items = key.split('.')
        let currentItem = I18n.localeCache[this.locale]
        for (let index = 0; index < items.length; index++) {
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          const item = items[index]
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          currentItem = currentItem[item]
        }
        msg = currentItem
      } else {
        msg = I18n.localeCache[this.locale][arguments[0]]
      }

      if (msg === '') {
        msg = key
      }

      if (arguments.length > 1) { msg = window.vsprintf(msg, Array.prototype.slice.call(arguments, 1)) }

      return msg
    } catch (err) {
      console.error(`Unexpected error in I18n __() for key: ${arguments[0]}`, I18NCLIENT_MODULE_TAGS, [arguments[0], err])
      return arguments[0]
    }
  },

  __n: function (singular, count) {
    try {
      // Check if the key uses object notation syntax
      const key = arguments[0]
      let msg = ''
      if (key.includes('.')) {
        const items = key.split('.')
        let currentItem = I18n.localeCache[this.locale]
        for (let index = 0; index < items.length; index++) {
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          const item = items[index]
          // Identified by security/detect-object-injection, but safe as no value holds user input
          // eslint-disable-next-line
          currentItem = currentItem[item]
        }
        msg = currentItem
      } else {
        // Identified by security/detect-object-injection, but safe as no value holds user input
        // eslint-disable-next-line
        msg = I18n.localeCache[this.locale][singular]
      }

      count = parseInt(count, 10)
      if (count === 0) { msg = msg.zero } else { msg = count > 1 ? msg.many : msg.one }

      msg = window.vsprintf(msg, [count])

      if (arguments.length > 2) { msg = window.vsprintf(msg, Array.prototype.slice.call(arguments, 2)) }

      return msg
    } catch (err) {
      console.error('Unexpected error in I18n __n().', I18NCLIENT_MODULE_TAGS, err)
      return ''
    }
  }
}
