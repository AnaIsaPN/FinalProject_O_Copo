import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { LoginFormEmail } from "../../components/LoginFormEmail";
import { LoginFormPassword } from "../../components/LoginFormPassword";
import { LoginFormUser } from "../../components/LoginFormUser";
import { Logo } from "../../components/Logo";
import { RegisterButton } from "../../components/RegisterButton";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"
import { useTheme } from '@/utils/ThemeContext';
import styles from "./register.module.css";
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {

  const notifyUnauthorized = () => toast.error('Este email já se encontra registado')
  const notifySucess = () => toast.success('Registo criado com sucesso!')
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [inputs, setInputs] = useState({ user: "", email: "", password: "" });
  const [errAnime, setErrAnime] = useState(false)

  async function onSubmit() {
    if (inputs.user === "") {
      setErrAnime(true)
      return toast.error('Campo de nome inválido')
    }
    if (inputs.email === "" || !inputs.email.includes('@')) {
      setErrAnime(true)
      return toast.error('Campo de email inválido')
    }
    if (inputs.password === "") {
      setErrAnime(true)
      return toast.error('Campo password inválido')
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.3.0' },
      body: JSON.stringify({ "name": `${inputs.user}`, "email": `${inputs.email}`, "password": `${inputs.password}` })
    };
    const res = await fetch(`/api/signin`, options)
    if (res.status === 200) {
      const body = await res.json()
      localStorage.setItem('user', JSON.stringify(body.result))
      notifySucess()
      setTimeout(() =>
        router.push('home')
        , 3000)
    } else if (res.status === 401) {
      notifyUnauthorized()
    }
  }

  return (
    <div className={styles.container}>
      <Header title={"Registo"} showBackButton={true} />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.loginInput}>
        <LoginFormUser setInputs={setInputs} inputs={inputs} errAnime={errAnime} />
        <LoginFormEmail setInputs={setInputs} inputs={inputs} errAnime={errAnime} />
        <LoginFormPassword setInputs={setInputs} inputs={inputs} errAnime={errAnime} />
      </div>
      <div className={styles.button}>
        <RegisterButton onSubmit={onSubmit} />
      </div>
      <div className={styles.info}>
        <p>Terá um custo de 12,98€ anual.</p>
      </div>
      <ToastContainer
        toastClassName={styles.tostifyNotification}
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}
