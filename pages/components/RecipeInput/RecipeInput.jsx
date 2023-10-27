import styles from "./RecipeInput.module.css";
import React, { useRef, useState } from "react";
import useAutoSizeTextArea from "./useAutosizeTextArea";

export function RecipeInput({ title, handleChangeIngredient, field, grows, inputValue }) {

  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);


  useAutoSizeTextArea(textAreaRef.current, value);

  // Esse codigo esta causando duplo clique no input

  const handleMouseDown = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    handleChangeIngredient(e.target.value, field)
    let val = e.target?.value;
    if (!grows) {
      if (val[val.length - 1] === "\n") {
        val = val.slice(0, val.length - 1)
      }
    }
    if (!grows && val.length > 25) {
      val = val.slice(0, 25)
    }

    setValue(val);
  };


  return (
    <textarea
      id="myTextArea"
      className={styles.inputStyle}
      type="text"
      placeholder={title}
      onChange={(e) => handleChange(e)}
      onMouseDown={handleMouseDown}
      ref={textAreaRef}
      rows={1}
      value={inputValue}//estava "value" do state, caso dê erro futuramente
      required
    ></textarea>
  );
}
