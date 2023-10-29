import styles from "./RecipeTypeInputs.module.css"

export function RecipeTypeInputs({ title, handleChangeIngredient, field, value }) {

  return (

    <div className={styles.inputBox}>
      <input
        className={styles.inputStyle}
        type="number"
        placeholder={title}
        value={value.alcoholPercentage}
        onChange={(e) => handleChangeIngredient(e.target.value, field)}
      >
      </input>

      <select
        className={styles.dropSelect}
        value={value.type ?? "Alcoólico"}
        onChange={(e) => handleChangeIngredient(e.target.value, "type")}
      >
        <option value="Alcoólico">Alcoólico</option>
        <option value="Não Alcoólico">Não Alcoólico</option>
      </select>
    </div>
  )
}