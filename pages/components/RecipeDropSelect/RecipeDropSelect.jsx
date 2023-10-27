import React, { useState } from "react";
import styles from "./RecipeDropSelect.module.css";

export function RecipeDropSelect({
  ingredients,
  inputs,
  addIngredientToAll,
  addIngredients,
  removeIngredients,
}) {
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [isDeleteButtonClicked, setDeleteButtonClicked] = useState(false);

  const addIngredient = () => {
    setButtonClicked(true);
    addIngredients({ quant: "", unity: "ml", name: "" });
    setTimeout(() => {
      setButtonClicked(false);
    }, 200);
  };


  const removeIngredient = (index) => {
    if (index === 0) {
      return;
    } else {
      removeIngredients(index);
      setDeleteButtonClicked(true);
    }
    setTimeout(() => {
      setDeleteButtonClicked(false);
    }, 200);
  };

  const handleIngredientChange = (index, field, value) => {
    addIngredientToAll(index, field, value)
  };
  return (

    <div className={styles.inputBox}>
      {ingredients?.map((ingredient, index) => (
        <div className={styles.inputWrapper}
          key={index}>
          <input
            type="number"
            placeholder="Quant"
            className={styles.inputSmall}
            value={inputs.ingredients[index].quant}
            onChange={(e) =>
              handleIngredientChange(index, "quant", e.target.value)
            }
          />

          <select
            className={styles.dropSelect}
            value={inputs.ingredients[index].unit}
            onChange={(e) =>
              handleIngredientChange(index, "unity", e.target.value)
            }
          >
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="un">un.</option>
          </select>

          <input
            type="text"
            placeholder="Ingrediente"
            className={styles.inputBig}
            value={inputs.ingredients[index].name}
            onChange={(e) =>
              handleIngredientChange(index, "name", e.target.value)
            }
          />
          {index > 0 && (
            <button
              className={styles.buttonDelete}
              onClick={() => removeIngredient(index)}
            >
              <img src="/assets/icons/icon-trash.svg" />
            </button>
          )}

          {index == 0 && (
            <button
              className={styles.buttonAdd}
              onClick={addIngredient}
            >
              <img src="/assets/icons/icon-add.svg" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
