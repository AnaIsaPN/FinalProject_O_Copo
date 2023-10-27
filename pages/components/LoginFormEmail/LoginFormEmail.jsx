import styles from "./LoginFormEmail.module.css";

export function LoginFormEmail({inputs, setInputs}) {
  function getEmail(val){
    setInputs(pInput => ({...pInput, email: `${val}`}))
  }
  
    return (
      <div className={styles.loginFormEmailBox}>
        <img src="/assets/icons/icon-email.svg" />
  
        <input
          className={styles.loginFormEmail}
          type="email"
          placeholder="@email"
          value={inputs.email}
          onChange={(val) => getEmail(val.target.value)}
        ></input>
      </div>
    );
  }
  