import { NextResponse, type NextRequest } from "next/server";
// import { findRoutes, GeoJsonType } from "@knowset/mapper";
import PathFinder from "geojson-path-finder";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    const data = (await req.json()) as number[][];
    const start = new Date();
    const publicFileResponse = await fetch(
        `${process.env.URL_ORIGIN}/highway-line.json`
    );

    const geoJson = await publicFileResponse.json();

    return NextResponse.json({});
}
