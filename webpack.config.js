module.exports = {
  entry: {
    "app": "./app/main.ts"
  },
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      },
    ]
  }
};
