import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Playstation from "./pages/playstation/Playstation"
import Sega from "./pages/sega/Sega"
import Nintendo from "./pages/nintendo/Nintendo";

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
    },
    {
        path:"/nintendo",
        element: <Nintendo/>,
    },
    {
        path:"/playstation",
        element: <Playstation/>,
    },
    {
        path:"/sega",
        element: <Sega/>,
    },
]);
