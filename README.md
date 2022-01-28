<p align="center">
  <h1 align="center">Portfolio Site</h1>

  <p align="center">
    A Showcase of my Skills, Experience, and Projects
  </p>
  <br/>
</p>

## About The Project

An Angular site that displays information about me and pulls information regarding my skill, experience, and projects from a REST API proxy which gets data from the Airtable API. The frontend makes calls to  two APIs: Netlify serverless functions and Formspree's form API.

## Built With

- [Angular CLI](https://github.com/angular/angular-cli)
- [Airtable.js](https://github.com/Airtable/airtable.js)
- [Netlify Functions](https://www.netlify.com/products/functions/)
- [Formspree](https://formspree.io/)

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Create an Airtable Base:
  * Create 'Skills' Table
      * `title` (text), `category` (multiple select)
   * Create 'Experience' Table &  'Main View' View
      * `company` (text), `role` (text), `description` (rich text), `startDate` (text), `endDate` (text)
   * Create 'Projects' Table &  'Main View' View
      * `title` (text), `slug` (text), `image` (attachment), `techStack` (multiple select), `description` (text), `designLink` (url), `codeLink` (url), `videoLink` (url), `demoLink` (url), `problem` (text), `action` (text), `solution` (text), `challenges` (rich text), `futureGoals` (rich text)

### Installation

1. Install NPM packages
```sh
npm i
```
2. Copy `serverless-functions/.env.example` to `serverless-functions/.env` & Edit it to include your Airtable credentials
```sh
AIRTABLE_API_KEY=<API Key Here>
AIRTABLE_BASE=<Base ID>
```
3. Copy `src/environments/environment.ts` to `src/environments/environment.prod.ts` & Edit it to include your base API url
```JS
export const environment = {
  production: true,
  API_BASE_URL: 'https://michie-portfolio.netlify.app'
};
```

## Usage

- Run `npm run serve` for a local dev server for your serverless functions. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the route files.
- Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
