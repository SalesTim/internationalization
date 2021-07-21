![classification:PUBLIC](https://img.shields.io/badge/classification-PUBLIC-blue)
[![license](https://img.shields.io/badge/License-CC%20BY--SA%204.0-yellow?style=flat)](https://creativecommons.org/licenses/by-sa/4.0/)
![GitHub repo size](https://img.shields.io/github/repo-size/SalesTim/i18n)
![semver](https://img.shields.io/badge/semver-2.0.0-informational?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/SalesTim/i18n)
[![linkedin](https://img.shields.io/badge/follow-@salestim-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/company/salestim/)
[![twitter](https://img.shields.io/badge/follow-@salestim-blue?logo=twitter&logoColor=white)](https://twitter.com/intent/follow?screen_name=salestimcrm)

*"SalesTim Internationalization" is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).*

# 👋 Welcome to SalesTim i18n (Internationalization)

## Abstract
This repository contains resource files used to localize the [SalesTim Platform](https://www.salestim.com).  

Here is the current status of this localization effort:  

[![](https://img.shields.io/static/v1?label=en-us&message=100%&color=success)](https://github.com/SalesTim/i18n/blob/master/resources/en-us.json)
[![](https://img.shields.io/static/v1?label=fr-fr&message=100%&color=success)](https://github.com/SalesTim/i18n/blob/master/resources/fr-fr.json)
[![](https://img.shields.io/static/v1?label=es-es&message=100%&color=success)](https://github.com/SalesTim/i18n/blob/master/resources/es-es.json)
[![](https://img.shields.io/static/v1?label=it-it&message=100%&color=success)](https://github.com/SalesTim/i18n/blob/master/resources/it-it.json)
[![](https://img.shields.io/static/v1?label=de-de&message=100%&color=success)](https://github.com/SalesTim/i18n/blob/master/resources/de-de.json)
[![](https://img.shields.io/static/v1?label=ru-ru&message=0%&color=informational)](https://github.com/SalesTim/i18n/blob/master/resources/ru-ru.json)

To learn more about SalesTim templates capabilities, including how to create templates visually from our UI, please refer to our ***[Help Center](https://help.salestim.com/)***.

If you want to integrate your contents or applications with the SalesTim Platform API, for instance create template-based teams from Microsoft Power Automate, please refer to our ***[Tech Hub](https://developers.salestim.com/)***.

## Introduction

### Resource Files
I18n in SalesTim is implemented as resource files.  
Resource files are plain [JSON Files](https://en.wikipedia.org/wiki/JSON), which is an open standard file format that guarantees portability.  

There is a json file for each language/region pair in the `resources` folder:
```sh
.
├── resources
│   └── <language>-<region>.json  # language/region pair. For example: "en-us".
```

### Structural overview
Locale files are multi-level JSON objects containing key-value pairs organized in groups and sections, for instance:
```yaml
"home": {
  "myRequests": {
    "opened": "My requests",
    "closed": "Home"
  },
  "newTeam": {
    "opened": "New Team",
    "canceled": "Home",
    "saved": "Home"
  },
  "searched": "Search",
  "team": {
    "opened": "Opening...",
    "initiateTalkToOwners": "Starting conversation..."
  },
  "loggedOut": "Sign-out..."
}
```

### Fallback principles
SalesTim takes care of fallback, such as:
- Language without region: ```en``` -> ```en-us```
- Region to region: ```en-en``` -> ```en-us```
- Language to language: ```zh-cn``` -> ```en-us```

To determine the language to be used, SalesTim is using these information by descending priority:
1. Microsoft Teams language
2. Client / Browser language
3. ``` en-us ``` in last resort

In addition to regular text, individual strings could use the following features:
- HTML (For some specific keys, not recommended)
- Emojis
- Variables
- Plurals

### Variables
Strings may contain variables following the [printf notation](https://en.wikipedia.org/wiki/Printf_format_string), for instance:
```yaml
{
  "alphabet": "The first 4 letters of the english alphabet are: %s, %s, %s and %s"
}
```

### Plurals
The following keys are supported in strings to handle multiple versions on the same message:
- zero
- one
- many

For instance:
```yaml
{
  "enabled": {
    "zero": "Enabled with no approvers defined",
    "one": "Enabled for 1 approver",
    "many": "Enabled for %s approvers"
  }
}
```

## Implementation
SalesTim implements i18n using the following modules:
- Server-side: [i18n](https://www.npmjs.com/package/i18n)
- Client-side: [browser-i18n](https://www.npmjs.com/package/browser-i18n)

N.B: Client-side implementation is customized to implement the following capabilities:
- [JS Object Notation](https://en.wikipedia.org/wiki/JSON) for keys.
- Printf notation for strings implemented using the [sprintf-js](https://www.npmjs.com/package/sprintf-js) module.

## Communicating with the team
The easiest way to communicate with the team is via [GitHub Issues](https://github.com/SalesTim/i18n/issues/).

Please [file new issues](https://github.com/SalesTim/i18n/issues/new/choose), feature requests and suggestions, but **DO search for similar open/closed pre-existing issues before creating a new issue.**

## 🛂 Code of Conduct
See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md).

## 📃 Change Log
See [CHANGELOG](https://github.com/SalesTim/app-platform/blob/master/CHANGELOG.md).

## 🔐 Security Policy
See [SECURITY](./SECURITY.md).

## © License
See [LICENSE](./LICENSE.md).
