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
          "images": ["https://i.imgur.com/xFscsy3.jpg","https://i.imgur.com/uKTdcSY.jpg","https://i.imgur.com/qhRo94Q.jpg","https://i.imgur.com/eqvaOjb.png"],
          "description": "The hurdy-gurdy is a stringed instrument that produces sound by a hand-crank-turned, rosined wheel rubbing against the strings. The wheel functions much like a violin bow, and single notes played on the instrument sound similar to those of a violin.",
        "price": "1,300",
        "category": "string",
          "origin":"Eastern Europe"
        },
        {
          "name": "Igil",
          "images": ["https://i.imgur.com/vFeVgv4.jpg","https://i.imgur.com/jaSyFnb.jpg","https://i.imgur.com/GEvitSP.jpg","https://i.imgur.com/PKTPZum.jpg"],
          "description": "An igil is a two-stringed Tuvan musical instrument, played by bowing the strings. The neck and lute-shaped sound box are usually made of a solid piece of pine or larch. The top of the sound box may be covered with skin or a thin wooden plate.",
        "price": "600",
        "category": "string",
          "origin":"Tuva"
        },
        // Wind
        {
          "name": "Native American Drone Flute",
          "images": ["https://i.imgur.com/YrGIkGi.jpg","https://i.imgur.com/fBCQ1hM.jpg","https://i.imgur.com/7567kkP.jpg","https://i.imgur.com/Gw8ybTS.png"],
          "description": "Native American Style Drone Flutes are dual chambered flutes, playing a drone through the left chamber, and melodic playing on the right. We call this a hybrid Native American Indian Style Flute. This style of flute originates from the Mayan and Teotihuacan cultures, where it was commonly crafted from clay and played by villagers and priests. It has been adapted into a wooden flute that combines the traditional Mayan dual chambered clay flute, with the totem and slow air chamber from the modern Native American Style Flute.",
        "price": "250",
        "category": "wind",
          "origin":"North America (Mayan and Teotihuacan)"
        },
        {
          "name": "Sheng",
          "images": ["https://images-na.ssl-images-amazon.com/images/I/51qNDv6TtOL._AC_SL1041_.jpg","https://images-na.ssl-images-amazon.com/images/I/51eDVhSaIxL._AC_.jpg","https://i.imgur.com/dvOGrMg.jpg","https://images-na.ssl-images-amazon.com/images/I/51S5QgmC8bL._AC_.jpg"],
          "description": "The sheng is a Chinese mouth-blown free reed instrument consisting of vertical pipes. It is a polyphonic instrument and enjoys an increasing popularity as a solo instrument.",
        "price": "180",
        "category": "wind",
          "origin":"China"
        },
        {
          "name": "Conch shell horm",
          "images": ["https://images-na.ssl-images-amazon.com/images/I/61ZNhM1H5uL._AC_SL1080_.jpg","https://images-na.ssl-images-amazon.com/images/I/618g2MzCHSL._AC_SL1080_.jpg","https://images-na.ssl-images-amazon.com/images/I/614T7EUGrkL._AC_SL1080_.jpg","https://images-na.ssl-images-amazon.com/images/I/61r2vZ6Su8L._AC_SL1080_.jpg"],
          "description": "Conch, or conque, also known as a 'seashell horn' or 'shell trumpet', is a wind instrument that is made from a conch, the shell of several different kinds of sea snails. Their natural conical bore is used to produce a musical tone. Conch shell trumpets have been played in many Pacific Island countries, as well as South America and Southern Asia.",
        "price": "50",
        "category": "wind",
          "origin":"Pacific Island, South America, Southern Asia"
        },
        // Percussion
        {
          "name": "Frog Guiro",
          "images": ["https://images-na.ssl-images-amazon.com/images/I/81luwP1fxAL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81C91hWk9qL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81rjhMmOAkL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/81rjRvjEUYL._AC_SL1500_.jpg"],
          "description": "The güiro is a Latin American percussion instrument consisting of an open-ended, hollow gourd with parallel notches cut in one side. It is played by rubbing a stick or tines along the notches to produce a ratchet sound. They come in many shapes and sizes such as rectangular or frog-shaped or crocodile-shaped.",
        "price": "20",
        "category": "percussion",
          "origin":"South America"
        },
        {
          "name": "Vibraslap",
          "images": ["https://images-na.ssl-images-amazon.com/images/I/71eIaIri1RL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71LmapVqkQL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71g0eyuLBoL._AC_SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/61YZSB9wO4L._AC_SL1500_.jpg"],
          "description": "The vibraslap is a percussion instrument consisting of a piece of stiff wire connecting a wood ball to a hollow box of wood with metal 'teeth' inside. The percussionist holds the metal wire in one hand and strikes the ball.",
        "price": "40",
        "category": "percussion",
          "origin":"United States"
        },
        {
          "name": "African Talking Drum",
          "images": ["https://images-na.ssl-images-amazon.com/images/I/61BFeEORehL._AC_SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/61b%2B3-%2BfRUL._AC_SL1200_.jpg","https://images-na.ssl-images-amazon.com/images/I/610itMabIVL._AC_SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/61tsUBDUNBL._AC_SL1000_.jpg"],
          "description": "The talking drum is an hourglass-shaped drum from West Africa, whose pitch can be regulated to mimic the tone and prosody of human speech. It has two drumheads connected by leather tension cords, which allow the player to change the pitch of the drum by squeezing the cords between their arm and body.",
        "price": "80",
        "category": "percussion",
          "origin":"West Africa"
        },
        // Electronic
        {
          "name": "Misa Kitara",
          "images": ["https://www.vintageguitar.com/wp-content/uploads/MISA-KITARA1.jpg","https://i.imgur.com/ZIOZYiP.jpg","https://i.imgur.com/sU21ssa.jpg","https://i.imgur.com/pruKmxN.jpg"],
          "description": "The Misa Kitara is a digital MIDI controller and musical instrument developed in 2011 and discontinued in 2013. It allows for a guitar player to produce a synthesized sound using techniques and motions referential to guitar playing.",
        "price": "900",
        "category": "electronic",
          "origin":"Australia"
        },
        {
          "name": "Reactable",
          "images": ["https://reactable.com/wp-content/uploads/2014/12/reactable-museum-exhibitons-2.png","https://reactable.com/wp-content/uploads/2014/12/reactable-live-s6-21.png","https://cdm.link/app/uploads/2012/11/reactable_live_s4_02.jpg","https://assets.newatlas.com/dims4/default/f3ebea1/2147483647/strip/true/crop/1548x1080+0+0/resize/1376x960!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Freactable-live-s6-table-synth-1.jpg"],
          "description": "The Reactable is an electronic musical instrument with a tabletop tangible user interface that was developed within the Music Technology Group at the Universitat Pompeu Fabra in Barcelona, Spain.",
        "price": "20,000",
        "category": "electronic",
          "origin":"Spain"
        },
        {
          "name": "Otamatone",
          "images": ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0aBj6xQv6v6MHWyAi2r70J63lbjByj6Okrk0amApzqSmZendeLfxNQA2_Iu9gq6NJKQp7vYAFu-oeTcUcQ_Nv0cnFJXLZ0HGcFMcH83r2-23KchukVtQm&usqp=CAE","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8J1ZiAD0UeVZa5K6C-jqgKp4YctrxsKeZUfZpZrLwhaJKXXqOgbih4Gpw3YKytRU1Ur_7gCLpkYm5weuCy6VEh7cVld25NQ&usqp=CAY","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcblc0d8F68v98gtRcL-dJJtyScYik3BDNp8wTHVO7VbaWg2S9lH6JPb0IcM-xl9chhIQgZTvgStxpgCVYB8JAM3WjrA2w&usqp=CAY","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKXV9p47y0MwOvt9rUkWtOzFKv1ucXhul6eHgSJdRc-86IHRKAfY9h2pj9nFhB0vL54w2a54xmtNBQhFaR_V1cIMBKWy18&usqp=CAY"],
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