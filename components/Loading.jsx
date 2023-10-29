import { IntroLogo } from "./IntroLogo";
import Spinner from "./Spinner";
import styles from "./Loading.module.css";

export default function Loading() {
  return (

    <div className={styles.loadingContainer}>

      {/* <div className={styles.points}>
        <h1 className={styles.introText}> A preparar as suas bebidas</h1>
        <div className={styles.point1}></div>
        <div className={styles.point2}></div>
        <div className={styles.point3}></div>
      </div> */}

      <div className={styles.logoSpinner}>
        <IntroLogo />
        <Spinner />
      </div>

    </div>
  );
}
