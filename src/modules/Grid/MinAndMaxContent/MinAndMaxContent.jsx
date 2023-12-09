import React from "react"
import clsx from "clsx";
import styles from "./MinAndMaxContent.module.css";

const containerProps = [
    styles.minContentContainer,
    styles.minContentMinContentContainer,
    styles.maxContentContainer,
    styles.maxContentMaxContentContainer,
    styles.minmaxContentContainer,
];

const getPropName = (className) => {
    return Object.keys(styles).find(key => styles[key] === className);
};

// eslint-disable-next-line react/prop-types
const Container = ({ className }) => (
    <>
        <h2>{getPropName(className)}</h2>
        <div className={clsx(styles.container, className)}>
            {["CSS Grids is a powerful layout system that allows developers to create responsive and flexible web designs by dividing the page into rows and columns.", ""].map((item, index) => (
                <div key={index} className={styles.item}>
                    {item}
                </div>
            ))}
        </div>
        <br />
    </>
);

export function MinAndMaxContent() {
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
