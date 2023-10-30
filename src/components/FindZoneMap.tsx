import { FC } from "react";
import { Error } from "./Error";
// import { MapContainer, TileLayer } from "react-leaflet";

export const FindZoneMap: FC<{}> = () => {
    return (
        <div>
            <Error text="Страница появится позже" />
        </div>
        // <MapContainer
        //     center={[59.2239, 39.884]}
        //     zoom={13}
        //     scrollWheelZoom={true}
        //     attributionControl={false}
        //     zoomControl={false}
        // >
        //     <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        // </MapContainer>
    );
};
