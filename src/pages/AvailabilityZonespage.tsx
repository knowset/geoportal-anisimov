import { useEffect } from "react";
import { FindZoneMap } from "../components/FindZoneMap";

export const AvailabilityZonespage = () => {
    useEffect(() => {
        document.getElementsByTagName("title")[0].textContent =
            "Гео-Портал | Зоны доступности";
    });
    return (
        <div className="w-full h-full">
            <div className="fixed w-full h-full backdrop-blur-sm bg-white/30 z-[999] flex justify-center items-center">
                <p className="text-4xl ">Страница появится позже</p>
            </div>
            <FindZoneMap />
        </div>
    );
};
