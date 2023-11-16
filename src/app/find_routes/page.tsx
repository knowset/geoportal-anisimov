// import { useMapper } from "@/src/lib/useMapper";
import { Map } from "../../components/Map";

// const getAllRoutes = async () => {
//     const res = await fetch(`${process.env.URL_ORIGIN}/highway-line.json`, {
//         cache: "no-store",
//     });

//     if (!res.ok) {
//         throw new Error("Не удалось загрузить дороги.");
//     }

//     return res.json();
// };

export default async function Page() {

    return (
        <div>
            <Map />
        </div>
    );
}
