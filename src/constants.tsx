import { Pentagon, Waypoints } from "lucide-react";
import { ReactNode } from "react";

export const navLinks: { title: string; href: string; icon: ReactNode }[] = [
    {
        title: "Нахождение пути",
        href: "/find_routes",
        icon: <Waypoints className="text-[#5d56ff]" />,
    },
    {
        title: "Зоны доступности",
        href: "/availability_zones",
        icon: <Pentagon className="text-[#5d56ff]" />,
    },
];
