import styles from "./NavBar.module.css"
import Link from "next/link";

export function NavBar() {
    return (
        <div className={styles.container}>
            <Link
                href="/app/profile"
                className={styles.button}
            >
                <img src="/assets/icons/icon-user.svg" alt="" />
            </Link>

            <Link href="/"
                className={styles.button}
            >
                <img src="/assets/icons/icon-home.svg" alt="" />
            </Link>

            <Link href="/app/favorites"
                className={styles.button}
            >
                <img src="/assets/icons/icon-heart.svg" alt="" />
            </Link>

            <Link href="/app/myrecipes"
                className={styles.button}
            >
                <img src="/assets/icons/icon-glass.svg" alt="" />
            </Link>
        </div>
    )
}

