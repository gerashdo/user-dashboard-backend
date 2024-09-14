import { Request, Response } from "express"
import { createUser, deleteUser, getUsers, updateUser } from '../services/user';
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

export const getUsersController = async( req: Request, res: Response ) => {
  try {
      const users = await getUsers()
      res.status( 200 ).json( users )
  } catch (error) {
      handleControllerError( res, error )
  }
}

export const updateUserController = async( req: Request, res: Response ) => {
  const { id } = req.params
  const { isActive } = req.body
  try {
      const user = await updateUser(id, {isActive})
      res.status( 200 ).json( user )
  } catch (error) {
      handleControllerError( res, error )
  }
}

export const deleteUserController = async( req: Request, res: Response ) => {
  const { id } = req.params
  try {
      await deleteUser( id )
      res.status( 204 ).end()
  } catch (error) {
      handleControllerError( res, error )
  }
}
