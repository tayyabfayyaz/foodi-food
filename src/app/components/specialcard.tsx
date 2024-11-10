import styles from "@/app/styles/specialcard.module.css"
import Image from "next/image";
import { FC } from 'react'
import { FaStar } from "react-icons/fa6";
interface catogoryProps {
    imagePath: string;
    alt?: string;
    heading: string;
    text: string,
    price: string,
    rating: string,
    className?: string
}

const SpecialCard: FC<catogoryProps> = ({ imagePath, alt= "Image", heading, text, price, rating, className }) => {
    return(
        <div className={`${className || ""}`}>
            <div className={styles.card_container}>
                <div className={styles.image_con}>
                    <Image 
                        src={imagePath}
                        alt={alt}
                        width={400}
                        height={400}
                        className={styles.img}
                    />
                </div>

                <div className={styles.text_con}>
                    <h2>{heading}</h2>
                    <p className={styles.para}>{text}</p>
                    <p className={styles.price}>{price}</p>
                    <span><FaStar className={styles.card_icon} />{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;