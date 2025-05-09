import "reflect-metadata";
import { AppDataSource } from "./data-source"; // 确保正确导入你的 DataSource
import express from "express";
import { json } from "body-parser";
import routes from "./routes/route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });