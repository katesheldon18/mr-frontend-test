import styles from "./Button.module.scss";

export const Button = (props) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={props.onClick}>ADD TO CART</button>
        </div>
    )
}