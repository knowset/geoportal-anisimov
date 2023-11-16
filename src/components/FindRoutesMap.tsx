"use client";

import { FC, useState } from "react";
import {
    MapContainer,
    Polygon,
    Polyline,
    Rectangle,
    TileLayer,
} from "react-leaflet";
import { LatLng, LatLngBounds } from "leaflet";
// import useSwr from "swr";

import { LocationMarkers } from "./LocationMarkers";
// import { Loading } from "./Loading";
// import { Error as ErrorComp } from "./Error";
import { RotateCcw } from "lucide-react";
import { Button } from "./Button";

const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
];

const FindRoutesMap: any = () => {
    const [markers, setMarkers] = useState<LatLng[]>([]);
    const [hitboxCoords, setHitboxCoords] = useState<[number, number][]>([]);

    const deleteLastMarker: () => void = () => {
        if (markers.length > 0) {
            markers.pop();
        }
        const copy = [...markers];
        setMarkers((current) => copy);
    };

    const findRoutes: () => void = async () => {
        const coordinates = markers.map((coord) => [coord.lat, coord.lng]);
        console.log(coordinates);
        const res = await fetch("http://localhost:3000/api/find_routes", {
            method: "POST",
            body: JSON.stringify(coordinates),
            cache: "no-store",
        });

        const hbCoords = (await res.json()) as [number, number][];

        // for (let i = 0; i < hbCoords.length; i++) {
        //     coords.push(new LatLngBounds(new LatLng(5, 5), new LatLng(5, 5)));
        // }

        setHitboxCoords(hbCoords);
    };

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
                {hitboxCoords.length === 2 ? (
                    <Rectangle bounds={hitboxCoords} />
                ) : null}
            </MapContainer>
            {markers.length > 0 ? (
                <div className="absolute h-16 w-full bottom-0 z-[1000] flex justify-center">
                    <div className="h-12 px-2 bg-white rounded-md flex items-center justify-center gap-4">
                        <Button onClick={deleteLastMarker}>
                            <RotateCcw />
                        </Button>
                        <Button onClick={findRoutes}>Построить маршрут</Button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FindRoutesMap;
