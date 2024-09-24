import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <span className="material-symbols-outlined mr-15">menu</span>

      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>

      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <span className="material-symbols-outlined mr-5">favorite</span>

          <span>Wishlist</span>
        </button>

        <button className="btn btn-primary">connexion</button>
      </ul>

      <span
        onClick={() => setShowMenu(true)}
        className={`material-symbols-outlined ${styles.headerXs}`}
      >
        menu
      </span>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>

          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
