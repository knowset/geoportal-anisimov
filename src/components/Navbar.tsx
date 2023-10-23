import { FC } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { NavLink } from "./NavLink";

export const Navbar: FC<{}> = () => {
    return (
        <nav className="h-16 w-full bg-white fixed z-[1000] flex items-center justify-between sm:justify-start px-4 gap-4">
            <div>
                <img src="/logo.png" alt="logo" className="h-10" />
            </div>
            <span className="h-10 w-[1px] bg-zinc-200 hidden sm:flex"></span>
            <div className="gap-8 text-lg hidden sm:flex">
                <NavLink to="/">Нахождение пути</NavLink>
                <NavLink to="/availability_zones">Зоны доступности</NavLink>
            </div>
            <div className="flex sm:hidden">
                <MobileNavbar />
            </div>
        </nav>
    );
};
