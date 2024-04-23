import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header";
import {ArrowUpRight, ArrowLeft, ArrowRight, Heart, Basket} from "@phosphor-icons/react";
import collectionData from "/public/data/collectionData.json";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import productsData from "/public/data/productsData.json";
import {Footer} from "../../Components/Footer/Footer.jsx";


export const Home = () => {
    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.homeSection}>
                    <div className={styles.homeContent}>
                        <div className={styles.collectionThree}>
                            <img src="https://pixio.dexignzone.com/xhtml/images/collection/3.png"
                                 alt="Collection Three"/>
                        </div>
                        <div className={styles.bigImg}>
                            <div className={styles.imgBlock}>
                                <div className={styles.rotateLogo}>
                                    <img src="/images/black-start-tim.png" alt="Logo"/>
                                    <h1>Pixio</h1>
                                </div>


                                <div className={styles.shuriken}>
                                    <img src="/images/shuriken.png" alt="Decoration"/>
                                </div>
                                <img
                                    src="https://pixio.dexignzone.com/xhtml/images/banner/banner-media3.png"
                                    alt="Big Image"
                                />
                            </div>
                        </div>
                        <div className={styles.homeTitle}>
                            <div className={styles.collection}>
                                <img src="https://pixio.dexignzone.com/xhtml/images/collection/1.png" alt="Collection"/>
                            </div>
                            <h1>
                                Make Your Fashion Look Mire <span>Charming</span>
                            </h1>
                            <p>
                                Sell globally in minutes with localized currencies, languages,
                                and experiences in every market.
                            </p>
                            <div className={styles.btnsRow}>
                                <div className={styles.collectionTwo}>
                                    <img src="https://pixio.dexignzone.com/xhtml/images/collection/2.png"
                                         alt="Collection Two"/>
                                </div>
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
                                        <img
                                            src="https://pixio.dexignzone.com/xhtml/images/shop/small/pic1.png"
                                            alt="t-shirt"
                                        />
                                    </div>
                                    <div className={styles.cardDesc}>
                                        <a href="/">Collar Casual Shirt</a>
                                        <p>
                                            $18 <span>$27</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.imgBlock}>
                                        <img
                                            src="https://pixio.dexignzone.com/xhtml/images/shop/small/pic2.png"
                                            alt="t-shirt"
                                        />
                                    </div>
                                    <div className={styles.cardDesc}>
                                        <a href="/">Collar Casual Shirt</a>
                                        <p>
                                            $18 <span>$27</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.firstSection}>
                    <div className={styles.firstContent}>
                        <div className={styles.imgSwiperWrapper}>
                            <div className={styles.imgBlock}>
                                <div className={styles.circle}>
                                </div>
                                <img
                                    src="https://pixio.dexignzone.com/xhtml/images/about/pic8.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className={styles.swiperContainer}>
                                <div className={styles.headingRow}>
                                    <h3>Discover Latest Collection</h3>
                                    <div className={styles.roundBtn}>
                                        <ArrowUpRight/>
                                    </div>
                                </div>
                                <div className={styles.swiperBlock}>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={25}
                                        loop={true}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 3000,
                                        }}
                                    >
                                        {collectionData.map((data) => {
                                            return (
                                                <SwiperSlide key={data.id}>
                                                    <div className={styles.sliderCard}>
                                                        <img src={data.img} alt="Card Image"/>
                                                        <div className={styles.title}>
                                                            {data.title}
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div className={styles.controlsRow}>
                                    <div className={styles.btns}>
                                        <ArrowLeft size={32}/>
                                        <ArrowRight size={32}/>
                                    </div>
                                    <div className={styles.numbers}>
                                        <span>01</span>
                                        <span className={styles.active}>02</span>
                                        <span>03</span>
                                        <span >04</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.secondSection}>
                    <div className={styles.secondContent}>
                        <div className={styles.headingRow}>
                            <h3>Most Popular Products</h3>

                            <div className={styles.filter}>
                                <div className={`${styles.filterEntity} ${styles.active}`}>
                                    <a href="/">ALL</a>
                                </div>
                                <div className={styles.filterEntity}>
                                    <a href="/">Dresses</a>
                                </div>
                                <div className={styles.filterEntity}>
                                    <a href="/">Tops</a>
                                </div>
                                <div className={styles.filterEntity}>
                                    <a href="/">Outerwear</a>
                                </div>
                                <div className={styles.filterEntity}>
                                    <a href="/">Jacket</a>
                                </div>

                            </div>
                        </div>
                        <div className={styles.cardsWrapper}>
                            {productsData.map((data) => {
                                return (
                                    <div key={data.id} className={styles.card}>
                                        <div className={styles.imgBlock}>
                                            <div className={styles.quickView}>
                                                quick view
                                                <div className={styles.effect}></div>
                                            </div>
                                            <span className={styles.getSale}>{data.getOff}</span>
                                            <div className={styles.buttonsColum}>
                                                <div className={styles.button}>
                                                    <div className={styles.effect}></div>
                                                    <Heart/>
                                                </div>
                                                <div className={styles.button}>
                                                    <div className={styles.effect}></div>
                                                    <Basket/>
                                                </div>
                                            </div>
                                            <img
                                                src={data.img}
                                                alt="Product Image"
                                            />
                                        </div>
                                        <div className={styles.cardDesc}>
                                            <a href="/">{data.title}</a>
                                            <span>${data.price?.toFixed(2)}</span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>

                <div className={styles.bannersContainer}>
                    <div className={styles.imgBlock}>
                        <img src="https://pixio.dexignzone.com/xhtml/images/shop/large/product1.png" alt="Two Girls"/>
                        <div className={styles.cloudBlock}>
                            <img src="https://pixio.dexignzone.com/xhtml/images/shap.svg" alt="Cloud Shape"/>
                            <div className={styles.outCloud}>
                                <div className={styles.textBlock}>
                                    <p>SALE UP TO 50% OFF</p>
                                    <h2>SUMMER <br/> <span>2023</span></h2>
                                    <div className={styles.btn}>
                                        <a href="/">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imgBlock}>
                        <img src="https://pixio.dexignzone.com/xhtml/images/shop/large/product2.png" alt="Couple"/>
                        <div className={styles.textBlock}>
                            <p>SALE UP TO 50% OFF</p>
                            <h2>NEW SUMMER <br/>COLLECTION</h2>
                            <div className={styles.btn}>
                                <a href="/">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={styles.thirdSection}>
                    <div className={styles.thirdContent}>

                        <div className={styles.bigImg}>
                            <img src="https://pixio.dexignzone.com/xhtml/images/about/pic3.jpg" alt="Big Image"/>
                        </div>
                        <div className={styles.cardsContainer}>
                            <div className={styles.headingRow}>
                                <h3>Users Who Viewed This Also Checked Out These Similar Profiles</h3>
                                <div className={`${styles.rotateLogo} ${styles.pinkBorder}`}>
                                    <img src="/images/black-start-tim.png" alt="Logo"/>
                                    <ArrowRight/>

                                </div>
                            </div>
                            <div className={styles.cardsRow}>
                                {productsData.slice(0,3).map((data) => {
                                    return (
                                        <div key={data.id} className={styles.card}>
                                            <div className={styles.imgBlock}>
                                                <img
                                                    src={data.img}
                                                    alt="Product"/>
                                            </div>
                                            <div className={styles.cardDesc}>
                                                <div className={styles.name}>
                                                    <span>{data.getOff}</span>
                                                    <a href="/">{data.title}</a>
                                                </div>
                                                <div className={styles.price}>
                                                    <h6>{data.salePrice? "$" + data.salePrice?.toFixed(2) : null}
                                                        <span>${data.price.toFixed(2)}</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>


                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
