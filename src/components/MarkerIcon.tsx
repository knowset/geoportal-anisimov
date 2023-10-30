import { DivIcon, divIcon, PointExpression } from "leaflet";

export const createMarkerIcon: (markerNumber: number) => DivIcon = (
    markerNumber
) => {
    return divIcon({
        html: markerNumber.toString(),
        iconSize: [30, 30],

        className:
            "bg-red-500 hover:bg-red-600 border text-white text-lg text-center font-bold rounded-full",
    });
};
