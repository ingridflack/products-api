import express, { Request, Response } from "express";
import product from "./productRoutes";

const routes = (app) => {
  app
    .route("/")
    .get((_: Request, res: Response) => res.status(200).send("Hello World!"));
  app.use(express.json(), product);
};

export default routes;
