import styles from "./Footer.module.scss";
import {ArrowRight} from "@phosphor-icons/react";
import productsData from "/public/data/productsData.json";


export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src="https://pixio.dexignzone.com/xhtml/images/logo.svg" alt="Logo"/>
                    </div>
                    <p>Address : 451 Wall Street, UK, London</p>
                    <p>E-mail : example@info.com</p>
                    <p>Phone : (064) 332-1233</p>
                    <h2>subscribe to our newsletter</h2>
                    <div className={styles.enterEmail}>
                        <p>Your Email Address</p>
                        <ArrowRight />
                    </div>

                </div>
                <div className={styles.middle}>
                    <h2>Recent Posts</h2>
                    {productsData.slice(4,7).map((data) => {
                        return (
                            <div key={data.id} className={styles.cardContainer}>
                                <img src={data.img} alt="Image"/>
                                <div className={styles.title}>
                                    <h2>{data.title}</h2>
                                    <p>July 23, 2023</p>
                                </div>
                            </div>

                        )
                    })}

                </div>
                <div className={styles.right}>
                    <div className={styles.column}>
                        <h2>Our Stores</h2>
                        <p>London SF</p>
                        <p>Edinburgh</p>
                        <p>Los Angeles</p>
                        <p>Chicago</p>
                        <p>Las Vegas</p>
                    </div>
                    <div className={styles.column}>
                        <h2>Useful Links</h2>
                        <p>Privacy Policy</p>
                        <p>Returns</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                        <p>Our Sitemap</p>
                    </div>
                    <div className={styles.column}>
                        <h2>Footer Menu</h2>
                        <p>Instagram Profile</p>
                        <p>New Collections</p>
                        <p>Woman Dress</p>
                        <p>Contact Us</p>
                        <p>Latest News</p>
                    </div>
                </div>

            </div>
                <div className={styles.copyrightContent}>
                    <div className={styles.text}>
                        © 2024 <p>DexignZone</p> Theme. All Rights Reserved.
                    </div>
                    <div className={styles.partners}>
                        <p>We Accept:</p>
                        <img src="https://pixio.dexignzone.com/xhtml/images/footer-img.png" alt="Partners"/>
                    </div>
                </div>
        </footer>
    )
}