import { IntroLogo } from "../components/IntroLogo/IntroLogo";
import Spinner from "../components/Spinner/Spinner";
import styles from "./intro.module.css";

export function Intro() {
  return (
    <div className={styles.present}>
      <div className={styles.points}>
        <h1 className={styles.introText}> A preparar as suas bebidas</h1>
        <div className={styles.point1}></div>
        <div className={styles.point2}></div>
        <div className={styles.point3}></div>
      </div>
      
      <div className={styles.logo}>
        <div className={styles.logo1}> 
        <IntroLogo  />
        </div>
        <div className={styles.logo2}>  
        <Spinner />
        </div>
      </div>
      
    </div>
  );
}
