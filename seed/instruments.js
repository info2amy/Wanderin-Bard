const db = require('../db/connection')
const Instrument = require('../models/instrument')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const instruments = 
      [
        // STRING
        {
          "name": "Sarangi",
          "images": ["https://i.imgur.com/Mf3fmzj.png", "https://i.imgur.com/Fnkx3pz.png", "https://i.imgur.com/h4H7SYD.png", "https://i.imgur.com/QokBn3F.png"],
          "description": "A sarangi is a bowed stringed instrument with a skin-covered resonator. The typical sarangi is made by hand, usually from a single block of wood. The four playing strings on this instrument are made of goat gut, and the seventeen sympathetic strings are made of steel.",
        "price": "600",
        "category": "string",
          "origin":"India"
        },
        {
          "name": "Hurdy Gurdy",
          "images": ["https://i.imgur.com/ztjYeEJ.png","https://i.imgur.com/O5zQvlH.png","https://i.imgur.com/mTXzC1K.png","https://i.imgur.com/K9vKyZe.png"],
          "description": "The hurdy-gurdy is a stringed instrument that produces sound by a hand-crank-turned, rosined wheel rubbing against the strings. The wheel functions much like a violin bow, and single notes played on the instrument sound similar to those of a violin.",
        "price": "1,300",
        "category": "string",
          "origin":"Eastern Europe"
        },
        {
          "name": "Igil",
          "images": ["https://i.imgur.com/loEMImQ.png","https://i.imgur.com/y7U8PwL.png","https://i.imgur.com/5zhrefN.png","https://i.imgur.com/J1RPAnL.png"],
          "description": "An igil is a two-stringed Tuvan musical instrument, played by bowing the strings. The neck and lute-shaped sound box are usually made of a solid piece of pine or larch. The top of the sound box may be covered with skin or a thin wooden plate.",
        "price": "600",
        "category": "string",
          "origin":"Tuva"
        },
        // Wind
        {
          "name": "Native American Drone Flute",
          "images": ["https://i.imgur.com/Pden64G.png","https://i.imgur.com/oIa1v29.png","https://i.imgur.com/tbeRSb6.png","https://i.imgur.com/m3bmDzX.png"],
          "description": "Native American Style Drone Flutes are dual chambered flutes, playing a drone through the left chamber, and melodic playing on the right. We call this a hybrid Native American Indian Style Flute. This style of flute originates from the Mayan and Teotihuacan cultures, where it was commonly crafted from clay and played by villagers and priests. It has been adapted into a wooden flute that combines the traditional Mayan dual chambered clay flute, with the totem and slow air chamber from the modern Native American Style Flute.",
        "price": "250",
        "category": "wind",
          "origin":"North America (Mayan and Teotihuacan)"
        },
        {
          "name": "Sheng",
          "images": ["https://i.imgur.com/Bmxscrs.png","https://i.imgur.com/pLo7M8x.png","https://i.imgur.com/Nhb4B5J.png","https://i.imgur.com/5swbcsp.png"],
          "description": "The sheng is a Chinese mouth-blown free reed instrument consisting of vertical pipes. It is a polyphonic instrument and enjoys an increasing popularity as a solo instrument.",
        "price": "180",
        "category": "wind",
          "origin":"China"
        },
        {
          "name": "Conch shell horm",
          "images": ["https://i.imgur.com/QQOXTvY.png","https://i.imgur.com/nFwH1Oa.png","https://i.imgur.com/pIig2us.png","https://i.imgur.com/Gfoid8E.png"],
          "description": "Conch, or conque, also known as a 'seashell horn' or 'shell trumpet', is a wind instrument that is made from a conch, the shell of several different kinds of sea snails. Their natural conical bore is used to produce a musical tone. Conch shell trumpets have been played in many Pacific Island countries, as well as South America and Southern Asia.",
        "price": "50",
        "category": "wind",
          "origin":"Pacific Island, South America, Southern Asia"
        },
        // Percussion
        {
          "name": "Frog Guiro",
          "images": ["https://i.imgur.com/0pMHlC7.png","https://i.imgur.com/3RBpcaH.png","https://i.imgur.com/DjXGHzY.png","https://i.imgur.com/G4kd5hj.png"],
          "description": "The güiro is a Latin American percussion instrument consisting of an open-ended, hollow gourd with parallel notches cut in one side. It is played by rubbing a stick or tines along the notches to produce a ratchet sound. They come in many shapes and sizes such as rectangular or frog-shaped or crocodile-shaped.",
        "price": "20",
        "category": "percussion",
          "origin":"South America"
        },
        {
          "name": "Vibraslap",
          "images": ["https://i.imgur.com/7Jj2kdf.png","https://i.imgur.com/rZ5bltD.png","https://i.imgur.com/2DWBL0d.png","https://i.imgur.com/eXNOrSk.png"],
          "description": "The vibraslap is a percussion instrument consisting of a piece of stiff wire connecting a wood ball to a hollow box of wood with metal 'teeth' inside. The percussionist holds the metal wire in one hand and strikes the ball.",
        "price": "40",
        "category": "percussion",
          "origin":"United States"
        },
        {
          "name": "African Talking Drum",
          "images": ["https://i.imgur.com/VjicfFD.png","https://i.imgur.com/0sP4d7E.png","https://i.imgur.com/81SZsw3.png","https://i.imgur.com/JtE3qWB.png"],
          "description": "The talking drum is an hourglass-shaped drum from West Africa, whose pitch can be regulated to mimic the tone and prosody of human speech. It has two drumheads connected by leather tension cords, which allow the player to change the pitch of the drum by squeezing the cords between their arm and body.",
        "price": "80",
        "category": "percussion",
          "origin":"West Africa"
        },
        // Electronic
        {
          "name": "Misa Kitara",
          "images": ["https://i.imgur.com/gwGvNEQ.png","https://i.imgur.com/XTkJHCO.png","https://i.imgur.com/s9BDiDF.png","https://i.imgur.com/CzcQIun.png"],
          "description": "The Misa Kitara is a digital MIDI controller and musical instrument developed in 2011 and discontinued in 2013. It allows for a guitar player to produce a synthesized sound using techniques and motions referential to guitar playing.",
        "price": "900",
        "category": "electronic",
          "origin":"Australia"
        },
        {
          "name": "Reactable",
          "images": ["https://i.imgur.com/XUG1Hky.png","https://i.imgur.com/3spyAis.png","https://i.imgur.com/RUMycol.png","https://i.imgur.com/u0TiJaP.png"],
          "description": "The Reactable is an electronic musical instrument with a tabletop tangible user interface that was developed within the Music Technology Group at the Universitat Pompeu Fabra in Barcelona, Spain.",
        "price": "20,000",
        "category": "electronic",
          "origin":"Spain"
        },
        {
          "name": "Otamatone",
          "images": ["https://i.imgur.com/BdvYSj8.png","https://i.imgur.com/87cX78c.png","https://i.imgur.com/gnOMQ6O.png","https://i.imgur.com/fK6SiWq.png"],
          "description": "The Otamatone is an electronic musical synthesizer. It was developed in Japan in 1998 by the CUBE toy company and the Maywa Denki design firm. The Otamatone is a singing toy whose body is shaped like an eighth note (it also somewhat resembles a tadpole, 'otamajakushi' being Japanese for 'tadpole'), with sound emerging from a 'mouth' on the notehead. It requires two hands to play: while one hand holds and squeezes the 'head', the other hand controls the pitch of the tune by placing the finger on a ribbon controller on the stem; a higher position on the stem creates a lower sound.",
        "price": "70",
        "category": "electronic",
          "origin":"Japan"
        },
       
      ]

    await Instrument.insertMany(instruments)
    console.log("Created instruments!")
}
const run = async () => {
    await main()
    db.close()
}

run()