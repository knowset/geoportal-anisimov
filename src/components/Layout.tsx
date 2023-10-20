import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout: FC<{}> = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
