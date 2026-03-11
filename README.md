# Employee List App

This is a small React application that displays a list of employees and allows basic interaction such as searching, filtering, and viewing employee details.

The goal of this project was to build a simple but clean UI using modern React tools and best practices.

## Live Demo

You can view the application here:
**Netlify:** https://employees-webapp.netlify.app/

## What the app does

* Displays employees in a table
* Allows searching employees by **name or email**
* Allows filtering by **department**
* Clicking an employee opens a **details modal**
* The modal also updates the **URL** so the state can be shared or refreshed
* Filters are persisted using **localStorage**

## Tech used

The project was built with:

* React
* TypeScript
* Vite
* Redux Toolkit
* React Router
* Material UI
* SCSS
* Vitest + React Testing Library

## Running the project locally

Clone the repository:

```id="vg6oyp"
git clone https://github.com/dimitrizzz/employees-app.git
```

Install dependencies:

```id="dkhs11"
npm install
```

Start the development server:

```id="r29hiz"
npm run dev
```
Run tests
```id="r29hiz"

npm run test
