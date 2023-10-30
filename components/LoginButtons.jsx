import styles from "./LoginButtons.module.css"
import { useRouter } from "next/navigation"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export function LoginButtons({ getLogin }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const router = useRouter()

    function goToRegisterPage() {
        router.push('/app/register')
    }

    function goToHomePage() {
        router.push('/app/home')
    }
    return (
        <div className={styles.buttonsW}>
            
    <button onClick={handleOpen} className={styles.butPassw}>Recuperar a password</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.popUp}>
          <p className={styles.messagePopUp}>
            Insere o teu email para recuperares a password:
          </p>
          <div className={styles.containerPopUpButtons}>
              <input type="email" placeholder="@email" className={styles.inputEmail}/>
              <button className={styles.popUpButtons}>Enviar</button>
          </div>
        </Box>
      </Modal>
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