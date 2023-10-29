import { FC } from "react";

const Logo: FC<{}> = () => {
    return (
        <>
            <img src="/logo.png" alt="logo" className="h-10" loading="lazy"/>
        </>
    );
};

export default Logo;
