const { Schema, model, models } = require("mongoose");

const GuestSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    nationalID: { type: String, default: null },
    countryFlag: { type: String, default: null },
    nationality: { type: String, default: null },
  },
  { timestamps: true }
);

let Guest;

try {
  Guest = mongoose.model("Guest");
} catch {
  Guest = mongoose.model("Guest", GuestSchema);
}

module.exports = Guest;
