import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/routes.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//Routes
app.use("/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
