/**
 * @Author niukai
 * @date 2020.3.17
 * @description 通用方法文件
 */

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
