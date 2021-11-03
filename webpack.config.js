const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { VuetifyLoaderPlugin } = require("vuetify-loader");

const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    publicPath: "/" /* required for nested routes in vue-router */,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new VueLoaderPlugin(),
    // new VuetifyLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env.IS_DEVELOPMENT": true,
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true /* vuetify styles */,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
          /* For global scss styles */
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, "./src/static/styles/_theme.scss"),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".vue"],
    alias: {
      /* aliases should be duplicated to the jest.config.js in order to use them in tests */
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/ui/pages"),

      // /* SCSS aliases */
      "~modules": path.resolve(__dirname, "./src/static/styles/modules"),
      "~base": path.resolve(__dirname, "./src/static/styles/base"),
    },
  },
  devServer: {
    watchOptions: {
      ignored: [path.resolve(__dirname, "node_modules")],
    },
    hot: true,
    inline: true,
    https: false,
    disableHostCheck: true,
    historyApiFallback: true /* pages won't load in npm run serve without it */,
  },
};
