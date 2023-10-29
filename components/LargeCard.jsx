import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from "./LargeCard.module.css"
import Link from "next/link";
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router";

export function LargeCard({ drink, showEditButton, onRemoveRecipe }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = useNavigation()
  const router = useRouter()

  const handleRemoveRecipe = (drink) => {
    onRemoveRecipe(drink)
    toggleModal()
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleEdit = () => {
    const editRecipeObj = JSON.parse(JSON.stringify(drink))
    editRecipeObj.edit = true
    navigation.push({
      pathname: `/app/myrecipes/add`, query: { obj: JSON.stringify(editRecipeObj) }
    })
  }

  return (
    <div className={styles.container}>
      <Link
        className={styles.card}
        href={`/app/recipes/${drink.name}`}>
        <div className={styles.photo} >
          {drink.img === "" ?
            <svg width="60" height="120" viewBox="0 0 132 130" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <g filter="url(#filter0_d_303_340)">
                <path d="M73.261 71.2304C72.4851 72.0624 71.1725 72.0805 70.3739 71.2704L22.6601 22.8633C21.4235 21.6087 22.2954 19.4839 24.0568 19.4595L118.127 18.158C119.888 18.1337 120.819 20.2336 119.617 21.5219L73.261 71.2304Z" fill="#E21A1A" />
              </g>
              <path d="M54.1186 68.9999L3.26857 18.1499C2.6503 17.5224 2.23414 16.7241 2.07373 15.8579C1.91332 14.9916 2.01601 14.0972 2.36857 13.2899C2.68503 12.4536 3.25322 11.7361 3.99475 11.2363C4.73628 10.7366 5.61461 10.4793 6.50857 10.4999H101.729C102.623 10.4793 103.501 10.7366 104.242 11.2363C104.984 11.7361 105.552 12.4536 105.869 13.2899C106.221 14.0972 106.324 14.9916 106.163 15.8579C106.003 16.7241 105.587 17.5224 104.969 18.1499L54.1186 68.9999ZM54.1186 68.9999V127.5M27.1186 127.5H81.1186" 
              stroke="var(--text-color)"
              stroke-width="4" 
              stroke-linecap="round" 
              stroke-linejoin="round" />
              <defs>
                <filter id="filter0_d_303_340" x="18.0807" y="18.1578" width="106.078" height="61.7086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_303_340" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_303_340" result="shape" />
                </filter>
              </defs>
            </svg>
            : <img
              alt="drink image"
              src={drink?.img}
            />}
        </div>
        <div className={styles.title}>
          <span >{drink.name}</span>
        </div>
      </Link>

      <div className={styles.closeButton}>
        <Button onClick={() => toggleModal()}><img src="/assets/icons/icon-x.svg" /></Button>
        <Modal
          keepMounted
          open={isOpen}
          onClose={() => toggleModal()}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box className={styles.popUp}>
            {router.pathname.includes("favorites") ? <p
              className={styles.messagePopUp}>
              Tens a certeza que queres eliminar a receita <strong>{drink.name}</strong> dos favoritos?
            </p> : <p
              className={styles.messagePopUp}>
              Tens a certeza que queres eliminar a receita <strong>{drink.name}</strong>?
            </p>
            }
            <div className={styles.containerPopUpButtons}>
              <button onClick={() => handleRemoveRecipe(drink)} className={styles.popUpButtons}>Sim</button>
              <button onClick={() => toggleModal()} className={styles.popUpButtons}>Não</button>
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