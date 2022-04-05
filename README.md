# <div style="display: flex; align-items: center"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="drawing" width="50"/>🍎 Oepfelbank - Angular Client 🍎<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="drawing" width="50"/></div>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=maxi1123_oepfelbank-assessment&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=maxi1123_oepfelbank-assessment)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=maxi1123_oepfelbank-assessment&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=maxi1123_oepfelbank-assessment)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=maxi1123_oepfelbank-assessment&metric=bugs)](https://sonarcloud.io/summary/new_code?id=maxi1123_oepfelbank-assessment)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=maxi1123_oepfelbank-assessment&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=maxi1123_oepfelbank-assessment)

Proudly presenting the Client code for the Oepfelbank technical assessment.

Made with ❤️

## 🛠️ Metadata

This project was generated using:

- [Angular CLI](https://angular.io/cli) version 12.1.4.
- [Node.js](https://nodejs.org/en/) version 14.15.0.

Package Manager:

- [NPM](https://www.npmjs.com/) version 6.14.8.

I recommend using [nvm](https://github.com/nvm-sh/nvm) for simple Node version management.

## ➡️ Installation

- Clone the repository
- Grab the node version listed under the Metadata section via [nvm](https://github.com/nvm-sh/nvm)
- Run `nvm install <node-version>`
- Use the environment `nvm use <node-version>`
- In the project root run `npm install`

## ⚙️ Development server

Run `ng serve` for a dev server. After you spin it up, navigate to `http://localhost:4200`

## ⚠️ Attention

Be sure to use a Chrome instance with CORS disabled. Follow [this tutorial](https://alfilatov.com/posts/run-chrome-without-cors/) by Aleksandr Filatov to see how to do so.

Due to security reasons, enable CORS again once you're done developing.

A few more notes, which concern the "extra features":

- As the login page only serves visual purposes and represents a state of "what it could look like", when you log out, you have to fill the whole form again. There's no logic coupled to it, other than showing your name on the home screen.

- After you give access to the NatWest sandbox accounts, the access token gets stored in local storage and has a rather long lifespan. So even after going through the login process again, the accounts will still be connected. To remove the connection and to be able to go through the auth UI flow again, just delete the contents of the browser's local storage and reload the page.

- For any other sandbox test user, than the main user with customer number 123456789012, the math on the investments page doesn't make sense, as the second account is completely statically hardcoded in the backend. However, it works for and is intended for the main user mentioned above.
