import styles from "./introLogo.module.css";

export function IntroLogo() {
  return (
    <div className={styles.introStyle}>
      <div>
        <img
          className={styles.logoPolygon}
          src={"/assets/images/Intro-Polygon.svg"}
        />

        <img
          className={styles.logoCopo}
          src={"/assets/images/Intro-Vector.svg"}
        />
      </div>
    </div>
  );
}
