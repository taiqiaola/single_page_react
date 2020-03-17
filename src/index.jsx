import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reduxs/reducers/reducer";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import App from "./App";

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
