import styles from "./LoginFormPassword.module.css";

export function LoginFormPassword({setInputs, inputs}) {
    function getPassword(val){
      setInputs(pInp => ({...pInp, password: `${val}`}))
    }
    
    return (
      <div className={styles.loginFormPassbox}>
        <img src="/assets/icons/icon-password.svg" />
  
        <input
          className={styles.loginFormPass}
          type="password"
          placeholder="password"
          value={inputs.password}
          onChange={(val) => getPassword(val.target.value)}
        ></input>
      </div>
    );
  }
  