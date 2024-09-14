import { NextFunction, Request, Response,  } from "express"
import User from "../models/User"
import { validationResult } from "express-validator"

export const isEmailUnique = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body
  const user = await User.findOne({email})
  if (user) {
    return res.status(400).json({
      ok: false,
      errors: {email: {msg: 'Email already exists'}},
    })
  }
  next()
}

export const checkValidations = ( req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if( !errors.isEmpty() ){
      return res.status(400).json({
          ok: false,
          errors: errors.mapped()
      })
  }

  next();
}
