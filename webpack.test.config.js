const path = require('path');
const webpack = require('webpack');

//Default Production
const localhost = 'localhost';
const port = 3003;

const configuration = {
  entry: 'mocha-loader!./app/test/index.js',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  output: {
    filename: 'test.build.js',
    path: path.join(__dirname, 'app/test/bundle'),
    publicPath: `http://localhost:${port}/app/test/bundle`
  },
  devServer: {
    host: localhost,
    port: port,
    inline: false,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "global.GENTLY": false
    })
  ],
  module: {
    loaders: [
      {test: /\.scss$/, loaders: "null-loader"},
      {test: /\.jsx?$/, include: path.resolve(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /\.json$/, loader: "json"},
      {test: /(\.css)$/, loader: "null-loader"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "null-loader"},
      {test: /\.(woff|woff2)$/, loader: "null-loader"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "null-loader"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "null-loader"}
    ]
  },
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
    nodeModules: 'node_modules',
    'react/addons': true,
    "jsdom": "window",
    "cheerio": "window",
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react-addons-test-utils': 'react-dom'
  }],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

module.exports = configuration;
