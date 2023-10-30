import styles from "./FilterButton.module.css";
import { useState, useEffect, useRef } from "react";

export function FilterButton({ selectedOption, setCurrentFilter, setSelectedOption }) {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const optionsRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleDocumentMouseDown = (event) => {
            if (optionsRef.current && (optionsRef.current.contains(event.target) || buttonRef.current.contains(event.target))) {
                return;
            }
    
            if (isOptionsVisible) {
                setOptionsVisible(false);
            }
        };
    
        document.addEventListener('mousedown', handleDocumentMouseDown);
    
        return () => {
            document.removeEventListener('mousedown', handleDocumentMouseDown);
        };
    }, [isOptionsVisible]);

    const handleClick = () => {
        setOptionsVisible(prev => !prev);
    };

    const handleOptionClick = (option) => {
        if (selectedOption === option) {
            setSelectedOption("todas");
            setCurrentFilter("todas");
        } else {
            setSelectedOption(option);
            setCurrentFilter(option);
        }
        setOptionsVisible(false);
    };

    return (
        <div className={styles.container}>
            <button ref={buttonRef} className={styles.FilterButton}
                onClick={handleClick}>
                <img src="/assets/icons/icon-filter.svg" alt="" />
            </button>

            {isOptionsVisible && (
                <div ref={optionsRef} className={styles.options}>
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
    );
}