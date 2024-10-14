# PWA Text Editor

You can access the deployed application here: [PWA Text Editor](https://pwa-text-editor-uv82.onrender.com)

## Description

This project is a Progressive Web Application (PWA) text editor that runs in the browser. It features data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

NOTE: Code recopied from a corrupt repo, current code has been refactored and debugged.

<img width="873" alt="Screenshot 2024-10-14 at 1 08 49 PM" src="https://github.com/user-attachments/assets/d974a845-3827-43b1-a380-380277a2dbde">

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [References](#references)

## User Story

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run start` to start the application

## Usage

- Open the application in your browser
- Use the text editor to create and edit content
- The content will be automatically saved when you click off the DOM window
- You can install the application as a PWA by clicking the "Install" button

## Deployed Application

You can access the deployed application here: [PWA Text Editor](https://pwa-text-editor-uv82.onrender.com)

## Technologies Used

- JavaScript
- Node.js
- Express.js
- IndexedDB
- Webpack
- Workbox
- CodeMirror

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## References

- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Webpack](https://webpack.js.org/)
- [Workbox](https://developers.google.com/web/tools/workbox)
- [CodeMirror](https://codemirror.net/)

## GitHub

For more projects and code, check out my GitHub profile: [Christopher's GitHub](https://github.com/Christopher)
