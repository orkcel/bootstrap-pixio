import styles from "./Header.module.scss";
import {Heart, MagnifyingGlass, PaperclipHorizontal, ShoppingCartSimple, StarFour} from "@phosphor-icons/react";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            src="https://pixio.dexignzone.com/xhtml/images/logo.svg"
            alt="logo"
          />
        </div>
        <nav className={styles.nav}>
          <div className={styles.navEntity}>
            <a href="/">Home <StarFour weight="fill" /></a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Shop <StarFour weight="fill" /></a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Blog <StarFour weight="fill" /></a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Portfolio <StarFour weight="fill" /></a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">Pages <StarFour weight="fill" /></a>
          </div>
          <div className={styles.navEntity}>
            <a href="/">My Account</a>
          </div>
        </nav>

        <div className={styles.headerOptions}>
          <div className={styles.optionEntity}>
            <a href="/">Login/Register</a>
          </div>
          <div className={styles.optionEntity}>
            <MagnifyingGlass size={32}/>
          </div>
          <div className={styles.optionEntity}>
            <Heart size={32}/>
          </div>
          <div className={styles.optionEntity}>
            <ShoppingCartSimple size={32}/>
          </div>
          <div className={styles.optionEntity}>
            <PaperclipHorizontal size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};
