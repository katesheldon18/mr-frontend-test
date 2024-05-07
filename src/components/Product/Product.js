import { useState } from "react";
import styles from "./Product.module.scss";
import { Button } from "../Button/Button";
import cx from "classnames";

export const Product = ({
    imageURL,
    title,
    price,
    description,
    size,
    sizeOptions,
    onSizeClick,
    onAddCartClick,
}) => {
    const [error, setError] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles["column-1"]}>
                <img className={styles.image} src={imageURL} alt={title} />
            </div>
            <div className={styles["column-2"]}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>${price}.00</div>
                <div className={styles.description}>{description}</div>
                <div className={styles["size-heading"]}>
                    SIZE<span className={styles.required}>*</span>
                    <div className={styles.letter}>{size}</div>
                    <span className={styles.error}>{error ? "Please select a size:" : ""}</span>
                </div>
                <div className={styles["size-container"]}>
                    {sizeOptions.map((sizeOption) => {
                        const isSelected = size === sizeOption.label;
                        return (
                            <div
                                className={cx(
                                    styles.sizes,
                                    isSelected && styles["sizes--selected"]
                                )}
                                onClick={() => {
                                    setError(false);
                                    onSizeClick(sizeOption.label);
                                }}
                            >
                                {sizeOption.label}
                            </div>
                        );
                    })}
                </div>
                <Button
                    disabled={!size}
                    onClick={() => {
                        if (!size) return setError(true);
                        setError(false);
                        onAddCartClick();
                    }}
                >
                    ADD TO CART
                </Button>
            </div>
        </div>
    );
};
