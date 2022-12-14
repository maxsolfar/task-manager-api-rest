import mongoose from "mongoose";
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title:{
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    required: true,
  },
  priority:{
    type: String,
    required: true,
  },
  color:{
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: []
  },
  expiryDate:{
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  projectId:{
    ref: "Project",
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId:{
    ref: "User",
    type: Schema.Types.ObjectId,
    required: true,
  },
},{
  timestamps: true,
  versionKey: false
})

export default model('Task', taskSchema);