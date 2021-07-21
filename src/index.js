'use strict'
/**
 * Mail module for the SalesTim platform
 * Provides an abstraction layer to the underlying mail module.
 * Current implementation using SendGrid.
*/

// #region DECLARATIONS
// Platform dependencies
const path = require('path')
// External dependencies
const i18n = require('i18n')
// Internal dependencies
const i18nConfig = require('./config.js')
// Variables
let log = console
const DEFAULT_OPTIONS = {
  I18N_LOCALES_FOLDER: '/locales',
  I18N_AUTO_RELOAD: false,
  I18N_UPDATE_FILES: false,
  i18N_SYNC_FILES: false
}
const i18nLocalesFolder = DEFAULT_OPTIONS.I18N_LOCALES_FOLDER
let i18nAutoReload = DEFAULT_OPTIONS.I18N_AUTO_RELOAD
let i18nUpdateFiles = DEFAULT_OPTIONS.I18N_UPDATE_FILES
let i18nSyncFiles = DEFAULT_OPTIONS.I18N_SYNC_FILES
// #endregion DECLARATIONS

// #region INITIALIZATION

const initOptions = () => {
  // Load options from environment
  process.env.I18N_AUTO_RELOAD ? i18nAutoReload = JSON.parse(process.env.I18N_AUTO_RELOAD) : i18nAutoReload = DEFAULT_OPTIONS.I18N_AUTO_RELOAD
  process.env.I18N_UPDATE_FILES ? i18nUpdateFiles = JSON.parse(process.env.I18N_UPDATE_FILES) : i18nUpdateFiles = DEFAULT_OPTIONS.I18N_UPDATE_FILES
  process.env.i18N_SYNC_FILES ? i18nSyncFiles = JSON.parse(process.env.i18N_SYNC_FILES) : i18nSyncFiles = DEFAULT_OPTIONS.i18N_SYNC_FILES

  // where to store json files
  i18nConfig.directory = path.join(__dirname, '..', i18nLocalesFolder)
  // watch for changes in json files to reload locale on updates - defaults to false
  i18nConfig.autoReload = i18nAutoReload
  // whether to write new locale information to disk - defaults to true
  i18nConfig.updateFiles = i18nUpdateFiles
  // sync locale information accros all files - defaults to false
  i18nConfig.syncFiles = i18nSyncFiles
  // setting of log level DEBUG - default to require('debug')('i18n:debug')
  i18nConfig.logDebugFn = (msg) => {
    log.debug(msg)
  }
  // setting of log level WARN - default to require('debug')('i18n:warn')
  i18nConfig.logWarnFn = (msg) => {
    log.warn(msg)
  }
  // setting of log level ERROR - default to require('debug')('i18n:error')
  i18nConfig.logErrorFn = (msg) => {
    log.error(msg, ['i18n'], null)
  }
  // Apply i18n config
  i18n.configure(i18nConfig)
}
initOptions()

const init = (
  {
    logger = console
  } = {},
  cb) => {
  try {
    // Initialize dependencies from parameters if present
    logger ? log = logger : log = console
  } catch (err) { // Unexpected error
    log.error('Unexpected error initializing i18n module')
    if (cb) { cb(err, null) }
  }
}

// #endregion INITIALIZATION

// #region EXPORTS
module.exports = {
  init: init,
  server: i18n
}
// #endregion EXPORTS
