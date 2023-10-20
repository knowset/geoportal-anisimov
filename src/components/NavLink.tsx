import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export const CNavLink: FC<NavLinkProps> = (props) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                "break-normal inline-flex items-center gap-3 bg-gradient-to-r from-[#5d56ff] to-[#5d56ff] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px] " +
                (isActive ? "bg-[length:0px_2px]" : "bg-[length:0px_0px]") +
                " " +
                props.className
            }
        >
            {props.children}
        </NavLink>
    );
};
