'use client';

import styles from "@/app/styles/herosection.module.css";
import Button from "@/app/components/button";
import { FaPlay } from "react-icons/fa";
import { FaRegStar, FaStar, FaDollarSign } from "react-icons/fa6";
import Image from "next/image";


const HeroSection: React.FC = () => {
    const handleClick = () => {
        alert('Button Clicked');
    };

    return (
        <main className="flex">
            <div className={styles.text_container}>
                <h1 className={styles.text_style}>Dive Into Delights</h1>
                <span className={styles.text_style}>Of Delectable</span>
                <span className={styles.text_style_color}> Food</span>

                <p className={styles.paragraph}>
                    Where Each Plate Weaves a Story of Culinary
                </p>
                <p className={styles.paragraph2}>
                    Mastery and Passionate Craftsmanship
                </p>

                <div className={styles.button_con}>
                    <Button text="Order Now" onClick={handleClick} className={styles.btn1} />
                    <Button text="Watch Video" onClick={handleClick} className={styles.btn2} />
                    <Button icon={<FaPlay/>} onClick={handleClick} className={styles.icon_btn} />
                </div>
            </div>
            <div className={styles.img_container}>
                <Image 
                    src="/msg.png"
                    alt="Image"
                    width={200}
                    height={200}
                    className={styles.text_img}
                />
                <div className={styles.bg_circle}>
                    <Image 
                        src="/img1.png"
                        alt="Main Image"
                        width={400}
                        height={400}
                        className={styles.img_style}
                    />
                </div>
                <div className={styles.small_card}>
                    <Image 
                        src="/noodle.png"
                        alt="Noodles"
                        width={200}
                        height={200}
                        className={styles.small_card_img}
                    />
                    <p className={styles.small_card_text}>Spicy Noodles</p>
                    <div className={styles.star_con}>
                        <FaStar className={styles.star_color} />
                        <FaStar className={styles.star_color} />
                        <FaStar className={styles.star_color} />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <p className={styles.small_card_text}><FaDollarSign />18.00</p>
                </div>

                <div className={styles.small_card2}>
                    <Image 
                        src="/salad.png"
                        alt="Noodles"
                        width={200}
                        height={200}
                        className={styles.small_card_img}
                    />
                    <p className={styles.small_card_text}>Vegetarian Salad</p>
                    <div className={styles.star_con}>
                        <FaStar className={styles.star_color} />
                        <FaStar className={styles.star_color} />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <p className={styles.small_card_text}><FaDollarSign />11.00</p>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
