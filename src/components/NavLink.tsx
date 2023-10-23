import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { NavLink as Link, NavLinkProps } from "react-router-dom";
import { cn } from "../lib/cn";

const navLinkVariants = cva(
    "whitespace-nowrap inline-flex items-center gap-3 bg-gradient-to-r from-[#5d56ff] to-[#5d56ff] bg-left-bottom bg-no-repeat",
    {
        variants: {
            device: {
                desktop:
                    "transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px] bg-[length:0px_0px]",
                mobile: "pr-4 bg-[length:0px_0px] bg-right",
            },
            active: {
                desktop: "bg-[length:100%_2px]",
                mobile: "bg-[length:2px_100%]",
            },
        },
        defaultVariants: {
            device: "desktop",
            active: "desktop",
        },
    }
);

export const NavLink: FC<
    NavLinkProps & VariantProps<typeof navLinkVariants>
> = (props) => {
    return (
        <Link
            {...props}
            className={({ isActive }) =>
                cn(
                    navLinkVariants({
                        device: props.device,
                        active: isActive ? props.active : null,
                    })
                )
            }
        >
            {props.children}
        </Link>
    );
};
