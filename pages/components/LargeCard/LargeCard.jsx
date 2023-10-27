import { VALID_LOADERS } from "next/dist/shared/lib/image-config";
import { useRouter } from "next/navigation";
import icon from "../../../public/assets/icons/icon-x.svg"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./LargeCard.module.css"
import Link from "next/link";
import Router from "next/router";

export function LargeCard({ drink, showEditButton, pages }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter()

  const handleClick = () => {
    const localStoreUser = JSON.parse(localStorage.getItem('user'));

    if (pages === "favorites") {
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userId": localStoreUser._id, "recipeId": drink._id })
      };

      fetch('/api/users/favorites/removerecipe/', options)
        .then(response => response.json())
        .then(response => localStorage.setItem('user', JSON.stringify(response.result)))
        .finally(() => Router.reload())
        .catch(err => console.error(err));
    } else {

      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userId": localStoreUser._id, "recipeId": drink._id })
      };
      fetch('/api/userRecipe/remove/deleteRecipe/', options)
        .then(response => response.json())
        .then(response => localStorage.setItem('user', JSON.stringify(response.result)))
        .finally(() => Router.reload())
        .catch(err => console.error(err));
    }
  };

  function handleEdit() {
    const editRecipeObj = JSON.parse(JSON.stringify(drink))
    editRecipeObj.edit = true
    router.push({
      pathname: `/app/myrecipes/add`, query: { obj: JSON.stringify(editRecipeObj) }
    })
  }

  return (

    <div className={styles.container}>
      <Link
        className={styles.card}
        href={`/app/recipes/${drink.name}`}>
        <div className={styles.photo} >
          <img src={drink.img} />
        </div>
        <div className={styles.title}>
          <span >{drink.name}</span>
        </div>
      </Link>

      <div className={styles.closeButton}>
        {/* onClick={handleClick}
      ><img src="/assets/icons/icon-x.svg" /> */}
        <Button onClick={handleOpen}><img src="../assets/icons/icon-x.svg" /></Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box className={styles.popUp}>
            {pages === "favorites" ? <p
              className={styles.messagePopUp}>
              Tens a certeza que queres eliminar a receita <strong>{drink.name}</strong> dos favoritos?
            </p> : <p
              className={styles.messagePopUp}>
              Tens a certeza que queres eliminar a receita <strong>{drink.name}</strong>?
            </p>
            }
            <div className={styles.containerPopUpButtons}>
              <button onClick={handleClick} className={styles.popUpButtons}>Sim</button>
              <button onClick={handleClose} className={styles.popUpButtons}>Não</button>
            </div>
          </Box>
        </Modal>

      </div>

      {showEditButton ? <div
        className={styles.editButton}
        onClick={handleEdit}
      ><img src="/assets/icons/icon-edit.svg" />
      </div>
        :
        ""
      }
    </div>
  )
}