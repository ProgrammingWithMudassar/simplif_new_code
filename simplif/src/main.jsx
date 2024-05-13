import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme.js";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Features/Counter/CounterSlice.js'
import { WaitlistApi } from './Features/API/WaitlistApi.js';
import { AllUserDataApi } from './Features/API/AllUserDataApi.js';
import { BrandApi } from './Features/API/BrandApi.js'
import { AuthApi } from './Features/API/Auth.js'
import { InfluencerApi } from './Features/API/InfluencerApi.js'



const store = configureStore({
  reducer: {
    counter: counterSlice,
    [WaitlistApi.reducerPath]: WaitlistApi.reducer,
    [AllUserDataApi.reducerPath]: AllUserDataApi.reducer,
    [BrandApi.reducerPath]: BrandApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [InfluencerApi.reducerPath]: InfluencerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      WaitlistApi.middleware,
      AllUserDataApi.middleware,
      BrandApi.middleware,
      AuthApi.middleware,
      InfluencerApi.middleware,
    ),
});
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
