import styles from "./Header.module.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = ({ cart }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}><ShoppingCartIcon style={{ color: '#888888', fontSize: '24px' }} /></div>
            <div className={styles["my-cart"]}>My Cart</div>
            <div className={styles.count}>( {cart.length} )</div>
        </div>
    )
}