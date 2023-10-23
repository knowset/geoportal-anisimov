import { LatLng } from "leaflet";
import { Dispatch, FC, SetStateAction } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { createMarkerIcon } from "../lib/MarkerIcon";

type LocationMarkersProps = {
    markers: LatLng[];
    setMarkers: Dispatch<SetStateAction<LatLng[]>>;
};

export const LocationMarkers: FC<LocationMarkersProps> = ({
    markers,
    setMarkers,
}) => {
    const map = useMapEvents({
        click(e) {
            if (markers.length < 2) {
                setMarkers((current) => [...current, e.latlng]);
            }
        },
    });

    if (markers.length === 0) {
        return null;
    }

    map.flyTo(markers[markers.length - 1], map.getZoom());

    return (
        <>
            {markers.map((markerPosition, i) => (
                <Marker
                    key={"marker-" + i.toString()}
                    position={markerPosition}
                    icon={createMarkerIcon(i + 1)}
                ></Marker>
            ))}
        </>
    );
};
