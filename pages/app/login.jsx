import styles from "./login.module.css"
import { Logo } from "../components/Logo/Logo"
import { LoginFormEmail } from "../components/LoginFormEmail/LoginFormEmail"
import { LoginFormPassword } from "../components/LoginFormPassword/LoginFormPassword"
import { LoginButtons } from "../components/LoginButtons/LoginButtons"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from "react-toastify"
import { useTheme } from '@/utils/ThemeContext';
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [inputs, setInputs] = useState({ email: '', password: '' })

  const router = useRouter()
  const notify = () => toast.error('Dados inválidos');
  const { theme, toggleTheme } = useTheme();

  //Quando clicado no botao de entrar faz o fetch a base de dados  
  async function getLogin() {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": `${inputs.email}`, "password": `${inputs.password}` })
    };

    const res = await fetch(`/api/login`, options)
    if (res.status === 200) {//se o resultado for ok executa o codigo abaixo
      const body = await res.json()
      localStorage.setItem('user', JSON.stringify(body.result))//guarda o valor do user no backend no localstorage
      router.push('/')//redireciona para a pag home 
    } else if (res.status === 401) {//se o acesso for negado por dados invalidos envia uma notificacao
      notify()
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.loginInput}>
        <LoginFormEmail setInputs={setInputs} inputs={inputs} />
        <LoginFormPassword setInputs={setInputs} inputs={inputs} />
      </div>
      <LoginButtons getLogin={getLogin} />
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