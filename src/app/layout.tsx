import type { Metadata } from "next";
import { Layout } from "../components/Layout";
import "./globals.css";

export const metadata: Metadata = {
    title: "Гео-Портал",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://npmcdn.com/leaflet@1.0.0-rc.2/dist/leaflet.css"
                />
            </head>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
