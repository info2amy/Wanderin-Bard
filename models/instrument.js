const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Instrument = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    origin: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('instruments', Instrument)