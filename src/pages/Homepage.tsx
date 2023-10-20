import { useEffect } from "react";
import { FindWaysMap } from "../components/FindWaysMap";

export const Homepage = () => {
    useEffect(() => {
        document.getElementsByTagName("title")[0].textContent =
            "Гео-Портал | Нахождение пути";
    });

    return <FindWaysMap />;
};
