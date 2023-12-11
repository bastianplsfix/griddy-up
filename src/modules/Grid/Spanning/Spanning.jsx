import React from "react"
import clsx from "clsx";
import styles from "./Spanning.module.css";

const containerProps = [
    styles.itemOneToSpan3ColumnsContainer,
    styles.itemOneToSpan2RowsContainer,
    styles.itemOneToSpan2RowsAnd3ColumnsContainer,
    styles.lastItemToSpan4ColumnsContainer,
    styles.itemFourToSpan3RowsContainer,
    styles.itemSixToFromFirstColumnToThirdColumn,
    styles.lastItemCol1ToCol3AndRow1ToRow3Container
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

export function Spanning() {
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
