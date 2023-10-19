import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const FindWaysMap: FC<{}> = () => {
    return (
        <MapContainer
            center={[59.2239, 39.884]}
            zoom={13}
            scrollWheelZoom={true}
            attributionControl={false}
            zoomControl={false}
        >
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
};
