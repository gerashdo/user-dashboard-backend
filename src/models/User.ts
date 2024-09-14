import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/user";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLoginTime: {
    type: String,
    default: null
  },
}, {
  timestamps: true,
  versionKey: false,
})

export default mongoose.model<User>("User", UserSchema)
