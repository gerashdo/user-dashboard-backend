import express, { Express } from "express"
import cors from "cors"
import dbConnection from "./db/config"
import userRouter from "./routes/user"
import authRouter from "./routes/auth"
import { ApiPaths } from "./interfaces/utils"


export class Server {
  private app: Express
  private port: number
  private paths: ApiPaths
  private basePath: string

  constructor() {
    this.basePath = "/api/v1"
    this.port = parseInt(process.env.PORT || "3000")
    this.app = express()
    this.paths = {
      users: "/users",
      auth: "/auth",
    }
    this.connectDB()
    this.middlwares()
    this.routes()
  }

  connectDB() {
    if (process.env.NODE_ENV !== 'test') {
      dbConnection()
    }
  }

  middlwares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(`${this.basePath}${this.paths.users}`, userRouter)
    this.app.use(`${this.basePath}${this.paths.auth}`, authRouter)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`[server]: Server is running at port ${this.port}`)
    })
  }
}
