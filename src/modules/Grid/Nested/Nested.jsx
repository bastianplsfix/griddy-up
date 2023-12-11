import React from "react"
import styles from "./Nested.module.css";

export function Nested() {
    const endOfPageRef = React.useRef(null);

    React.useEffect(() => {
        endOfPageRef.current?.scrollIntoView();
        }, []);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.item}>1</div>
            <div className={styles.item}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>
                <div className={styles.container}>
                    <div className={styles.item}>1</div>
                    <div className={styles.item}>2</div>
                    <div className={styles.item}>3</div>
                    <div className={styles.item}>3</div>
                </div>
            </div>
        </div>
        <div ref={endOfPageRef} />
        </>
    );
}
