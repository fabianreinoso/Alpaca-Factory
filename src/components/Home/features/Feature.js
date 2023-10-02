import styles from "./Feature.module.css";
import feature_diverse from "../../../assets/feature_diverse.jpg";
import feature_safety from "../../../assets/feature_safety.jpg";
import feature_interaction from "../../../assets/feature_interaction.jpg";
import { Fragment } from "react";

const Feature = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <div className={styles.featureContainer}>
          <div className={styles.diverse}>
            <div className={styles.overlay}>
              <span className={styles.title}>Amplia variedad de prendas de alta calidad </span>
              <span>
                Diversa selección de prendas para todos segun su preferencia
              </span>
            </div>
            <img
              className={styles.imgs}
              src={feature_diverse}
              alt="A Cat with a cat tree!"
            />
          </div>
          <button>Variedad</button>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.safety}>
            <div className={styles.overlay}>
              <span className={styles.title}>De alta calidad y segura</span>
              <span>Prendas de primera calidad para mayor seguridad y durabilidad.</span>
            </div>
            <img
              className={styles.imgs}
              src={feature_safety}
              alt="A Cat with a cat bed!"
            />
          </div>
          <button>Seguridad</button>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.interaction}>
            <div className={styles.overlay}>
              <span className={styles.title}>Confort</span>
              <span>
              Proporcioanmso bienestar o comodidad.
              </span>
            </div>
            <img
              className={styles.imgs}
              src={feature_interaction}
              alt="A Cat with a cat toy!"
            />
          </div>
          <button>Bienestar</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
