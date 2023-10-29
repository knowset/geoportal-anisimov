import { FC } from "react";

type LoadingProps = {
    text: string;
};

export const Loading: FC<LoadingProps> = ({ text }) => {
    return (
        <div className="h-[100vh] w-full bg-white flex items-center justify-center text-xl">
            <p className="animate-text bg-gradient-to-r from-[#5d56ff] to-cyan-500 bg-clip-text text-transparent text-center text-4xl font-black p-2">
                {text}
            </p>
        </div>
    );
};
