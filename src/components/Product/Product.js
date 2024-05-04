import { useState, useEffect } from "react";
import styles from "./Product.module.scss";

export const Product = () => {
    const [productData, setProductData] = useState([]);
    const getProductData = async () => {
        const response = await fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product");
        const data = await response.json();
        setProductData(data);
    };
    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={productData.imageURL} alt={productData.title} />
            <div className={styles.title}>{productData.title}</div>
            <div className={styles.price}>${productData.price}.00</div>
            <div className={styles.description}>{productData.description}</div>
        </div>
    )
}