import React from "react";
import Header from "../templates/Header";
const RootLayout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);
export default RootLayout;