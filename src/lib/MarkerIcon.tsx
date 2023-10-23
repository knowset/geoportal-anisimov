import { DivIcon, divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

export const createMarkerIcon: (markerNumber: number) => DivIcon = (
    markerNumber
) => {
    return divIcon({
        html: renderToStaticMarkup(
            <div className="h-6 w-6 bg-red-500 hover:bg-red-600 border -translate-x-[0.5rem] -translate-y-[0.5rem] text-white text-lg flex items-center justify-center rounded-full">
                {markerNumber}
            </div>
        ),
    });
};
