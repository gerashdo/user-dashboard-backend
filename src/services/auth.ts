import User from "../models/User"
import { updateUser } from "./user"


export const loginUser = async (email: string, password: string) => {
  let user = await User.findOne({email})
  if (!user) {
    throw new Error('User not found')
  }
  if (!user.comparePassword(password) || !user.isActive) {
    return false
  }
  user = await updateUser(user.id, {lastLoginTime: new Date().toISOString(), isActive: user.isActive})
  return user.shorted
}
