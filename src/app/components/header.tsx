import Image from "next/image";
import "@/app/styles/header.module.css"
import styles from "@/app/styles/header.module.css";
import Button from "./button";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";




function Header(){
    return(
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image
                        src="/logo/F.png" 
                        alt="logo" 
                        width={200} 
                        height={200} 
                        className={styles.logo_img}    
                    />
                </div>
                    <Image 
                        src="/logo/oodi.png" 
                        alt="logo" 
                        width={200} 
                        height={200}
                        className={styles.logo_text} 
                    />

                <ul className={styles.menu}>
                    <li className={styles.menu_btn1}><Link href="@/app">Home</Link></li>
                    <li className={styles.menu_btn}><Link href="@/app/menu">Menu <FaAngleDown className={styles.btn_icon} /> </Link></li>
                    <li className={styles.menu_btn}>Services <FaAngleDown className={styles.btn_icon} /> </li>
                    <li className={styles.menu_btn}>Offers</li>
                </ul>

                <IoMdSearch className={styles.search_icon} />

                <AiOutlineShopping className={styles.bag_icon} />

                <Button icon={<FiPhoneCall />} text="Contact" className={styles.header_btn} />
            </nav>
        </header>
    );
}

export default Header;