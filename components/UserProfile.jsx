import styles from "./UserProfile.module.css";
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import UnsplashSelector from './UnsplashSelector';
import Router from "next/router";
import { AboutButton } from "./AboutButton";

export function UserProfile() {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSelectorVisible, setSelectorVisible] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    setUser(localStorageUser)

    if (localStorageUser && localStorageUser.img) {
      setSelectedImage(localStorageUser.img);
    }
  }, [])

  const handleImageSelect = async (img) => {
    const imageUrl = img.urls.small;
    setSelectedImage(imageUrl);
    hideSelector();

    if (user) {
      const updatedUser = {
        ...user,
        img: imageUrl
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      try {
        const response = await updateUserImageInDatabase(user._id, imageUrl);

        if (!response.ok) {
          throw new Error("Não foi possível atualizar a imagem no banco de dados.");
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (err) {
        console.error(err);
      }

    }
  };

  const updateUserImageInDatabase = async (userId, userImg) => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: userId,
        img: userImg
      })
    };

    return fetch('/api/userData/modify', options);
  }

  const showSelector = () => {
    setSelectorVisible(true);
  };

  const hideSelector = () => {
    setSelectorVisible(false);
    setHasContent(false)
  };

  const logout = () => {
    localStorage.removeItem('user')
    router.push('/app/login')
  }

  return (
    <div className={styles.userProfileBox}>

      {user ?
        <div className={styles.profileContainer}>
          {isSelectorVisible && (
            <div className={styles.unsplashContainer}>
              <div className={hasContent ? `${styles.imageList} ${styles.withContent}` : styles.imageList}>
                <button
                  onClick={hideSelector}
                  className={styles.closeButton}
                  style={{ float: 'right' }}><img src="/assets/icons/icon-x.svg" /></button>
                <UnsplashSelector onSelect={handleImageSelect} setHasContent={setHasContent} />
              </div>
            </div>
          )}

          <div
            className={styles.profilePicContainer}
            onClick={showSelector}
          >
            <div className={styles.profilePic}>
              {selectedImage ? <img src={user ? user.img : selectedImage} style={{ width: '14rem', height: '14rem' }} />
                :
                <img src="/assets/icons/icon-plus.svg" />
              }
            </div>
          </div>

          <div className={styles.userData}>
            <h2>Dados:</h2>
            <span>
              <b>Nome: </b>
              {user?.name}
            </span>
            <span>
              <b>Email: </b>
              {user?.email}
            </span>
          </div>
          <div className={styles.userBut}>
            <button className={styles.userSubBut}>Gerir subscrição</button>
            <button
              className={styles.userLogoutBut}
              onClick={() => logout()}>
              Logout</button>
          </div>
        </div>
        :
        <div className={styles.visit}>
          <img src="/assets/icons/icon-user-block.svg" />
          <h2>Está a navegar como visitante. Subscreva-se ou faça login para ter acesso às suas informações.</h2>
          <button
            className={styles.visitLoginButton}
            onClick={() => router.push('/app/login')}
          >
            Login
          </button>
        </div>

      }
      <div className={styles.about}>
        <AboutButton />
      </div>
    </div>
  );
}
