import styles from "./Cart.module.scss";

export const Cart = ({ cart }) => {
    const grouped = Object.groupBy(cart, (item) => item.size);
    const unique = Object.entries(grouped);
    return (
        <div className={styles.container}>{unique.map(([size, items]) => {
            const product = items[0];
            return <div className={styles.item}>
                <div>
                    <img src={product.imageURL} alt={product.title} className={styles.img} />
                </div>
                <div>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>{items.length}x ${product.price}.00</div>
                    <div className={styles.size}>Size: {product.size}</div>
                </div>
            </div>
        })}</div>
    )
}