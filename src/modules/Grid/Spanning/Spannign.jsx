import React from "react"
import clsx from "clsx";
import styles from "./Spanning.module.css";

const containerProps = [
    styles.itemOneToSecondColumnContainer,
    styles.itemOneToThirdColumnContainer,
    styles.itemOneToFourthColumnContainer,
    styles.itemThreeToFirstColumnContainer,
    styles.itemFourToSecondColumnContainer,
    styles.itemOneToLastColumnUsingNegatives,
    styles.itemTwoToFirstPlaceUsingNegatives,
    styles.itemOneToFourthColumnContainer,
    styles.itemOneToLastRowContainer,
    styles.itemSevenToFirstRowContainer,
    styles.itemThreeToSecondRowContainer,
    styles.itemSixToFirstRowContainer,
    styles.itemMultipleItemsToLastRow,
    styles.itemMultipleItemsToFirstRow,
    styles.itemMultipleItemsToFirstRowReordered,
    styles.itemThreeToEmptyCellContainer,
    styles.itemSevenMovesItemTwoContainer,
    styles.itemSevenOverlapsTwoContainer,
    styles.itemOneAndFourSwapContainer,
    styles.allItemsDefaultPositionContainer,
    styles.positionAlwaysOverwritesOrder
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
