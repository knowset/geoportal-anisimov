import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
import { LocationMarkers } from "./LocationMarkers";
import { type RoadMap } from "../libCpp/mapper";
import { Loading } from "./Loading";
import { Error as ErrorComp } from "./Error";

export const FindRoutesMap: FC<{}> = () => {
    const [markers, setMarkers] = useState<LatLng[]>([]);
    const [allRoutes, setAllRoutes] = useState<RoadMap | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ message: string }[]>([]);

    const deleteLastMarker: () => void = () => {
        if (markers.length > 0) {
            markers.pop();
        }
        const copy = [...markers];
        setMarkers((current) => copy);
    };

    useEffect(() => {
        // Fixme: load highway-line.json into localstorage
        const fetchData = async () => {
            if (!isLoading) {
                setIsLoading(true);
                const res = await fetch("/highway-line.json");

                const data = await res.json();

                if (!data) {
                    setErrors([{ message: "Не удалось загрузить дороги." }]);
                    setIsLoading(false);
                    return;
                }

                setAllRoutes(data);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading text="Загружаем дороги" />;
    }

    if (errors.length > 0) {
        // FIXME: Change to ErrorComponents
        return <ErrorComp text={errors[0].message} />;
    }

    return (
        <>
            <MapContainer
                center={[59.2239, 39.884]}
                zoom={13}
                scrollWheelZoom={true}
                attributionControl={false}
                zoomControl={false}
                doubleClickZoom={false}
            >
                <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                <LocationMarkers markers={markers} setMarkers={setMarkers} />
            </MapContainer>
            {markers.length > 0 ? (
                <div className="absolute h-16 w-full bottom-0 z-[1000] flex justify-center">
                    <div className="h-12 px-2 bg-white rounded-md flex items-center justify-center">
                        <button
                            onClick={deleteLastMarker}
                            className="bg-red-500 hover:bg-red-600 h-8 px-2 rounded-md text-base text-white"
                        >
                            Удалить маркер {markers.length}?
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
};
