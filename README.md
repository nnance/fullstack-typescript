# fullstack-typescript

This is an example application built with Create React App with TypeScript for the front end and using Express and TypeScript for the backend.  The React App uses pure functional components and React Hooks.

It includes a shared API module that insures type safety between the front end and back end.

## Branches

The project has several branches that increasing build on top of each other to add features and complexity.  This section describes the features in each branch to help determine which branch to download / clone as a template for a new project.

### master

This is the most basic version of the application which includes:

* Fullstack TypeScript application with a single page
* App context that supports light and dark Theme switcher
* Auth context with a hard coded example of login and logout

### nav-header

This version has multiple pages with routing

* Navigation header with React Router links
* An Orders page that retrieves and renders a list from the server

### secure-routes

Building on the multi page app the Orders page is secure

* Has a SignIn page that validates a user with the server
* Secures the Orders page by redirecting to SignIn

## How to use

Download one of the branches [or clone the repo](https://github.com/nnance/fullstack-typescript):

### master

```sh
curl https://codeload.github.com/nnance/fullstack-typescript/tar.gz/master | tar -xz
cd fullstack-typescript-master
```

### nav-header

```sh
curl https://codeload.github.com/nnance/fullstack-typescript/tar.gz/nav-header | tar -xz
cd fullstack-typescript-nav-header
```

### secure-routes

```sh
curl https://codeload.github.com/nnance/fullstack-typescript/tar.gz/secure-routes | tar -xz
cd fullstack-typescript-secure-routes
```

## Getting started

This is a mono repo that uses Lerna to manage multiple packages.   Start the project in development mode:

```
$ npm i
$ npm start
```

Development mode has live reload of all the modules such that as changes are made the application will reload or the browser will refresh keeping the runtime in sync with the live changes.

## Project Structure

The application is made up of three packages:

* **server** - An example RESTful server based on Express and TypeScript
* **app** - React App created with create-react-app with TypeScript
* **api** - Common API module shared by the Server and the App to insure API consistency

## Tasks

- [x] Complete project structure docs
- [x] Make nav-header branch simple by removing signin and just having theme selector and orders 
- [x] Add docs on how to clone repo for a template based on the complexity of the app
- [ ] Add a new branch that has a user profile page and a list of users that shows the profile of a user
- [x] Determine if the css files are used, if so add them as theme overrides
