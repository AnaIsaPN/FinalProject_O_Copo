import styles from "./LoginFormUser.module.css";

export function LoginFormUser({setInputs, inputs, errAnime}) {

  function getUser(val){
    setInputs(pInp => ({...pInp, user: `${val}`}))
  }

  return (
    <div className={styles.loginFormUserBox}>
      <img src="/assets/icons/icon-userLogin.svg" />

      <input
        className={errAnime && inputs.user === "" ? styles.inputError : styles.loginFormUser}
        type="text"
        placeholder="nome"
        value={inputs.user}
        onChange={(val) => getUser(val.target.value)}
      ></input>
    </div>
  );
}


