import express, { Express } from "express"
import cors from "cors"

import { ApiPaths } from "./interfaces/utils"

export class Server {
  private app: Express;
  private port: number;
  private paths: ApiPaths;

  constructor() {
    this.port = parseInt(process.env.PORT || "3000");
    this.app = express();
    this.paths = {
      root: "/",
    }
    this.middlwares();
    this.routes();
  }

  middlwares() {
    this.app.use(cors())
    this.app.use(express.json());
  }

  routes() {
    this.app.get(this.paths.root, (req, res) => {
      res.send("Express + TypeScript Server")
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[server]: Server is running at http://localhost:${this.port}`)
    })
  }
}
