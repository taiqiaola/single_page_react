import { ReceiveLetter, SendLetter } from "../pages";

export const routerConfig = [
  {
    path: "/receiveletter",
    component: ReceiveLetter,
    isFirstRoute: true,
    name: "窗口收件"
  },
  {
    path: "/sendletter",
    component: SendLetter,
    name: "窗口发件"
  }
];
