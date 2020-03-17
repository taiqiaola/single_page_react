/**
 * @Author niukai
 * @date 2020.3.17
 * @description 菜单配置
 */
import { Home, ProjectManage, ItemDeclare, LoginPage } from "@/pages";

export const menuConfig = [
  {
    path: "/home",
    // component: Home,
    // isFirstRoute: true,
    name: "首页"
  },
  {
    path: "/projectmanage",
    // component: ProjectManage,
    name: "项目管理",
    children: [
      {
        path: "/receiveletter",
        // component: ReceiveLetter,
        name: "窗口收件"
      },
      {
        path: "/sendletter",
        // component: SendLetter,
        name: "窗口发件"
      }
    ]
  },
  {
    path: "/itemdeclare",
    // component: ItemDeclare,
    name: "事项申报"
  }
];
