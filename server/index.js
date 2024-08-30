import cors from "cors";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import routes from "./api/v1/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use("/api/v1", routes);

app.use(express.static(path.join(__dirname, "../app/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../app/dist", "index.html"));
});

const port = Number(process.env.PORT || 3000);

app.listen(port, () => console.log(`🚀 on port http://localhost:${port}`));
