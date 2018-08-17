var debugConfig = {
  watch: false,
  mode:"development",
  entry: "./src/public/script/view/mainPage.tsx",
  output: {
    path: __dirname + '/debug/public/script/',
    filename: '[name].js',
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

var testConfig = {
  watch: false,
  mode:"development",
  entry: "./src/test/client/sampleModel.test.ts",
  output: {
    path: __dirname + '/debug/test/client/',
    filename: '[name].test.js',
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
}

module.exports = [debugConfig, testConfig];