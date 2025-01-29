import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User.js";

const app = express();
app.use(cors());
app.use(express.json());

 

app.get("/users", async (request, response) => {
  const users = await User.find();

  return response.status(200).json(users);
});

app.post("/users", async (request, response) => {
  const user = request.body;

  const newUser = await User.create(user);

  return response.status(201).json(newUser);
});
app.delete("/users/:id", async (request, response) => {
  try {
    const { id } = request.params; // Obtém o ID da URL

    const deletedUser = await User.findByIdAndDelete(id); // Deleta pelo ID

    if (!deletedUser) {
      return response.status(404).json({ message: "User not found" }); // Caso o usuário não exista
    }

    return response.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Internal Server Error" }); // Para erros no servidor
  }
});


mongoose
  .connect(
    "mongodb+srv://erickbernardo500:cluster12@cluster0.t47ro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Banco de dados conectado ✔"))
  .catch(() => console.log("[ERROR] Banco de dados não conectado"));

app.listen(3000);
