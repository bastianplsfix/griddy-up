import {clsx} from "clsx";
import {
    container,
    inlineContainer,
    item,
    twoColumnContainer,
    justRowsContainer,
    twoByTwoContainer,
    fourByOneContainer,
    unnecessaryColumnsContainer,
    unnecessaryRowsContainer
} from "./Containers.module.css"

export function Containers() {
    return (
        <>
        <div className={clsx(container, twoColumnContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={clsx(container, justRowsContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>


        <br></br>

        <div className={clsx(container, twoByTwoContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={clsx(container, fourByOneContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={clsx(container, justRowsContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={clsx(container, unnecessaryColumnsContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={clsx(container, unnecessaryRowsContainer)}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>

        <br></br>

        <div className={inlineContainer}>
            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>4</div>
        </div>
        </>
    )
}