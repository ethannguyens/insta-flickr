# CTM React-Redux Word Count Prime

> An React-Redux Webpack Application to fetch images from flickr and allow user to save it.

### Installation
Both `yarn` and `npm` package manager work for this project. I use `yarn` for this documentation, swap out for 'npm' if you want to
```
$ yarn install
```

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
As an addition, this project as already been deployed to [Heroku](https://nguyene-ctm.herokuapp.com/) so that you may see it in action.
Request to process data ony here [https://nguyene-ctm.herokuapp.com/data](https://nguyene-ctm.herokuapp.com/data).

### Raw data
Raw Data - a JSOM object that contain all the words can be access by open the page [http://localhost:5000/data](http://localhost:5000/data) after the application is up running.

### Solution Approach
#### Read file `read-file.js`
All the below solutions are implemented. The streaming is a default method for this application.
##### Buffering - Load the entire content at once
###### Async - Asynchronously reads the whole content of a file.
Example: 

```javascriptvar 
const fs = require('fs');
fs.readFile('my-file.txt', 'utf8', (err, data) => {  
    if (err) throw err;
    console.log(data);
});
```
The callback is passed with 2 arguments `(err, data)`, where data is the content of the file.
If no encoding specified - utf8 in this case, the raw buffer is return. This is the widely use due to it's simplicity and non blocking.
###### Sync - Synchronously read the whole content of a file.
Executed thread is blocked. Error need to handle using a `try...catch`
Example:
```javascriptvar
var fs = require('fs');

try {  
    const data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}
```
#### Streaming - Load contents incrementally
Read file by open it as a stream
Example:
```javascriptvar 
const fs = require('fs');
const data = '';

const readStream = fs.createReadStream('my-file.txt', 'utf8');

readStream.on('data', chunk => {  
    data += chunk;
}).on('end', () => {
    console.log(data);
});
```
This is the most effective way to read a file specially large file:
* Less memory: the target file is loaded in chunks, not much memory needed to store data in a buffer
* Faster: stream cut down the response time by not waiting for load the whole file. This is significant for server app that is time sensitive
* Piping: chunks can be pipe to be consumed immediately.


#### Prime - `prime-number.js`
TDD approach, solving traditional prime algorithm problem using while loop. The algorithm complexity is `O(sqrt(n))`

#### Webpack
`Webpack` is used to bundle all of the files of this project (js, jsx, scss, json...). JavaScipt file is transpile using babel before bundling.
There 2 separate configurations, 1 for development with hot module reloading, source map. One for deployment with `uglify` and no source mapping

#### React-Redux
`React` is used to build the components and `Redux` to manage the application states.
For the scale of this project Redux is rather an over engineering. However, for demonstration of my love for it and the scalability of the project.

#### Yes Babel - No Jquery
Jquery is rather a heavy and non optimized library. 
Instead, I develop the application using the latest ES6 and its best practice following with the Airbnb Styleguide. 
The code is then transpile using `babel` to support older browser as well execute new ES6 functionalities in the non-support environment

#### Yes NPM - No Task Runner (Gulp, Grunt)
For the small to medium size project task runners are not necessary.
On the other hand, `NPM` scripts allow us to specify all the tasks runner I want

#### Dom structure
I follow the **BEM** syntax in naming the elements classes. The generated dome is rather clean and human readable which result in easy styling.

#### Styling
 * Grid: a simple Grid system is used for responsive design
 * SASS: sass is used to structure and styling

### Unit tests
For the demonstration used both **TDD** and **BDD** in this project. For the server side I use **TDD**. On the client side - `React` namely I used BDD
  *  All tests are written in ES6 and are transpiled before running.
  * `nock` is used to mock HTTP request.
  * `enzyme` is to help assert, manipulate, and traverse react components.
  * `mocha` as test runner.
  * `jsdom` is used to construct the fake DOM.
  * `expect` and native node `asser` are used for assertions.

### Future Improvements
Due to the time scale of this project, these following improvements can be made:
  * `webpack` for hashing the bundle version for deploying to CDN.
  * Unit test run on the browser instead of on `node`.
  * User acceptance with **Webdriverio** **Selenium** on local browser or **SauceLabs**
  * **GitHook** to enforce code standard on commit.
  * May separate stylesheet fromt he bundle for scalability.

#### App Deployment - Measurements
| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| HTML         | 1ms   	|369B  |
| bundle JS       | 29.5ms      |95.7KB  |
| Total        | 30ms     | 96KB |

#### App Deployment - Data Processing
This is the measure for processing time of the [http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt)
Direct access through [http://localhost:5000/data](http://localhost:5000/data)

| Asset        | Load time | Size  |
| ------------ |:----------|-------|
| JSON       | 84.14ms      |24.6KB  |
| Total        | 84.14ms     | 24.6KB |



