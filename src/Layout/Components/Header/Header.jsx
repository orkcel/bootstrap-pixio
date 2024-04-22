import { ShoppingCartSimple } from "@phosphor-icons/react";
import styles from "./Header.module.scss";
import { MagnifyingGlass, Heart, ShoppingCartSimple } from "@phosphor/react";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img
            src="https://pixio.dexignzone.com/xhtml/images/logo.svg"
            alt="logo"
          />
        </div>
        <nav className={styles.nav}>
          <div className={styles.navEntity}>
            <a href="/">Home</a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Shop</a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Blog</a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Portfolio</a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Pages</a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">My Account</a>
          </div>
        </nav>
        <div className={styles.headerOptions}>
          <div className={stylesOptionEntity}>
            <MagnifyingGlass size={32} />
          </div>
          <div className={stylesOptionEntity}>
            <Heart size={32} />
          </div>
          <div className={stylesOptionEntity}>
            <ShoppingCartSimple size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};
