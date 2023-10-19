import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const setActive = ({ isActive }: any) => (isActive ? "text-indigo-700" : "");

export const CNavLink: FC<NavLinkProps> = (props) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                isActive
                    ? "text-pink-300 hover:text-pink-400"
                    : "hover:text-pink-100"
            }
        >
            {props.children}
        </NavLink>
    );
};
