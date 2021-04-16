'use strict'

// #region DECLARATIONS
// Platform Dependencies
const os = require('os')
// External Dependencies
const figlet = require('figlet')
const gulp = require('gulp')
const bump = require('gulp-bump')
const git = require('gulp-git')
// Variables
const CONSOLE_PADDING = 120
const ROOT_FOLDER = './'
const PACKAGE_FILE = ROOT_FOLDER + 'package.json'
let pck = require(PACKAGE_FILE) // Not declared as a const as it may be refreshed/updated durung build
// #endregion DECLARATIONS

// #region INITIALIZATION

/**
 * Log startup parameters to console
 * @param {function} done - Callback()
 */
const logInfos = (done) => {
  try {
    // Generate ASCII header using figlet
    figlet.text('I18N', {
      font: 'Big',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, (err, data) => {
      if (!err) {
        // Log basic system and package infos
        console.info(''.padEnd(CONSOLE_PADDING, '*'))
        console.info(''.padEnd(CONSOLE_PADDING, ' '))
        console.log('SalesTim')
        console.log(data)
        console.info(''.padEnd(CONSOLE_PADDING, ' '))
        console.info(''.padEnd(CONSOLE_PADDING, '*'))
        done()
      } else {
        console.error('Error while generating build infos...')
        console.dir(err)
        done()
      }
    })
  } catch (err) { // Unexpected error
    console.error('Unexpected error logging build infos')
    console.dir(err)
    done()
  }
}

// #endregion INITIALIZATION

// #region PUSH

// Update package build version using the "Bump" package
const bumpPackageJson = (done) => { // eslint-disable-line no-unused-vars
  gulp.src([ROOT_FOLDER + 'package.json'])
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest(ROOT_FOLDER)).on('end', () => {
      // Clear package from cache
      delete require.cache[require.resolve(ROOT_FOLDER + 'package.json')]
      pck = require(ROOT_FOLDER + 'package.json')
      done()
    })
}

const commitChanges = (done) => {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('build: v' + pck.version)).on('end', () => {
      done()
    })
}

const pushToMaster = (done) => {
  git.push('origin', 'master', done)
}

// #endregion PUSH

// #region EXPORTS
exports.push = gulp.series(
  logInfos,
  bumpPackageJson,
  commitChanges,
  pushToMaster
)
// #endregion EXPORTS
