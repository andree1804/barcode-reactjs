const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, 'src', 'index.jsx'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: 'production',

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },


};