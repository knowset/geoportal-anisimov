import { Menu, Pentagon, Waypoints, X } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { CNavLink as NavLink } from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

export const MobileNavbar: FC<{}> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
        setOpen((current) => !current);
    }, []);

    return (
        <>
            <div className="border h-10 w-10 flex items-center justify-center rounded-md border-[#5d56ff] cursor-pointer">
                {!open ? (
                    <Menu
                        className="text-[#5d56ff] animate-waving"
                        onClick={toggleOpen}
                    />
                ) : (
                    <X
                        className="text-[#5d56ff] animate-waving"
                        onClick={toggleOpen}
                    />
                )}
            </div>
            <AnimatePresence>
                {open && (
                    <div
                        className="absolute left-0 top-16 w-full h-[calc(100vh_-_4rem)] backdrop-blur-sm bg-white/30"
                        onClick={toggleOpen}
                    >
                        <motion.div
                            initial={{ width: 0, z: 1000 }}
                            animate={{ width: "fit-content" }}
                            exit={{ width: 0 }}
                            className="h-full bg-white z-[1000]"
                        >
                            <hr />

                            <motion.div
                                initial={{
                                    width: "100%",
                                }}
                                animate={{
                                    transition: { ease: "easeIn", duration: 0 },
                                }}
                                exit={{ opacity: 0, translateX: "-100%" }}
                                className="flex flex-col p-4 text-2xl gap-4 overflow-hidden"
                            >
                                <NavLink to="/">
                                    <Waypoints className="text-[#5d56ff]" />
                                    Нахождение пути
                                </NavLink>
                                <NavLink to="/availability_zones">
                                    <Pentagon className="text-[#5d56ff]" />
                                    Зоны доступности
                                </NavLink>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
