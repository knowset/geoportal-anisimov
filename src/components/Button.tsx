import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="bg-[#5d56ff] hover:bg-[#4843c4] h-8 px-2 rounded-md text-white transition-all duration-300 text-lg"
        >
            {children}
        </button>
    );
};
