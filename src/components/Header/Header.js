import styles from "./Header.module.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = ({ cart }) => {
    return (
        <div className={styles.container}>
            <ShoppingCartIcon style={{ color: '#888888', fontSize: '24px' }} />
            <div className={styles.count}>( {cart.length} )</div>
        </div>
    )
}