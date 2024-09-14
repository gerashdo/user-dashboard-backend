import { Document } from "mongoose";

export interface User {
  name: string
  email: string
  password: string
  lastLoginTime: string; // ISO 8601 date format
  createdAt: string // ISO 8601 date format
  isActive: boolean
}

export interface UserDocument extends Document, User {
  shorted: Omit<this, 'password'>
}

export interface UserInput {
  name: string
  email: string
  password: string
}
