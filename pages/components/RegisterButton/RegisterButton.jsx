import styles from "./RegisterButton.module.css";

export function RegisterButton({ onSubmit }) {
  return (
    <div className={styles.registerButtons}>
      <button className={styles.registerSub} onClick={onSubmit}>
        Subscrever
      </button>
    </div>
  );
}
