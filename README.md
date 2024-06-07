# Project Name

WATCHERS

## Description

This is a React application to browse and discover movies that uses React Router v6 for routing. It includes pages for Home, Details, Menu, Login, and Signup.

## Installation

Clone the repository and run `npm install` to install the dependencies.

```bash
git clone
npm install
```

## Usage

To start the application, run the following command: `npm run dev`.

The application will start on `http://localhost:3000`.

## API

The base URL for the API is: `http://localhost:4000/`.

## Scripts For backend Folder

- `cd backend` : The path to the backend folder.
- `npm i`: Installing backend dependencies.
- `npm run db:init`: Initialize the database with dummy data.
- `npm run dev`: Start the server in development mode with Nodemon.

## Routes

| Route      | Description                           |
| ---------- | ------------------------------------- |
| `/`        | The home page wrapped in a layout.    |
| `/details` | The details page wrapped in a layout. |
| `/menu`    | The menu page wrapped in a layout.    |
| `/login`   | The login page.                       |
| `/signup`  | The signup page.                      |

## Features

- Browse Movies
- Search For Specific Movies
- View Detailed Information About Each Movie
- User Authentication (Signup, Login, Logout)
- Responsive Design

## Dependencies

This project uses the following dependencies:

- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `bootstrap`: ^5.3.3
- `google-fonts`: ^1.0.0
- `ionicons`: ^7.4.0
- `react`: ^18.2.0
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.23.0
- `react-scripts`: ^5.0.1
- `swiper`: ^10.3.1
- `web-vitals`: ^3.5.2

## Dev Dependencies

This project uses the following development dependencies:

- `@types/react`: ^18.2.66
- `@types/react-dom`: ^18.2.22
- `@vitejs/plugin-react-swc`: ^3.5.0
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.1
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.6
- `vite`: ^5.2.0

## Tech Stack

This project uses the following technologies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): A collection of navigational components for React apps.
- [Bootstrap](https://getbootstrap.com/): A popular CSS framework for responsive, mobile-first front-end web development.
- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [ESLint](https://eslint.org/): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Jest](https://jestjs.io/): A delightful JavaScript Testing Framework with a focus on simplicity.
- [Swiper](https://swiperjs.com/): A modern mobile touch slider with hardware accelerated transitions.
- [Ionicons](https://ionicons.com/): Beautifully crafted open source icons.
- [Google Fonts](https://fonts.google.com/): A library of over 800 free licensed font families.
