import { Router } from "express"
import { body } from "express-validator"
import { checkValidations, isEmailUnique, userExists } from "../middlewares/userValidations"
import { createUserController, deleteUserController, getUsersController, updateUserController } from "../controllers/user"

const router = Router()

router.post("/",
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").isLength({min: 1}).withMessage("Password is required"),
  checkValidations,
  isEmailUnique,
  createUserController)

router.get("/", getUsersController)

router.put("/:id",
  userExists,
  body("isActive").isBoolean().withMessage("isActive must be a boolean"),
  checkValidations,
  updateUserController
)

router.delete("/:id", userExists, deleteUserController)

export default router
