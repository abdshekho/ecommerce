import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ThemeProvider } from "@material-tailwind/react";
import store from "./redux/store"
import { Provider } from "react-redux";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <Provider store={store} >
  {/* <ThemeProvider > */}
  
    <App />
  {/* </ThemeProvider> */}
  </Provider>
);

// reportWebVitals();