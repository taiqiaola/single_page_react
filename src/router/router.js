import { Home, ProjectManage, ItemDeclare, LoginPage, RegisterPage } from "@/pages";

export const routerConfig = [
  {
    path: "/register",
    component: RegisterPage,
    name: "注册"
  },
  {
    path: "/login",
    component: LoginPage,
    name: "登录"
  },
  {
    path: "/home",
    component: Home,
    isFirstRoute: true,
    name: "首页"
  },
  {
    path: "/projectmanage",
    component: ProjectManage,
    name: "项目管理"
  },
  {
    path: "/itemdeclare",
    component: ItemDeclare,
    name: "事项申报"
  }
];
