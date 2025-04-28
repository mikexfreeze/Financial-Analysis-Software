import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { json } from "body-parser";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(routes);

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection error: ", error));