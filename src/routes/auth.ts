import { Router } from "express"
import { body } from "express-validator"
import { loginController } from "../controllers/auth"
import { checkValidations, emailExists } from "../middlewares/userValidations"

const router = Router()

router.post("/",
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").exists().withMessage("Password is required"),
  checkValidations,
  emailExists,
  loginController)

export default router
