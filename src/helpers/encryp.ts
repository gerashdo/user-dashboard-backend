import bcrypt from 'bcrypt'

export const encryptPassword = (password: string): string  => {
  if (!password) return ''
  const salt = bcrypt.genSaltSync()
  return bcrypt.hashSync(password, salt)
}
