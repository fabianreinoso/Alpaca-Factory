import styles from "./ItemsNavBar.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { Link } from "react-router-dom";

const ItemsNavBar = () => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  return (
    <Fragment>
      <div onClick={closeHandler} className={styles.overlay}></div>
      <nav className={styles.container}>
        <div onClick={closeHandler} className={styles.close}>
          x
        </div>

        <div className={styles.titleContainer}>
          <Link to="/" className={styles.title} onClick={closeHandler}>
            Home
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/Men" className={styles.title} onClick={closeHandler}>
            Accesorios para Hombres
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/Women" className={styles.title} onClick={closeHandler}>
            Accesorios para Mujeres
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/Accesorios" className={styles.title} onClick={closeHandler}>
            Accesorios varios
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <Link to="/Unisex" className={styles.title} onClick={closeHandler}>
            Unisex
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default ItemsNavBar;
