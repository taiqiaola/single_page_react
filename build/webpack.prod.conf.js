const webpackMerge = require("webpack-merge"); // 合并webpack配置文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离css，webpack4推荐的分离css的插件
const autoprefixer = require("autoprefixer"); // 给css自动加浏览器兼容性前缀的插件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除目录

const webpackConfigBase = require("./webpack.base.conf.js");

const webpackConfigProd = {
  mode: "production",
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ["babel-loader"],
        exclude: /(node_modules)/,
        include: /src/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 生产环境时，使用css分离
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
          MiniCssExtractPlugin.loader, // 生产环境时，使用css分离
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
    new CleanWebpackPlugin(), // 删除dist目录
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
};

module.exports = webpackMerge(webpackConfigBase, webpackConfigProd);
