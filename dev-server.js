const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path"); // 引入nodejs路径模块，处理路径用的

const webpackConfig = require("./build/webpack.dev.conf.js");

const devServerOptions = {
  contentBase: path.join(__dirname, "./"), // 最好设置成绝对路径
  publicPath: "/",
  historyApiFallback: true, // true默认打开index.html，false会出现一个目录，亦可配置
  hot: true, // 启用模块热替换特性
  inline: true,
  stats: "errors-only",
  https: true,
  port: 8001,
  overlay: true, // 出现错误之后会在页面中出现遮罩层提示
  compress: true, // 一切服务都启用gzip 压缩
  // open: true, // 运行之后自动打开本地浏览器
  // 服务器代理配置项
  proxy: {
    "/apiX/*": {
      target: "https://144.7.127.8:8888",
      secure: false,
      pathRewrite: { "^/apiX": "" }
      // changeOrigin: true
    }
  }
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, devServerOptions);
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

const portConfig = require("./port.json");
server.listen(portConfig.data.port, "localhost", () => {
  console.log(`
    dev server listening on port ${portConfig.data.port}
    visit https://localhost:${portConfig.data.port}
  `);
});
