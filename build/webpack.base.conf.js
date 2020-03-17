const path = require("path"); // 引入nodejs路径模块，处理路径用的
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 这个是通过html模板生成html页面的插件，动态配置多页面用得着
const TransferWebpackPlugin = require("transfer-webpack-plugin"); // 原封不动的把assets中的文件复制到dist文件夹中
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin"); // 使用antd来减小打包大小

const { resolve, join } = require("path");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: {
    index: ["./index.jsx", "babel-polyfill"],
    vendor: ["react", "react-dom"]
  },
  output: {
    publicPath: "/",
    path: resolve(__dirname, "../dist"),
    filename: "[name]-[hash].js"
  },
  resolve: {
    extensions: ["*", ".js", ".json", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new AntdDayjsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../index.html"),
      filename: "index.html",
      inject: true,
      hash: false,
      minify:
        process.env.NODE_ENV === "development"
          ? false
          : {
              removeComments: true, // 移除HTML中的注释
              collapseWhitespace: true, // 折叠空白区域 也就是压缩代码
              removeAttributeQuotes: true // 去除属性引用
            }
    })
    // new TransferWebpackPlugin(
    //   [
    //     {
    //       from: resolve(__dirname, "../src/assets"),
    //       to: "assets"
    //     }
    //   ],
    //   resolve(__dirname, "src")
    // )
  ]
};
