import { Request, Response } from "express"
import { createUser } from "../services/user"
import { UserInput } from "../interfaces/user"

import { handleControllerError } from "../helpers/handleControllerError"

export const createUserController = async( req: Request, res: Response ) => {
  try {
      const user: UserInput = await createUser( req.body )
      res.status( 201 ).json( user )
  } catch (error) {
      handleControllerError( res, error )
  }
}
