import { useState, useEffect } from "react";
import styles from "./Product.module.scss";

export const Product = ({ title, description, imageURL, price, sizeOptions, onSizeClick }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={imageURL} alt={title} />
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${price}.00</div>
            <div className={styles.description}>{description}</div>
            <div>{sizeOptions.map((size) => {
                return <div onClick={() => {
                    onSizeClick(size.label)
                }}>{size.label}</div>
            })}</div>
        </div>
    )
}