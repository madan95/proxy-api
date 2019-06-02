const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')], //Entry point of module and add pollyfill before
  output: { //Where to emit the bundle/static
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  devtool: 'inline-source-map', //maps to orginal file for debuging
  mode: process.env.NODE_ENV, //prod mode if not manually set (webpack optimization in prod)
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'] //Helps resolving to relative paths when importing anything form src
  },
  devServer: {
    contentBase: path.join(__dirname, 'src') //Helps webpack-dev-server on what files to serve in the browser
  },
  /* Loaders, allows webpack to process other types of file and convert them (scss/css/png)
   *
   * Loaders have two properties "test" and "use":
   *
   * "test" -> what type of files should be transformed
   * "use" -> which loader should be used to transform
   *
   */
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'] //Babel to convert ES6 to ES5
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [ // last to first loader
          "style-loader", //inject css to DOM
          "css-loader", //Interprets imoprt style.css directive to css
          "sass-loader" //compiles sass into css (Node sass)
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'] //Helps resolving (import/require) a file into a url
      }
    ]
  },
  /*
   * PLugins help to perform wider range of task like (bundle optimizaiton, asset management, injection)
   *
   */
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, 'src', 'index.html')})  //Helps injecting JS to html
  ],
};
