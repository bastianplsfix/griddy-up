import React from "react"
import clsx from "clsx";
import styles from "./Minmax.module.css";

const containerProps = [
    styles.fixedMinmaxColumnContainer,
    styles.fixedMinmaxRowContainer,
    styles.fixedPercentageMinmaxColumnContainer,
    styles.fixedFractionMinmaxColumnContainer,
    styles.fixedAutoMinmaxColumnContainer,
    styles.autoFixedMinmaxColumnContainer,
    styles.multipleMinmaxColumnContainer
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

export function Minmax() {
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
