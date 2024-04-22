import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header";

export const Home = () => {
    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.homeSection}>

                    <div className={styles.homeContent}>
                        <div className={styles.bigImg}>
                            <div className={styles.imgBlock}>
                                <div className={styles.shuriken}>
                                    <img src="/images/shuriken.png" alt="Decoration"/>
                                </div>
                                <img src="https://pixio.dexignzone.com/xhtml/images/banner/banner-media3.png"
                                     alt="Big Image"/>
                            </div>
                        </div>
                        <div className={styles.homeTitle}>
                            <h1>Make Your Fashion Look Mire <span>Charming</span></h1>
                            <p>Sell globally in minutes with localized currencies, languages, and experiences in every
                                market.</p>
                            <div className={styles.btnsRow}>
                                <div className={styles.btn}>
                                    <a href="/">ADD TO CARD</a>
                                </div>
                                <div className={styles.btn}>
                                    <a href="/">VIEW DETAILS</a>
                                </div>
                            </div>
                            <div className={styles.cardsRow}>
                                <div className={styles.card}>
                                    <div className={styles.imgBlock}>
                                        <img src="https://pixio.dexignzone.com/xhtml/images/shop/small/pic1.png"
                                             alt="t-shirt"/>
                                    </div>
                                    <div className={styles.cardDesc}>
                                        <a href="/">Collar Casual Shirt</a>
                                        <p>$18 <span>$27</span></p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.imgBlock}>
                                        <img src="https://pixio.dexignzone.com/xhtml/images/shop/small/pic2.png"
                                             alt="t-shirt"/>
                                    </div>
                                    <div className={styles.cardDesc}>
                                        <a href="/">Collar Casual Shirt</a>
                                        <p>$18 <span>$27</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}