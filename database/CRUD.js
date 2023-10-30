import { GetCollection } from "./mongoDbConnect";
import { ObjectId } from "mongodb";

//Pegar as receitas da base de dados
export async function GetRecipes() {
  const collection = await GetCollection("Copo", "receitas");
  const result = await collection.find().toArray();
  return result;
}

//Buscar os users da base de dados
export async function GetUsers() {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.find().toArray();
  return result;
}

//Pega pelo user pelo id
export async function GetUserById(userId) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.find({ _id: new ObjectId(userId) }).toArray();
  return result;
}

export async function ChangeUserImgProf(userId, userImg) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { img: userImg } }
  );
  const user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}

//Deletar user pelo id
export async function DeleteUser(userId) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.deleteOne({ _id: new ObjectId(userId) });
  return result;
}

//Registar um user na base de dados
export async function CreateNewUser(newUser) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.insertOne(newUser);
  const user = await collection.findOne({ email: newUser.email });
  return user;
}

//Add receita aos favoritos
export async function AddRecipeToFavList(idUser, recipeID) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.updateOne(
    { _id: new ObjectId(idUser) },
    { $push: { favorites: new ObjectId(recipeID) } }
  );

  const user = await collection.findOne({ _id: new ObjectId(idUser) });
  return user;
}

//Pegar a lista de receitas favoritas
export async function FavoriteList(userId) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.findOne({ _id: new ObjectId(userId) });
  return result.favorites;
}
//Eliminar a lista de favoritos
export async function RemoveOneFav(recipeId, userId) {
  const collection = await GetCollection("Copo", "users");

  await collection.updateOne(
    { _id: new ObjectId(userId) },
    { $pull: { favorites: new ObjectId(recipeId) } }
  );

  const user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}

//Adiciona receita feita pelo o utilizador
export async function AddCreatedRecipe(userId, recipe) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.updateOne(
    { _id: new ObjectId(userId) },
    { $push: { createdRecipes: recipe } }
  );
  const user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}

//Pega a lista de receitas criadas pelo utilizador
export async function GetUserList(userId) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.findOne({ _id: new ObjectId(userId) });
  const user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}

//Apaga a receita que o usuário selecionar
export async function RemoveOneRecipeCreatedList(userId, recipeId) {
  const collection = await GetCollection("Copo", "users");
  const result = await collection.updateOne(
    { _id: new ObjectId(userId) },
    { $pull: { createdRecipes: { _id: new ObjectId(recipeId) } } }
  );

  const user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}
