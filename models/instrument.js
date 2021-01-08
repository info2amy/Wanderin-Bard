const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Instrument = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    img2URL: { type: String, required: true },
    img3URL: { type: String, required: true },
    img4URL: { type: String, required: true },
    imageAddresses: { type: Array, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    origin: { type: String, required: true },
    sale: {type: Boolean, required: false}
  },
  { timestamps: true }
)

module.exports = mongoose.model('instruments', Instrument)