import React from "react"
import clsx from "clsx";
import styles from "./TrackSizing.module.css";

const containerProps = [
    styles.twoFixedColumnContainer,
    styles.twoFixedRowContainer,
    styles.twoPercentageColumnContainer,
    styles.twoPercentageRowContainer,
    styles.twoEmColumnContainer,
    styles.twoEmRowContainer,
    styles.twoRemColumnContainer,
    styles.twoRemRowContainer,
    styles.twoVwColumnContainer,
    styles.twoVwRowContainer,
    styles.twoVhColumnContainer,
    styles.twoVhRowContainer,
    styles.twoVmaxColumnContainer,
    styles.twoVmaxRowContainer,
    styles.twoVminColumnContainer,
    styles.twoVminRowContainer,
    styles.twoEqualSizeColumnContainer,
    styles.twoEqualSizeRowContainer,
    styles.threeEqualSizeColumnContainer,
    styles.threeEqualSizeRowContainer,
    styles.fourEqualSizeColumnContainer,
    styles.fourEqualSizeRowContainer,
    styles.fixedAutoColumnContainer,
    styles.fixedOneColumnLargerContainer
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

export function TrackSizing() {
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
