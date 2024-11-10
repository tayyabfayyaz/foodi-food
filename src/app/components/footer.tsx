import styles from '@/app/styles/footer.module.css';
import Image from "next/image";
import Link from 'next/link';
import { RiInstagramLine, RiFacebookCircleLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";
import Button from './button';


function Footer(){
    return(
        <div className={styles.footer_container}>

            <div className={`${styles.text_containers} ${styles.footer_logo}`}>
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
                    <br />
                    <br />
                    <p className={styles.footer_text}>
                        Savor the artistry where every dish is a culinary masterpiece
                    </p>
                    <Button icon={<RiFacebookCircleLine />} className={styles.footer_icons}/>
                    <Button icon={<RiInstagramLine />} className={styles.footer_icons}/>
                    <Button icon={<RiGithubLine />} className={styles.footer_icons}/>
                    <Button icon={<RiLinkedinBoxLine />} className={styles.footer_icons}/>
            </div>
            <div className={styles.text_containers}>
                    <h3 className={styles.heading}>Useful Links</h3>
                <ul>
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Blogs</Link></li>
                    <li><Link href="/">FAQ</Link></li>
                </ul>
            </div>
            
            <div className={styles.text_containers}>
                    <h3 className={styles.heading}>Main Menu</h3>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Offers</Link></li>
                    <li><Link href="/">Menus</Link></li>
                    <li><Link href="/">Reservation</Link></li>
                </ul>
            </div>
            
            <div className={styles.text_containers}>
                    <h3 className={styles.heading}>Contact Us</h3>
                <ul>
                    <li><Link href="/">fayyaztayyab931@gmail.com</Link></li>
                    <li><Link href="/">+92 3182997727</Link></li>
                    
                </ul>
            </div>

        </div>
    );
};

export default Footer;