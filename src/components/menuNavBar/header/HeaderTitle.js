import React from "react";
import styles from "./styles/HeaderTitle.module.css";
import { NavLink } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div className={styles.center}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/Men"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Hombres
      </NavLink>

      <NavLink
        to="/Women"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Mujeres
      </NavLink>
      <NavLink
        to="/Accesorios"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Accesorios
      </NavLink>

      <NavLink
        to="/Unisex"
        className={({ isActive }) => (isActive ? styles.active : styles.title)}
      >
        Unisex
      </NavLink>
    </div>
  );
};

export default HeaderTitle;
