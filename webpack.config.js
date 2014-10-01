module.exports = {
  entry: './react-calendar.js',
  output: {
     path: 'dist',
     filename: 'react-calendar.js',
     library: 'ReactCalendar',
     libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony'},
      // For sample theme
      { test: /\.less$/, loader: 'file-loader?name=[name].css!less-loader'},
      { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    lodash: "lodash",
    moment: "moment"
  },
  plugins: []
};
