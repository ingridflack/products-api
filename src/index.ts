import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./routes";
import connectDatabase from "./config/dbConfig";

const connection = await connectDatabase();

connection.on("error", (error) => {
  console.error("Error", error);
});

connection.once("open", () => {
  console.log("Connected successfully");
});

const app = express();

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.listen(3000);
