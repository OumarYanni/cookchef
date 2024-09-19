import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <span className="material-symbols-outlined mr-15">menu</span>

      <div className="flex-fill">
        <img src={cookchef} alt="logo cookchef" />
      </div>

      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <span className="material-symbols-outlined mr-5">
            shopping_basket
          </span>

          <span>panier</span>
        </button>

        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;
