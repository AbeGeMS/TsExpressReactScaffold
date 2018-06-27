module.exports = {
  watch: false,
  entry: "./src/test/client/sampleModel.test.ts",
  output: {
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