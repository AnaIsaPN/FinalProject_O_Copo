import styles from "./AddButton.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation"

export function AddButton() {
  const router = useRouter()

  function goToAddPage() {
    router.push('/app/myrecipes/add')
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.addButton}
        onClick={goToAddPage}>
        <img src="/assets/icons/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}

