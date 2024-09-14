import { Document } from "mongoose";

export interface User {
  name: string
  email: string
  password: string
  lastLoginTime: string; // ISO 8601 date format
  createdAt: string // ISO 8601 date format
  isActive: boolean
}

export interface UpdateUserBodyRequest {
  isActive: boolean
  lastLoginTime?: string
}

export interface UserDocument extends Document, User {
  shorted: Omit<this, 'password'>
  comparePassword(password: string): Promise<boolean>
}

export interface UserInput {
  name: string
  email: string
  password: string
}
