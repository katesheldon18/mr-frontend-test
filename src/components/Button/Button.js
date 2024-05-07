import styles from "./Button.module.scss";
import cx from "classnames";

export const Button = (props) => {
    return (
        <button className={cx(styles.button, props.disabled && styles["button--disabled"])}
            onClick={props.onClick}>{props.children}</button>
    )
}