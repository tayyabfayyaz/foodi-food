import SpecialCard from "../components/specialcard";

function MenuPage(){
    return(
        <main>
            <div className="menu_heading">
                <h2>WELLCOME TO OUR</h2>
                <h2>DELLISIOUS FOOD MENU</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Qui recusandae quidem molestiae doloribus assumenda.
                    Ex cumque repudiandae ab illum aspernatur?
                    Qui recusandae quidem molestiae doloribus assumenda.
                    Ex cumque repudiandae ab illum aspernatur?
                </p>
            </div>
            <div className="menu_cards-containers">
                <SpecialCard imagePath='/bergur.png' heading='Charming Burger' text='Discription of items' price='20.00' rating='3.9' className="menu_cards1"/>
                <SpecialCard imagePath='/breakfast.png' heading='Breckfast Deal' text='Discription of items' price='14.00' rating='4.2' className="menu_cards2"/>
                <SpecialCard imagePath='/Fattoush-salad.png' heading='Fattoush Salad' text='Discription of items' price='21.00' rating='4.0' className="menu_cards3"/>
            </div>
        </main>
    );
};

export default MenuPage;