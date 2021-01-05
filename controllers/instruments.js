const Instrument = require('../models/instrument')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getInstruments = async (req, res) => {
    try {
        const instruments = await Instrument.find()
        res.json(instruments)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getInstrument = async (req, res) => {
    try {
        const { id } = req.params
        const instrument = await Instrument.findById(id)
        if (instrument) {
            return res.json(instrument)
        }
        res.status(404).json({ message: 'Instrument not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createInstrument = async (req, res) => {
    try {
        const instrument = await new Instrument(req.body)
        await instrument.save()
        res.status(201).json(instrument)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateInstrument = async (req, res) => {
    const { id } = req.params
    await Instrument.findByIdAndUpdate(id, req.body, { new: true }, (error, instrument) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!instrument) {
            return res.status(404).json({ message: 'Instrument not found!' })
        }
        res.status(200).json(instrument)
    })
}

const deleteInstrument = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Instrument.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Instrument deleted")
        }
        throw new Error("Instrument not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createInstrument,
    getInstruments,
    getInstrument,
    updateInstrument,
    deleteInstrument
}
