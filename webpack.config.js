import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

//Default Production
const port = process.env.PORT || 5000;
const prod = {
  devtool: 'source-map',
  entry: './src/index',
  target: 'web',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.ProgressPlugin({ profile: false }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comment: false,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.jsx?$/, include: path.resolve(__dirname, 'src'), loaders: ['babel-loader']},
      {test: /\.json$/, loader: "json"},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};

//Altering for development
const dev = {
  devtool: ' cheap-module-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  devServer: {
    contentBase: './src',
    headers: { "Access-Control-Allow-Origin": `http://localhost:${port}`, "Access-Control-Allow-Credentials": "true" }
  },
  plugins: [
    new webpack.ProgressPlugin({ profile: false }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

let configuration = prod;

if (process.env.NODE_ENV === 'dev') {
  configuration = Object.assign({}, prod, dev);
}

export default configuration;
