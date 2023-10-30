"use client";

import { FC } from "react";
import Logo from "./Logo";
import { MobileNavbar } from "./MobileNavbar";
import { NavLink } from "./NavLink";

import { navLinks } from "../constants";

export const Navbar: FC<{}> = () => {
    return (
        <nav className="h-16 w-full bg-white fixed z-[1000] flex items-center justify-between sm:justify-start px-4 gap-4">
            <Logo />
            <span className="h-10 w-[1px] bg-zinc-200 hidden sm:flex"></span>
            <div className="gap-8 text-lg hidden sm:flex">
                {navLinks.map((link) => (
                    <NavLink key={"nav_link_" + link.title} href={link.href}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
            <div className="flex sm:hidden">
                <MobileNavbar navLinks={navLinks} />
            </div>
        </nav>
    );
};
