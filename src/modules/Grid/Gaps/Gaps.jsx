import React from "react"
import clsx from "clsx";
import styles from "./Gaps.module.css";

const containerProps = [
    styles.columnGapContainer,
    styles.rowGapContainer,
    styles.bothGapContainer,
    styles.combinedGapContainer,
    styles.percentageGapContainer,
    styles.vwGapContainer,
    styles.vhGapContainer,
    styles.vmaxGapContainer,
    styles.vminGapContainer,
    styles.emGapContainer,
    styles.remGapContainer,
];

const getPropName = (className) => {
    return Object.keys(styles).find(key => styles[key] === className);
};

// eslint-disable-next-line react/prop-types
const Container = ({ className }) => (
    <>
        <h2>{getPropName(className)}</h2>
        <div className={clsx(styles.container, className)}>
            {["1", "2", "3", "4"].map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
            ))}
        </div>
        <br />
    </>
);

export function Gaps() {
    const endOfPageRef = React.useRef(null)
    
    React.useEffect(() => {
        endOfPageRef.current?.scrollIntoView();
    }, []);
    
    return (
        <>
            {containerProps.map((props, index) => (
                <Container key={index} className={props}/>
            ))}
            <div ref={endOfPageRef} />
        </>
    );
}
