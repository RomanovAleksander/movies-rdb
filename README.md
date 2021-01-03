This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) [![Build Status](https://travis-ci.com/RomanovAleksander/movies-rdb.svg?branch=master)](https://travis-ci.com/RomanovAleksander/movies-rdb)

API - [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)

### Installing
```
$ git clone https://github.com/RomanovAleksander/movies-rdb.git - clone this repository
$ npm install || yarn install - install dependencies
```

### Using | Available Scripts
```
$ npm run start - start dev server
$ npm run build - build the application for production
$ npm run eject - copies all the configuration files and the transitive dependencies  into project
$ npm run eslint - run eslint 
$ npm run predeploy - build application for production
$ npm run deploy - deploy application on gh-pages
```

### Structure
```
.
├── public
│   ├── favivon.ico
│   └── index.html
├── src                    
│   ├── actions
│   │   ├── index.js
│   │   └── types.js
│   ├── assets
│   │   └── no-image.png
│   ├── components
│   │   ├── App
│   │   │   ├── App.js
│   │   │   ├── app.scss
│   │   │   └── index.js
│   │   ├── ErorBoundry
│   │   │   ├── ErorBoundry.js
│   │   │   └── index.js
│   │   ├── ErorIndicator
│   │   │   ├── ErorIndicator.js
│   │   │   ├── erorIndicator.scss
│   │   │   └── index.js
│   │   ├── ScrollArrow
│   │   │   ├── index.js
│   │   │   ├── ScrollArrow.js
│   │   │   └── scrollArrow.scss
│   │   └── Slider
│   │       ├── index.js
│   │       ├── Slider.js
│   │       └── slider.scss
│   ├── pages
│   │   ├── index.js
│   │   └── Catalog.js
│   ├── reducers
│   │   ├── movies.js
│   │   └── index.js
│   ├── services
│   │   ├── index.js
│   │   ├── LocalStorageService.js
│   │   └── api.js
│   ├── styles
│   │   ├── normalize.css
│   │   └── variables.js
│   ├── index.js
│   └── store.js
├── .gitignore 
├── .travis.yml
├── package.json
├── package-lock.json
├── README.md
├── yarn.lock
```
[Go to top](https://github.com/RomanovAleksander/movies-rdb#installing)
