import styles from "./Cart.module.scss";

export const Cart = ({ cart }) => {
    console.log({ cart });
    return (
        <div className={styles.container}>{cart.map((product) => {
            return <div>
                <div>{product.title}</div>
                <div>{product.size}</div>
            </div>
        })}</div>
    )
}