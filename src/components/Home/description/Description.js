import { Fragment } from "react";
import styles from "./Description.module.css";
import description from "../../../assets/Imagedescription.avif";

const Description = () => {
  return (
    <Fragment>
      <div className={styles.centerContainer}>
        <div className={styles.description}>
          <img src={description} alt="Welcome description" />
          <div className={styles.description_content}>
            <div className={styles.title}>Bienvenido a Alpaca Factory</div>
            <p>
            Somos una tienda en línea especializada en la venta de ropa hecha con lana de alpacas, 
            vicuñas y otras fibras naturales de alta calidad. Estamos comprometidos en ofrecer a nuestros 
            clientes prendas de vestir únicas y elegantes confeccionadas a partir de estas exquisitas materias primas.
            </p>
            <a href="/Accesorios" className={styles.shopNow}>
              Comprar Ahora
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.hr}></hr>
    </Fragment>
  );
};

export default Description;
