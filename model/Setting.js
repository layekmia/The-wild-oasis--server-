import { Schema, model } from "mongoose";

const settingsSchema = new Schema(
  {
    maxBookingLength: { type: Number, required: true },
    minBookingLength: { type: Number, required: true },
    maxGuestsPerBooking: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Settings", settingsSchema);
