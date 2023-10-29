import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "./Loading";
import { Navbar } from "./Navbar";

export const Layout: FC<{}> = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loading text="Загружаем карты" />}>
                <Outlet /> 
            </Suspense>
        </>
    );
};
