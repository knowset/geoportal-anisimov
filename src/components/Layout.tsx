import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { CNavLink as NavLink } from "./NavLink";

export const Layout: FC<{}> = () => {
    return (
        <>
            <header className="fixed w-full bg-zinc-800 p-4 z-[1000] flex text-white font-bold gap-8">
                <div>
                    <h1 className="text-xl">Гео-портал</h1>
                </div>
                <div className="flex gap-8 text-lg">
                    <NavLink to="/">Нахождение пути</NavLink>
                    <NavLink to="/availability_zones">Зоны доступности</NavLink>
                </div>
            </header>
            <Outlet />
        </>
    );
};
