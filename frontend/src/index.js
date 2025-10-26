import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import Store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container, {
  onRecoverableError: (error) => {
    console.error('React error:', error);
  }
});

root.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
