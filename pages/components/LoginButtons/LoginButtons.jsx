import Link from "next/link"
import styles from "./LoginButtons.module.css"
import { useRouter } from "next/navigation"

export function LoginButtons({ getLogin }) {
    const router = useRouter()

    function goToRegisterPage() {
        router.push('/app/register')
    }

    function goToHomePage() {
        router.push('/app/home')
    }
    return (
        <div className={styles.buttonsW}>
            <button className={styles.butPassw}>Recuperar password</button>

            <div className={styles.buttonsH}>
                <button className={styles.butEnter} 
                onClick={getLogin}>
                    Entrar
                </button>

                <button className={styles.butReg} 
                onClick={goToRegisterPage}>
                    Registar
                </button>
            </div>

            <button className={styles.butVisit} 
            onClick={goToHomePage}>
                Entrar como visitante
            </button>
            
        </div>

    )
}