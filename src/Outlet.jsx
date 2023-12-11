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
const Repeat = React.lazy(() => import("src/modules/Grid/Repeat/index.js").then(module => ({ default: module.Repeat })));

export const $router = createRouter({
    Home: '/',
    Containers: "/grid/containers",
    Property: "/grid/property",
    TrackSizing: "/grid/track-sizing",
    FractionUnit: "/grid/fraction-unit",
    Minmax: "/grid/minmax",
    MinAndMaxContent: "/grid/min-and-max-content",
    FitContent: "/grid/fit-content",
    Repeat: "/grid/repeat",
});

const RouteToComponent = {
    Home,
    Containers,
    Property,
    TrackSizing,
    FractionUnit,
    Minmax,
    MinAndMaxContent,
    FitContent,
    Repeat,
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
