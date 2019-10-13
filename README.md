# fullstack-typescript

This is an example application built with Create React App with TypeScript for the front end and using Express and TypeScript for the backend.

It includes a shared API module that insures type safety between the front end and back end.

## Getting started

This is a mono repo that uses Lerna to manage multiple packages.   Start the project in development mode:

```
$ npm i
$ npm start
```

Development mode has live reload of all the modules such that as changes are made the application will reload or the browser will refresh keeping the runtime in sync with the live changes.

## Project Structure

The application is made up of three packages.

### server

### app

### api

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

### secure-ruotes

Building on the multi page app the Orders page is secure

* Has a SignIn page that validates a user with the server
* Secures the 

## How to use

Download the example [or clone the repo](https://github.com/mui-org/material-ui):

```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/master | tar -xz --strip=2 material-ui-master/examples/create-react-app
cd create-react-app
```

## Tasks

- [ ] Complete project structure docs
- [x] Make nav-header branch simple by removing signin and just having theme selector and orders 
- [ ] Add docs on how to clone repo for a template based on the complexity of the app
- [ ] Add a new branch that has a user profile page and a list of users that shows the profile of a user
- [x] Determine if the css files are used, if so add them as theme overrides
