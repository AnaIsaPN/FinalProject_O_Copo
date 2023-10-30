import styles from "./AboutInfo.module.css"

export function AboutInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.version}>
        <p>Versão:</p>
        <span>01</span>
      </div>
      <div className={styles.documentation}>
        <a href="#">Termos e Condições</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Regras da Plataforma</a>
        <a href="#">Excluir sua conta</a>
      </div>
      <div className={styles.developers}>
        <p><span>©</span> 2023, Desenvolvido por: <span>Daniel Bárbara</span>, <span>Isa Nogueira</span> & <span>Nathalia Andreassa</span>.</p>
      </div>
    </div>
  );
}