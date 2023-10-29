import { Header } from "../../../components/Header";
import { RecipePhoto } from "../../../components/RecipePhoto";
import { RecipeDropSelect } from "../../../components/RecipeDropSelect";
import { RecipeInput } from "../../../components/RecipeInput";
import { RecipeAddButton } from "../../../components/RecipeAddButton";
import { useRouter } from "next/router";
import { NavBar } from "../../../components/NavBar";
import { useState } from "react";
import { RecipeTypeInputs } from "@/components/RecipeTypeInputs";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from "../../../utils/ThemeContext"
import styles from "./add.module.css";

export default function RecipeRegister() {
  const { theme } = useTheme()
  const notifyEdit = () => toast.success('Receita editada com sucesso!')
  const notifyCreate = () => toast.success('Receita criada com sucesso!')
  const notifyError = () => toast.error('Preencha todos os campos obrigatórios para criar a receita.')

  const router = useRouter();
  const editRecipe = router.query.obj && JSON.parse(router.query.obj)

  const [hasError, setHasError] = useState(false);

  const [inputs, setInputs] = useState({
    img: editRecipe ? editRecipe.img : "",
    name: editRecipe ? editRecipe.name : "",
    ingredients: editRecipe ? editRecipe.ingredients : [{ quant: "", unity: "ml", name: "" }],
    type: editRecipe ? editRecipe.type : "Alcoólico",
    alcoholPercentage: editRecipe ? editRecipe.alcoholPercentage : "",
    instructions: editRecipe ? editRecipe.instructions : "",
    description: editRecipe ? editRecipe.description : "",
    hasError: hasError
  });

  async function onSubmit() {
    const userId = JSON.parse(localStorage.getItem("user"));

    if (hasErrorInRecipe()) {
      notifyError()
      setHasError(true)
      handleChangeIngredient(true, "hasError")
      return
    }

    if (editRecipe) {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: `${userId._id}`,
          recipe: {
            _id: `${editRecipe._id}`,
            img: `${inputs.img}`,
            name: `${inputs.name}`,
            ingredients: mapIngredients(inputs.ingredients),
            instructions: `${inputs.instructions}`,
            type: `${inputs.type}`,
            alcoholPercentage: `${inputs.alcoholPercentage === "" ? "Não informado" : inputs.alcoholPercentage}`,
            description: `${inputs.description}`,
          },
        }),
      };

      fetch('/api/userRecipe/modify/recipe', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      notifyEdit()
      setTimeout(() => {
        router.push('/app/myrecipes')
      }, 1500)
    } else {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: `${userId._id}`,
          recipe: {
            img: `${inputs.img}`,
            name: `${inputs.name}`,
            ingredients: mapIngredients(inputs.ingredients),
            instructions: `${inputs.instructions}`,
            type: `${inputs.type}`,
            alcoholPercentage: `${inputs.alcoholPercentage === "" ? "Não informado" : inputs.alcoholPercentage}`,
            description: `${inputs.description}`,
          },
        }),
      };

      fetch("/api/userRecipe/add/recipe", options)
        .then((response) => response.json())
        .then(() => notifyCreate())
        .catch((err) => console.error(err));
      setTimeout(() => {
        router.push('/app/myrecipes')
      }, 1500)
    }
  }

  const hasErrorInRecipe = () => {
    return !inputs.name || !inputs.ingredients || !inputs.instructions || inputs.ingredients.find(ingredient => ingredient.name === "")
  }

  const changeIngredient = (index, field, value) => {
    setIngredients({ ...getIngre, [field]: value });

    setInputs((prevInput) => ({
      ...prevInput,
      ingredients: prevInput.ingredients.slice(0, index).concat([getIngre]),
    }));

  };

  const handleChangeIngredient = (value, field, index) => {
    setInputs({ ...inputs, [field]: value });
  };

  function addIngredientToAll(idx, field, value) {
    console.log(inputs.ingredients);
    setInputs((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((e, i) =>
        i === idx ? { ...e, [field]: value } : e
      ),
    }));
  }

  const handleAddIngredient = (ingredient) => {
    console.log("ingredient", ingredient);
    console.log("inputs.ingredients", inputs.ingredients);
    setInputs((prev) => ({
      ...prev,
      ingredients: [...inputs.ingredients, ingredient],
    }));
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...inputs.ingredients];
    updatedIngredients.splice(index, 1);
    setInputs({
      ...inputs,
      ingredients: updatedIngredients,
    });
  };

  const mapIngredients = (ingredients) => {
    return ingredients.map((ingredient) => {
      return {
        name: ingredient.name,
        quant: ingredient.quant == "" ? null : ingredient.quant,
        unity: ingredient.quant == "" ? null : ingredient.unity,
      }
    })
  }

  return (
    <div className={styles.container}>
      <Header
        title={editRecipe ? 'Editar receita' : 'Registar Receita'}
        showBackButton={true}
        editRecipe={editRecipe} />

      <div className={styles.recipeForm}>
        <RecipePhoto setInput={setInputs} editRecipe={editRecipe} input={inputs} />
      </div>

      <RecipeInput
        title="Nome da Receita"
        grows={false}
        inputValue={inputs}
        field={"name"}
        handleChangeIngredient={handleChangeIngredient}
      />

      <div >
        <RecipeTypeInputs
          value={inputs}
          title={"Teor Alcólico"}
          handleChangeIngredient={handleChangeIngredient}
          field={"alcoholPercentage"}
          inputs={inputs}
        />
      </div>

      <RecipeDropSelect
        ingredients={inputs.ingredients}
        changeIngredient={changeIngredient}
        setInputs={setInputs}
        inputs={inputs}
        addIngredientToAll={addIngredientToAll}
        addIngredients={(ingredient) => {
          handleAddIngredient(ingredient);
        }}
        removeIngredients={(index) => {
          handleRemoveIngredient(index);
        }}
      />

      <RecipeInput
        title="Instruções"
        grows={true}
        inputValue={inputs}
        field={"instructions"}
        handleChangeIngredient={handleChangeIngredient}
      />

      <RecipeInput
        title="Descrição"
        grows={true}
        inputValue={inputs}
        field={"description"}
        handleChangeIngredient={handleChangeIngredient}
      />

      <div className={styles.buttons}>
        <RecipeAddButton onSubmit={onSubmit} />
      </div>

      <div className={styles.footer}>
        <NavBar />
      </div>
      <ToastContainer
        toastClassName={styles.tostifyNotification}
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}
