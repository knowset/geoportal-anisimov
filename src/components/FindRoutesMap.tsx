"use client";

import { FC, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
// import useSwr from "swr";

import { LocationMarkers } from "./LocationMarkers";
// import { Loading } from "./Loading";
// import { Error as ErrorComp } from "./Error";
import { RotateCcw } from "lucide-react";
import { Button } from "./Button";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const route = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "LineString",
                coordinates: [
                    [36.603329, 61.3755799],
                    [36.6030427, 61.3745811],
                    [36.6028639, 61.3740071],
                    [36.6032648, 61.3733856],
                    [36.6036122, 61.3726006],
                    [36.6035636, 61.3718885],
                    [36.6030347, 61.3710208],
                ],
            },
            properties: {
                NAME: "",
                NAME_EN: "",
                NAME_RU: "",
                REF: "",
                HIGHWAY: "track",
                ONEWAY: "",
                BRIDGE: "",
                TUNNEL: "",
                MAXSPEED: "",
                LANES: "",
                WIDTH: "",
                SURFACE: "",
                OSM_TYPE: "way",
                OSM_ID: 4397210,
            },
        },
    ],
};

const FindRoutesMap: any = () => {
    const [markers, setMarkers] = useState<LatLng[]>([]);

    // const { data, error, isLoading } = useSwr("/highway-line.json", fetcher, {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: false,
    //     revalidateOnMount: false,
    // });

    // console.log(data);

    const deleteLastMarker: () => void = () => {
        if (markers.length > 0) {
            markers.pop();
        }
        const copy = [...markers];
        setMarkers((current) => copy);
    };

    // if (isLoading) {
    //     return <Loading text="Загружаем дороги" />;
    // }

    // if (error) {
    //     // FIXME: Change to ErrorComponents
    //     return <ErrorComp text={error.toString()} />;
    // }

    // console.log(window);

    // if (!window) {
    //     return null;
    // }

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
                    <div className="h-12 px-2 bg-white rounded-md flex items-center justify-center gap-4">
                        <Button onClick={deleteLastMarker}>
                            <RotateCcw />
                        </Button>
                        <Button onClick={() => {}}>Построить маршрут</Button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FindRoutesMap;
