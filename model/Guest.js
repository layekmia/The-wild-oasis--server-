import { Schema, model } from "mongoose";

const GuestSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  nationalID: { type: String, required: true, unique: true },
  countryFlag: { type: String, required: true },
  nationality: { type: String },
});

export default model("Guest", GuestSchema);
