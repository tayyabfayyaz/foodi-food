import styles from '@/app/styles/chefsection.module.css'
import Image from 'next/image';

function ChefSection(){
    return(
        <div className={styles.chef_container}>
            <div className={styles.image_con}>
                <div className={styles.img_bg}></div>
                <Image 
                    src="/chef1.png"
                    alt="Chef Image"
                    width={200}
                    height={200}
                    className={styles.img}
                />
            </div>
            <div className={styles.text_con}>
                <h3>TESTIMONIALS</h3>
                <h2>What Our Customers</h2>
                <h2> Say About Us</h2>
                <p>
                    “I had the pleasure of dining at Foodi last night, and I am still raving aboutthe experience!
                    The attention to detail in presentation and service was impeccable”
                </p>
            </div>
        </div>
    );
};

export default ChefSection;