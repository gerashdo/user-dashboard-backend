import { Router } from "express"
import { body } from "express-validator"
import { checkValidations, isEmailUnique } from "../middlewares/userValidations"
import { createUserController, getUsersController } from "../controllers/user"

const router = Router()

router.post("/",
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").isLength({min: 1}).withMessage("Password is required"),
  checkValidations,
  isEmailUnique,
  createUserController)

router.get("/", getUsersController)

export default router
