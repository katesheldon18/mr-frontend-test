import styles from "./Sizes.module.scss";

export const Size = () => {
    return (
        <div className={styles.container}>
            <span className={styles.size}>SIZE</span><span className={styles.required}>*</span>
            <div className={styles.sizes}>
                <div className={styles.s}>S</div>
                <div className={styles.m}>M</div>
                <div className={styles.l}>L</div>
            </div>
        </div>
    )
}