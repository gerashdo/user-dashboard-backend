import { Request, Response } from "express"
import { loginUser } from "../services/auth"
import { handleControllerError } from "../helpers/handleControllerError"


export const loginController = async(req: Request, res: Response) => {
  const {email, password} = req.body
  try {
      const user = await loginUser(email, password)
      if (!user) {
        res.status(401).json({
          ok: false,
          errors: { credentials: {msg: 'Bad credentials or blocked user'} }
        })
        return
      }
      res.status(200).json(user)
  } catch (error) {
      handleControllerError(res, error)
  }
}
