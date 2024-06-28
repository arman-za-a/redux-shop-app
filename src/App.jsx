import React from "react";
import RootLayout from "./layouts/RootLayout";
import Router from "./routers/Router";
import { useProducts } from "./hooks/products";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  useProducts({ canFetch: true });
  return (
      <BrowserRouter>
        <RootLayout>
          <Router />
        </RootLayout>
      </BrowserRouter>
  );
};
export default App;