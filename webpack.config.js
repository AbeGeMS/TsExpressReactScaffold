module.exports = {
  watch: false,
  entry: "./src/public/script/view/mainPage.tsx",
  output: {
    path: __dirname + '/debug/public/script/',
    filename: '[name].min.js',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader?{configFileName: \"./tsconfig.json\"}" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  }
};