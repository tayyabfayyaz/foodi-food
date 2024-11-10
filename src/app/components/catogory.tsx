import CardCompound from "@/app/components/cardcompound";
import styles from '@/app/styles/catogory.module.css';

function CatogorySection() {
    return(
        <main>
            <p className={styles.sub_title}>CUSTOMER FAVORITES</p>
            <h2 className={styles.title}>Popular Catagories</h2>
            <div className={styles.catogory_container}>
                <CardCompound imagePath="/bergur.png" heading="Main Dish" text="( 86 Dishes )" />
                <CardCompound imagePath="/breakfast.png" heading="Break Fast" text="( 12 Dishes )" />
                <CardCompound imagePath="/dessert.png" heading="Dessert" text="( 48 Dishes )" />
                <CardCompound imagePath="/browse.png" heading="Browse All" text="( 255 Dishes )" />
            </div>
        </main>
    );
};

export default CatogorySection;