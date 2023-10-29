import styles from "./IntroLogo.module.css";

export function IntroLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoPolygon}
          src={"/assets/images/Intro-Polygon.svg"}
        />
        <svg
          className={styles.logoCopo}
          width="109"
          height="122"
          viewBox="0 0 109 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M54.1186 61L3.26857 10.15C2.6503 9.52244 2.23414 8.72412 2.07373 7.85791C1.91332 6.99169 2.01601 6.09729 2.36857 5.28997C2.68503 4.45364 3.25322 3.73612 3.99475 3.23639C4.73628 2.73667 5.61461 2.47936 6.50857 2.49997H101.729C102.623 2.47936 103.501 2.73667 104.242 3.23639C104.984 3.73612 105.552 4.45364 105.869 5.28997C106.221 6.09729 106.324 6.99169 106.163 7.85791C106.003 8.72412 105.587 9.52244 104.969 10.15L54.1186 61ZM54.1186 61V119.5M27.1186 119.5H81.1186"
            stroke="var(--text-color)"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  );
}
