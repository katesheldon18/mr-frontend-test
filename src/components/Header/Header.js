import { useState } from "react";
import styles from "./Header.module.scss";
import { Cart } from "../Cart/Cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = ({ cart }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <div onClick={() => setOpen(!open)} className={styles.cart}>
                <div className={styles.icon}><ShoppingCartIcon style={{ color: '#888888', fontSize: '24px' }} /></div>
                <div className={styles["my-cart"]}>My Cart</div>
                <div className={styles.count}>( {cart.length} )</div>
            </div>
            {open ? <Cart cart={cart} /> : null}
        </div>
    )
}