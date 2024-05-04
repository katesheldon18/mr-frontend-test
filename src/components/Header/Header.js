import styles from "./Header.module.scss";

export const Header = ({ cart }) => {
    return (
        <div className={styles.container}>
            <div className={styles.count}>( {cart.length} )</div>
        </div>
    )
}