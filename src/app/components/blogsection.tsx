import styles from '@/app/styles/blogsection.module.css';
import Button from "@/app/components/button";
import CardCompound from './cardcompound';
import { LuSalad } from "react-icons/lu";
import { TbClock24 } from "react-icons/tb";


function BlogSection(){
    return(
        <div className={styles.blog_container}>
            <div className={styles.left_container}>
                <h3>TESTIMONIALS</h3>
                <h2>What Our Customers</h2>
                <h2> Say About Us</h2>
                <p>
                    “I had the pleasure of dining at Foodi last night, and I am still raving aboutthe experience!
                    The attention to detail in presentation and service was impeccable”
                </p>
                <Button text='Explore' className={styles.btn} />
            </div>
            <div className={styles.right_container}>
                <div className={styles.crad_container}>
                    <CardCompound 
                        iconPath={<LuSalad />}
                        heading='CATERING'
                        text='Delight your guests with our flavors and  presentation'
                        imagePath={''}
                        className={styles.card}
                    />

                    <CardCompound 
                        iconPath={<TbClock24 />}
                        heading='DELLIVERY'
                        text='Delight your guests with our flavors and  presentation'
                        imagePath={''}
                        className={styles.card}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;