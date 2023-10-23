import { Menu, Pentagon, Waypoints, X } from "lucide-react";
import { FC, useCallback, useState } from "react";
import { NavLink } from "./NavLink";
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
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
                                    translateX: -500,
                                }}
                                animate={{
                                    translateX: 0,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 0,
                                    },
                                }}
                                exit={{ opacity: 0, translateX: -500 }}
                                className="flex flex-col p-4 text-2xl gap-4 overflow-hidden"
                            >
                                {/* Fixme: Доделать анимацию для ссылок */}

                                <NavLink to="/" device="mobile" active="mobile">
                                    <Waypoints className="text-[#5d56ff]" />
                                    Нахождение пути
                                </NavLink>
                                <NavLink
                                    to="/availability_zones"
                                    device="mobile"
                                    active="mobile"
                                >
                                    <Pentagon className="text-[#5d56ff]" />
                                    Зоны доступности
                                </NavLink>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
