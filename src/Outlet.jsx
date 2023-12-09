import {createRouter} from "@nanostores/router"
import {useStore} from '@nanostores/react'
import {Home} from "./modules/Home/index.js"
import {Containers} from "./modules/Grid/Containers/index.js";
import {Property} from "./modules/Grid/Property/index.js";
import {TrackSizing} from "./modules/Grid/TrackSizing/index.js";
import {FractionUnit} from "./modules/Grid/FractionUnit/index.js";
import {Minmax} from "src/modules/Grid/Minmax/index.js";
import {MinAndMaxContent} from "src/modules/Grid/MinAndMaxContent/index.js";

export const $router = createRouter({
    home: '/',
    gridContainers: "/grid/containers",
    gridProperty: "/grid/property",
    gridTrackSizing: "/grid/track-sizing",
    gridFractionUnit: "/grid/fraction-unit",
    gridMinMax: "/grid/minmax",
    gridMinAndMaxContent: "/grid/min-and-max-content",
})

export const Outlet = () => {
    const page = useStore($router)

    if (!page) {
        return <div>Not found</div>
    } else if (page.route === 'home') {
        return <Home />
    } else if (page.route === "gridContainers") {
        return <Containers />
    } else if (page.route === "gridProperty") {
        return <Property />
    } else if (page.route === "gridTrackSizing") {
        return <TrackSizing />
    } else if (page.route === "gridFractionUnit") {
        return <FractionUnit />
    } else if (page.route === "gridMinMax") {
        return <Minmax />
    }
    else if (page.route === "gridMinAndMaxContent") {
        return <MinAndMaxContent />
    }
}