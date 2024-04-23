import styles from "./Home.module.scss";
import { Header } from "../../Components/Header/Header";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.homeWrapper}>
        <section className={styles.homeSection}>
          <div className={styles.homeContent}>
            <div className={styles.bigImg}>
              <div className={styles.imgBlock}>
                <div className={styles.shuriken}>
                  <img src="/images/shuriken.png" alt="Decoration" />
                </div>
                <img
                  src="https://pixio.dexignzone.com/xhtml/images/banner/banner-media3.png"
                  alt="Big Image"
                />
              </div>
            </div>
            <div className={styles.homeTitle}>
              <h1>
                Make Your Fashion Look Mire <span>Charming</span>
              </h1>
              <p>
                Sell globally in minutes with localized currencies, languages,
                and experiences in every market.
              </p>
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
                <img
                  src="https://pixio.dexignzone.com/xhtml/images/about/pic8.jpg"
                  alt="Image"
                />
              </div>
              <div className={styles.swiperContainer}>
                <div className={styles.headingRow}>
                  <h3>Discover Latest Collection</h3>
                  <div className={styles.roundBtn}>
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className={styles.swiperBlock}></div>
                <div className={styles.controlsRow}>
                  <div className={styles.btns}>
                    <ArrowLeft size={32} />
                    <ArrowRight size={32} />
                  </div>
                  <div className={styles.numbers}>
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.secondContent}>
            <div className={styles.headinRow}>
              <h3>Most Popular Products</h3>
              <div className={styles.filter}>
                <div className={styles.filter}>
                  <div className={styles.filterEntity}>
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
            </div>
            <div className={styles.cardsWrapper}>
              <div className={styles.card}>
                <div className={styles.imgBlock}>
                  <img
                    src="https://pixio.dexignzone.com/xhtml/images/shop/product/3.png"
                    alt="Product Image"
                  />
                </div>
                <div className={styles.cardDesc}>
                    <a href="/">Classic Denim Skinny Jeans</a> <span>$80</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
