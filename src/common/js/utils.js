/**
 * @Author niukai
 * @date 2020.3.17
 * @description 通用方法配置文件
 */

/**
 * @description 拼接body
 */
export function params(options) {
  var arr = [];
  for (var key in options) {
    var value = options[key];
    if (Object.prototype.toString.call(value) === "[object Array]" || Object.prototype.toString.call(value) === "[object Object]") {
      arr.push(key + "=" + encodeURIComponent(JSON.stringify(value)));
      continue;
    }
    arr.push(key + "=" + encodeURIComponent(value));
  }
  return arr.join("&");
}

/**
 * @Author niukai
 * @description 获取重定向后的二级路由
 * @params 路由配置
 * @return 二级路由的path值
 */
export const getRedirectPath = config => {
  const afterData = config.filter(item => item.isFirstRoute);
  return afterData[0].path;
};
