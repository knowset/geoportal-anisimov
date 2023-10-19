import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AvailabilityZonespage } from "./pages/AvailabilityZonespage";
import { Homepage } from "./pages/Homepage";

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
