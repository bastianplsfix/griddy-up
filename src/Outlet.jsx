import {createRouter} from "@nanostores/router"
import {useStore} from '@nanostores/react'
import {Home} from "./modules/Home/index.js"
import {Containers} from "./modules/Grid/Containers/index.js";

export const $router = createRouter({
    home: '/',
    gridContainers: "/grid/containers"
})

export const Outlet = () => {
    const page = useStore($router)

    if (!page) {
        return <div>Not found</div>
    } else if (page.route === 'home') {
        return <Home />
    } else if (page.route === "gridContainers") {
        return <Containers />
    }
}