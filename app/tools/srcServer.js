import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../../webpack.config';
import open from 'open';

/* eslint-disable no-console */
process.env.NODE_ENV = 'dev';

const port = process.env.PORT || 5000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', function(req, res) {
  res.sendFile(path.join( __dirname, '../../src/index.html'));
});

app.listen(port, function(err) {
  console.log(`App run on port: ${port}`);
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
