import styles from "./BackGroundDescription.module.css";

const BackGroundDescription = () => {
  return (
    <div className={styles.description}>
      <p>
        <span className={styles.webTitle}>Alpaca Factory</span>
        <span className={styles.webSlogan}>
        "Las alpacas, con su suave lana y mirada tierna, son el tesoro de los Andes."
        </span>
      </p>
    </div>
  );
};

export default BackGroundDescription;
