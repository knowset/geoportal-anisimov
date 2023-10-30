"use client";

import { FC, useEffect, useState } from "react";

export const Map: FC<{}> = (props) => {
    const [Client, setClient] = useState<FC>();

    useEffect(() => {
        (async () => {
            if (typeof global.window !== "undefined") {
                const newClient = (await import("./FindRoutesMap")).default;
                setClient(() => newClient);
            }
        })();
    }, []);

    if (typeof global.window === "undefined" || !Client) {
        return null;
    }

    console.log("HERE")

    return Client ? <Client {...props} /> : null;
};
