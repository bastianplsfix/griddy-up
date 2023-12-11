import React from "react"
import clsx from "clsx";
import styles from "./LineNames.module.css";

const containerProps = [
    styles.firstNameToThirdColumnContainer,
    styles.thirdItemToFirstColumnContainer,
    styles.thirdItemToFirstRowContainer,
    styles.firstItemToBottomRightCellContainer,
    styles.firstItemCol1ToCol2Container,
    styles.multipleLineNamesColumnsContainer
];

const getPropName = (className) => {
    return Object.keys(styles).find(key => styles[key] === className);
};

// eslint-disable-next-line react/prop-types
const Container = ({ className }) => (
    <>
        <h2>{getPropName(className)}</h2>
        <div className={clsx(styles.container, className)}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
            ))}
        </div>
        <br />
    </>
);

export function LineNames() {
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
