import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import OperatorRouter from "./routes/operator.route";
const cors = require("cors");
import ClientRouter from "./routes/client.route";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {
  app.use(express.json());
  app.use(cors());
  app.use("/operador", OperatorRouter);
  app.use("/cliente", ClientRouter);

  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
