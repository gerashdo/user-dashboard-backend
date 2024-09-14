
export interface User {
  _id: number
  name: string
  email: string
  password: string
  lastLoginTime: string; // ISO 8601 date format
  createdAt: string // ISO 8601 date format
  isActive: boolean
}

export interface UserInput {
  name: string
  email: string
  password: string
}
