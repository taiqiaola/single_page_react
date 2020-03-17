const webpack = require("webpack"); // 引入webpack
const webpackMerge = require("webpack-merge"); // 合并webpack配置文件
const autoprefixer = require("autoprefixer"); // 给css自动加浏览器兼容性前缀的插件

const webpackConfigBase = require("./webpack.base.conf.js");

const webpackConfigDev = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: ["react-hot-loader/babel"]
          }
        },
        exclude: /(node_modules)/,
        include: /src/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: ["ie >= 8", "Firefox >= 20", "Safari >= 5", "Android >= 4", "Ios >= 6", "last 4 version"]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: ["ie >= 8", "Firefox >= 20", "Safari >= 5", "Android >= 4", "Ios >= 6", "last 4 version"]
                })
              ]
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NamedModulesPlugin()
  ]
};

module.exports = webpackMerge(webpackConfigBase, webpackConfigDev);
