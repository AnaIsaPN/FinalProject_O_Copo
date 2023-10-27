import styles from "./FilterButton.module.css"
import { useState } from "react"

export function FilterButton({ selectedOption, setCurrentFilter, setSelectedOption }) {
    const [isOptionsVisible, setOptionsVisible] = useState(false);

    const handleClick = () => {
        if (isOptionsVisible) {
            setOptionsVisible(false);
        } else {
            setOptionsVisible(true);
        }
    };

    const handleOptionClick = (option) => {

        if (selectedOption === option) {
            setSelectedOption("todas");
            setCurrentFilter("todas")
        } else {
            setSelectedOption(option);
            setCurrentFilter(option)
        }
        setOptionsVisible(false)
    };


    return (
        <div className={styles.container}>
            <button className={styles.FilterButton}
                onClick={handleClick}>
                <img src="/assets/icons/icon-filter.svg" alt="" />
            </button>

            {isOptionsVisible && (
                <div className={styles.options}>
                    <button
                        className={`${styles.option} ${selectedOption === "Alcoólico" ? styles.selectedOption : ""}`}
                        onClick={() => handleOptionClick("Alcoólico")}
                    >
                        alcoólico
                    </button>
                    <button
                        className={`${styles.option} ${selectedOption === "Não Alcoólico" ? styles.selectedOption : ""}`}
                        onClick={() => handleOptionClick("Não Alcoólico")}
                    >
                        não alcoólico
                    </button>
                </div>
            )}
        </div>
    )
}