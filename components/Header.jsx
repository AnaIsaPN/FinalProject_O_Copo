import styles from "./Header.module.css"
import { useRouter } from 'next/router'
import { useTheme } from '@/utils/ThemeContext';

export function Header({ title, showBackButton, showDarkModeButton }) {
    const router = useRouter()
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles.container}>
            {showBackButton && 
            <button 
            className={styles.backButton}
            onClick={() => router.back()}
            >
                <img src="/assets/icons/icon-back.svg" alt="" />
            </button>}
            <h1 className={styles.title}>{title}</h1>
            {showDarkModeButton && 
            <button 
            className={styles.darkModeButton}
            onClick={toggleTheme}
            >
                <img src={theme === "light" ? "/assets/icons/icon-moon.svg" : "/assets/icons/icon-sun.svg"} alt="" />
            </button>}
        </div>
    )
}