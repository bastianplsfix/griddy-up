import {clsx} from "clsx";
import {container, item} from "./Property.module.css"

export function Property() {
    return (
        <div className={clsx(container)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>
    )
}