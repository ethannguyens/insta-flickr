# Insta Flickr React-Redux SAP
> An React-Redux Webpack Application to fetch images from flickr and allow user to save it.

App is available here [https://en-insta-flickr.herokuapp.com/](https://en-insta-flickr.herokuapp.com/)
### Installation

```
$ yarn install
```

Both `yarn` and `npm` package manager work for this project. I use `yarn` for this documentation, swap out for 'npm' if you want to

Install all dependencies by running `yarn` command. All the dependencies are required for the app server and client for developments.

### Dependencies
* Node ^6.0
* Npm ^3.0
* Yarn ^1.0

### Repository
This project is currently stored publicly on GitHub: [https://github.com/ethannguyens/insta-flickr](https://github.com/ethannguyens/insta-flickr)

### Development Mode
```
$ yarn run start
```
This will enable webpack watch, hot module reloading, linting watch and test watch. This allows developers to develop with instant feedback from the browser thanks to hot module reloading.
The task will automatically open the page  [http://localhost:5000](http://localhost:5000).
The bundle version of development contains source map allow developers to easily debug.

### Deployment Mode
```
$ yarn run build
```
This will bundle up the application and put it in the dist folder and ready to deploy.
The task will automatically open the page  [http://localhost:5000](http://localhost:5000).
This bundle version is minified without source mapping to reduce the size of the app to minimal.
As an addition, this project as already been deployed to [Heroku](https://en-insta-flickr.herokuapp.com//) so that you may see it in action.

### Solution Approach

#### Flickr Public Feeds Api
The provided API doesn't support CORS or allow Cross Origin Request. This cause a problem when making an api call from the app. In addition, the risk of injection is not neglectable. There a few potential solutions

1. As suggested on the description, include the request to the header and supply the callback function. The callback function is hence needed to sit on the page globally. This is not ideal interm of interacting with react-redux. There is hassle of interacting with the store. Also, app will be not scalable and well structured.
2. Cross Origin Request Proxy is not scalable and slow down the app.
3. JSONP providing direct interact with the api and subdomains.

Considering pros and cons of the aboved solutions, JSONP is selected without any doubt. There is already the imnplementation of JSONP on JQuery `$ajax`. Howver, including JQuery just to use it's JSONP is not ideal. Instead, `fetch-jsonp` - popular JSONP module is used. 

#### Flickr Api Limitation
When requesting for the feeds, item is recieved contains the image url and other related details. However, there is no uniqued image id that can be to pipe to possible the flickr api to get the image details as well as diffent sizes. This create the problem on storing these images on the store. Ideally, I want to store the image id only and fetch api for more details when needed. Reality, I need to store the whole item object on the store. In addition, this cause the problem in identify the saved images. I need to compare the whole image object to identify which is slow and `JSON.stringify` is not fast or accurate.

#### Store App State
Evrthough a database (ideally NoSQL-MongoDB) to store the application state together user session is ideal for the app, the time limitation of the project create difficulty in implement it. In contrast, `localStorage` is the perfect place to store the application state - **redux store**. 

```javascript
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (err) {
    console.log(err);
  }
```
### Unit tests
There is no doubt of benefits of using **TDD** in developement. However, there is a trade off between time and assurance in **TDD** developement. Hence, I use **TDD** approach for server-side, api, actions, reducers, and store. On the other hand, **BDD** is applied to `React` compoenent.

  *  All tests are written in ES6 and are transpiled before running.
  * `enzyme` is to help assert, manipulate, and traverse react components.
  * `mocha` as test runner.
  * `expect` and native node `assert` are used for assertions.

#### Unit Test on Browser

```
$ yarn run test
```
This run on a `webpack-dev-server` and can be access at [http://localhost:3003/webpack-dev-server/test.html](http://localhost:3003/webpack-dev-server/test.html)

The experience of supporting old browsers shows me the great benefit of running unit test on the real browser rather than `node` env or `phantomjs`. 

* Codes and Tests are bundled and loaded to the browser for testing
* By running test on the browser, I am able to catch unaware errors related to browsers specific such `Object.assign` not supported on any IE belows 11. In the last year since I switch to run unit test on the browser, I've catch more than 100 errs. This force the build to fail and prevent deployment.
* Also, it brings the interaction with the browser and dom more accurate (a bit of intergation test here). 
* Finally, I can easily connect to SauceLabs to test on multiple browsers concurrently.

#### Unit Test on Node

```
$ yarn run test:node
```

There are tests failed on the node env to demonstrate the hassle of extra mocking to interact witht the browser. In this case, it is `localStorage`. The mocking of unit tests on the browser and unit test on node are different. For example, `mock` is used to mock request and response from the server where `xhr-nock` is used to mock the same for the browser but with differnt syntax. Thus, the project should chose 1 type of unit test environment and support it.

#### Webpack
`Webpack 3.0` is used to bundle all of the files of this project (js, jsx, scss, json...). JavaScipt file is transpile using babel before bundling.
There 2 separate configurations, 1 for development with hot module reloading, source map. One for deployment with `uglify` and no source mapping

#### React-Redux
`React` is used to build the components and `Redux` to manage the application states.
For the scale of this project Redux is rather an over engineering. However, for demonstration of my love for it and the scalability of the project.

#### Babel - No Jquery
Jquery is rather a heavy and non optimized library. 
Instead, I develop the application using the latest ES6 and its best practice following with the selected Airbnb Styleguide. 
The code is then transpile using `babel` to support older browser as well execute new ES6 functionalities in the non-support environment

#### NPM - No Task Runner (Gulp, Grunt)
For the small to medium size project task runners are not necessary.
On the other hand, `NPM` scripts allow us to specify all the tasks runner I want.

#### Dom structure
I follow the **BEM** syntax in naming the elements classes. The generated dom is rather clean and human readable which result in easy styling.

#### Styling
Eventhough, there was a consider to use Google material design library, the project doesn't use any external libraries or frameworks for styling. I believe in a good DOM and syntax and these third party libraries go or will go against it, more than its worth

 * Approaching using modules, partials, variables to create styleguide and escapsulate the styling, assets inside the componenents.
 * Grid: a simple Grid system is used for responsive design.
 * SASS: sass is used to structure and styling.

### Future Improvements
Due to the time scale of this project, these following improvements can be made:

  * `webpack` for hashing the bundle version for deploying to CDN.
  * Wallabyjs plugin can be integrated for instant test feedback and coverage. [https://github.com/ethannguyens/wallaby](https://github.com/ethannguyens/wallaby)
  * Tests for React component can be improved.
  * User acceptance with **Webdriverio** **Selenium** on local mobile devices, browser or **SauceLabs**. [https://github.com/ethannguyens/e2e-automation](https://github.com/ethannguyens/e2e-automation)
  * **GitHook** to enforce code standard on commit. [https://github.com/ethannguyens/githooks](https://github.com/ethannguyens/githooks)

#### App Deployment - Measurements (Free tier on Heroku)
| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| HTML         | 1ms   	|369B  |
| bundle JS       | 331ms      |295KB  |
| Total        | 332ms     | 300KB |

#### App Deployment - Data Processing (Free tier on Heroku)
This is the measure for calling the App Api and request feeds Flickr Public Api.

| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| JSON       | 272ms      |1.9KB  |
| Total        | 272ms     | 1.9KB |

## Conclusion
Dealing with <del>outdated</del> restricted API is rather time comsuming and increase security risk. It also shows some useful thing of Jquery namely `$ajax`. In addition, serialise Redux store is rather easy and as useful as store it on a database. ALl these above make this project interesting and exciting. 

Through this project, I want to demonstrate my skills as full stack javascript developer. I really enjoy building it and I hope you enjoy using it, so review it and give me feedbacks. Feel free to fork and changes as you like. Any other questions, please keep in touch.

