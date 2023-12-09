import React from 'react';
import { createRouter } from "@nanostores/router";
import { useStore } from '@nanostores/react';

// Lazy import components
const Home = React.lazy(() => import("./modules/Home/index.js").then(module => ({ default: module.Home })));
const Containers = React.lazy(() => import("./modules/Grid/Containers/index.js").then(module => ({ default: module.Containers })));
const Property = React.lazy(() => import("./modules/Grid/Property/index.js").then(module => ({ default: module.Property })));
const TrackSizing = React.lazy(() => import("./modules/Grid/TrackSizing/index.js").then(module => ({ default: module.TrackSizing })));
const FractionUnit = React.lazy(() => import("./modules/Grid/FractionUnit/index.js").then(module => ({ default: module.FractionUnit })));
const Minmax = React.lazy(() => import("src/modules/Grid/Minmax/index.js").then(module => ({ default: module.Minmax })));
const MinAndMaxContent = React.lazy(() => import("src/modules/Grid/MinAndMaxContent/index.js").then(module => ({ default: module.MinAndMaxContent })));
const FitContent = React.lazy(() => import("src/modules/Grid/FitContent/index.js").then(module => ({ default: module.FitContent })));

export const $router = createRouter({
    home: '/',
    gridContainers: "/grid/containers",
    gridProperty: "/grid/property",
    gridTrackSizing: "/grid/track-sizing",
    gridFractionUnit: "/grid/fraction-unit",
    gridMinMax: "/grid/minmax",
    gridMinAndMaxContent: "/grid/min-and-max-content",
    gridFitContent: "/grid/fit-content",
});

const RouteToComponent = {
    home: Home,
    gridContainers: Containers,
    gridProperty: Property,
    gridTrackSizing: TrackSizing,
    gridFractionUnit: FractionUnit,
    gridMinMax: Minmax,
    gridMinAndMaxContent: MinAndMaxContent,
    gridFitContent: FitContent,
};

export const Outlet = () => {
    const page = useStore($router);
    const Component = RouteToComponent[page?.route];

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            { Component
                ? <Component />
                : <div>Not found</div>
            }
        </ React.Suspense>
    );
};
