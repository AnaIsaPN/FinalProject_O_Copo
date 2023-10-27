import styles from "./HomeTitle.module.css";

export function HomeTitle({ user }) {

  const date = new Date();
  const hour = date.getHours();

  return (
    <div>
      {hour >= 12 ?
        hour >= 16 ?
          <h2
            className={styles.title}
          >
            Boa noite, {user}! </h2> :
          <h2 className={styles.title}>
            Boa tarde, {user}!
          </h2> :
        <h2 className={styles.title}>Bom dia, {user}!
        </h2>
      }
      <p className={styles.info}>Vamos tomar uns copos hoje?</p>
    </div>
  );
}
