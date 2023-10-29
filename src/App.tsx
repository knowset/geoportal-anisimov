import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const Homepage = lazy(() => import("./pages/Homepage"));
const AvailabilityZonespage = lazy(
    () => import("./pages/AvailabilityZonespage")
);

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route
                        path="/availability_zones"
                        element={<AvailabilityZonespage />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
