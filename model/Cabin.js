import { Schema, model } from "mongoose";

const cabinSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    maxCapacity: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Cabin = model("Cabin", cabinSchema);
export default Cabin;
