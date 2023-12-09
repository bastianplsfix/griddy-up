import {Outlet} from "src/Outlet.jsx";

export function RootLayout() {
    return (<div>
        <a href="/">Home</a>
        <Outlet />
    </div>)
} 