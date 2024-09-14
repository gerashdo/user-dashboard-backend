import { encryptPassword } from "../helpers/encryp"
import { UpdateUserBodyRequest, UserInput } from "../interfaces/user"
import User from "../models/User"


export const createUser = async (body: UserInput) => {
  const {password, ...data} = body
  const encryptedPassword = encryptPassword( password )
  if (!encryptedPassword) {
    throw new Error('Error encrypting password')
  }

  const user = new User({...data, password: encryptedPassword})
  await user.save()
  return user
}

export const getUsers = async () => {
  return (await User.find()).map( user => user.shorted)
}

export const updateUser = async (id: string, body: UpdateUserBodyRequest) => {
  const user = await User.findByIdAndUpdate(id, body)
  if (!user) {
    throw new Error('User not found')
  }
  return user
}

export const deleteUser = async (id: string) => {
  const user = await User.findByIdAndDelete(id)
  if (!user) {
    throw new Error('User not found')
  }
  return user
}
