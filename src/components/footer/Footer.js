/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.centerContainer}>
      <footer className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.title}>About</div>
            <div className={styles.aboutContent}>
            Somos una tienda en línea especializada en la venta de ropa hecha con lana de alpacas, 
            vicuñas y otras fibras naturales de alta calidad. Estamos comprometidos en ofrecer a nuestros 
            clientes prendas de vestir únicas y elegantes confeccionadas a partir de estas exquisitas materias primas.
            </div>
          </div>

          <div className={styles.service}>
            <div className={styles.title}>Redes sociales</div>
            <ul className={styles.content}>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Linkedind</a></li>
            </ul>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>Informacion de la compañia</div>
            <ul className={styles.content}>
              <li>About Us</li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>Customer Reviews</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.copyRight}>
            © 2023 Mia • Alpaca Factory
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
