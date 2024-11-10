import styles from '@/app/styles/specialcard.module.css';
import SpecialCard from '@/app/components/specialcard'

function SpecialFoodSection() {
    return(
        <main>
            <div className={styles.heading_container}>
                <p className={styles.sub_title}>SPECIAL DISHES</p>
                <h2 className={styles.title}>Standout Dishes</h2>
                <h2 className={styles.title2}>From Our Menu</h2>
            </div>
            <div className={styles.cards}>
                <SpecialCard imagePath='/Fattoush-salad.png' heading="Fattoush Salad" text="Discription of items" price='24.00' rating='4.9' />
                <SpecialCard imagePath='/Vegetable-salad.png' heading="Vegetable Salad" text="Discription of items" price='21.00' rating='4.2' />
                <SpecialCard imagePath='/Egg-salad.png' heading="Egg Vegi Salad" text="Discription of items" price='23.00' rating='3.9' />
            </div>
        </main>
    );
};

export default SpecialFoodSection;