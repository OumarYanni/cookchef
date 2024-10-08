import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({ title, image }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>

        <span
          className={`material-symbols-outlined ${liked ? "text-primary" : ""}`}
        >
          favorite
        </span>
      </div>
    </div>
  );
}

export default Recipe;
