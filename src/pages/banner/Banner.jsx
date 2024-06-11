import styles from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.circle1}></div>
        <p>Study whenever you</p>
        <p>want, from any place in</p>
        <p>the world.</p>
        <div className={styles.line1}></div>
        <div className={styles.circle2}></div>
      </div>
      <div className={styles.right}>
      <div className={styles.line}></div>
        <img src="./vd.png" alt="image" />
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
};

export default Banner;
