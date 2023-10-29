import { FC } from "react";

type ErrorProps = {
    text: string;
};

export const Error: FC<ErrorProps> = ({ text }) => {
    return (
        <div className="h-[100vh] w-full bg-white flex items-center justify-center text-xl">
            <p className="animate-text bg-gradient-to-r from-[#ff5672] to-[#ff569c] bg-clip-text text-transparent text-center text-4xl font-black p-2">
                {text}
            </p>
        </div>
    );
};
