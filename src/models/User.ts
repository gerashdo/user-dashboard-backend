import mongoose, { Schema } from "mongoose";
import { User, UserDocument } from "../interfaces/user";

const UserSchema = new Schema<UserDocument>({
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

UserSchema.virtual('shorted').get( function(){
  const { password, ...rest } = this.toJSON()
  return rest
})

export default mongoose.model<UserDocument>("User", UserSchema)
