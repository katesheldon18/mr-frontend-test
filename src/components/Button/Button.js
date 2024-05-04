import styles from "./Button.module.scss";

export const Button = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>ADD TO CART</button>
        </div>
    )
}