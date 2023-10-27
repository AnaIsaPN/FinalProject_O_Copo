import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import styles from "./profile.module.css"

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"Perfil"} showBackButton={true} showDarkModeButton={true} />
      </div>
      <div className={styles.userInfo}>
        <UserProfile />
      </div>
      <div className={styles.footer}>
        <NavBar />
      </div>
    </div>
  );
}