import { useEffect } from "react";
import { FindRoutesMap } from "../components/FindRoutesMap";

const Homepage = () => {
    useEffect(() => {
        document.getElementsByTagName("title")[0].textContent =
            "Гео-Портал | Нахождение пути";
    });

    return <FindRoutesMap />;
};

export default Homepage;
