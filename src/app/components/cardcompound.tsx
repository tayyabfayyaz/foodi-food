import styles from "@/app/styles/catogory.module.css"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, ReactNode } from 'react'

interface catogoryProps {
    imagePath: string | StaticImport;
    iconPath?: ReactNode;
    alt?: string;
    heading: string;
    text: string;
    className?: string
}

const CardCompound: FC<catogoryProps> = ({iconPath, imagePath, alt= "Image", heading, text, className }) => {
    return(
        
        <div className={`${styles.catogory_card} ${className || ""}`}>
            <div className={styles.image_con}>
                {iconPath ? (
                    <div className={styles.icon}>{iconPath}</div>
                ) : (
                    imagePath && (
                        <Image
                            src={imagePath}
                            alt={alt}
                            width={400}
                            height={400}
                            className={styles.img}
                        />
                    )
                )}
            </div>

                <div className={styles.text_con}>
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
        </div>
        
    );
};

export default CardCompound;