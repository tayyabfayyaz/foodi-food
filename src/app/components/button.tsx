import styles from "@/app/styles/button.module.css";
import React, { ReactNode } from "react";

interface proptypes{
    text?: string;
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
}

const Button: React.FC<proptypes> = ({ text, onClick, className, icon }) => {
    return(
        <main>
            <button className={`${styles.btn} ${className}`} onClick={onClick} >
            {icon && <span className={styles.icon}>{icon}</span>}
                {text}
            </button>
        </main>
    );
};

export default Button;