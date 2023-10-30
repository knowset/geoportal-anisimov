import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "../lib/cn";
import { usePathname } from "next/navigation";

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

type NavLinkProps = {
    href: string;
    children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof navLinkVariants>;

export const NavLink: FC<NavLinkProps> = ({
    children,
    href,
    device,
    active,
    ...props
}) => {
    const path = usePathname();
    const isActive = href === path;

    return (
        <Link
            {...props}
            href={href}
            className={cn(
                navLinkVariants({ device, active: isActive ? active : null })
            )}
        >
            {children}
        </Link>
    );
};
