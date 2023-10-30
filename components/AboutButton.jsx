import styles from "./AboutButton.module.css"
import { useRouter } from "next/navigation"

export function AboutButton() {
  const router = useRouter()

  function goToAboutPage() {
    router.push('/app/about')
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.aboutButton}
        onClick={goToAboutPage}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--sub-title-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 16V12M12 8H12.01" stroke="var(--sub-title-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p>Sobre</p>
      </button>
    </div>

  );
}