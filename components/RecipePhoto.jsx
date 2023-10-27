import styles from "./RecipePhoto.module.css";
import ImageList from './ImageList';
import { useState, useEffect } from "react"

export function RecipePhoto({ setInput, input }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSelectorVisible, setSelectorVisible] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleImageSelect = (imageUrl) => {
    console.log(imageUrl)
    setInput(prev => ({ ...prev, img: imageUrl.src }))
    setSelectedImage(imageUrl)
    hideSelector()
  };


  const showSelector = () => {
    setSelectorVisible(true);
    setHasContent(true)
  };

  const hideSelector = () => {
    setSelectorVisible(false);
    setHasContent(false)
  };

  return (
    <div className={styles.userRecipeBox}>
      {isSelectorVisible && (
        <div className={styles.unsplashContainer}>
          <div className={hasContent ? `${styles.imageList} ${styles.withContent}` : styles.imageList}>
            <button
              onClick={hideSelector}
              className={styles.closeButton}
              style={{ float: 'right' }}>
              <img src="/assets/icons/icon-x.svg" />
            </button>
            <ImageList onSelect={handleImageSelect} />
          </div>
        </div>
      )}

      <div
        className={styles.recipePic}
        onClick={showSelector}>
        {input.img ? <img className={styles.photo} src={input.img} />
          :
          <img src="/assets/icons/icon-plus-blue.svg" />
        }
      </div>
    </div>
  );
}

