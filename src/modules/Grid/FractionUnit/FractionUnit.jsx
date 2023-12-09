import React from "react"
import clsx from "clsx";
import styles from "./FractionUnit.module.css";

const containerProps = [
    styles.twoFractionColumnContainer,
    styles.twoFractionRowContainer,
    styles.oneTwoFractionColumnContainer,
    styles.oneThreeFractionColumnContainer,
    styles.oneFourFractionColumnContainer,
    styles.fixedWidthFractionColumnContainer,
    styles.percentageWidthFractionColumnContainer,
    styles.fixedWidthOneTwoFractionColumnContainer,
    styles.fixedWidthAnyFractionColumnContainer
];

const getPropName = (className) => {
    return Object.keys(styles).find(key => styles[key] === className);
};

// eslint-disable-next-line react/prop-types
const Container = ({ className }) => (
    <>
        <h2>{getPropName(className)}</h2>
        <div className={clsx(styles.container, className)}>
            {['1', '2', '3', '4'].map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
            ))}
        </div>
        <br />
    </>
);

export function FractionUnit() {
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
