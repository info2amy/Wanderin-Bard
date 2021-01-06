const db = require('../db/connection')
const Instrument = require('../models/instrument')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const instruments = 
      [
        // STRING
        {
          "name": "Sarangi",
          "imgURL": "https://images.metmuseum.org/CRDImages/mi/original/MI6.jpg",
          "description": "A sarangi is a bowed stringed instrument with a skin-covered resonator. The typical sarangi is made by hand, usually from a single block of wood. The four playing strings on this instrument are made of goat gut, and the seventeen sympathetic strings are made of steel.",
        "price": "600",
        "category": "string",
          "origin":"India"
        },
        {
          "name": "Hurdy Gurdy",
          "imgURL": "https://i.pinimg.com/originals/18/f6/cb/18f6cb16f7dcd406c34cb222ebe454cb.png",
          "description": "The hurdy-gurdy is a stringed instrument that produces sound by a hand-crank-turned, rosined wheel rubbing against the strings. The wheel functions much like a violin bow, and single notes played on the instrument sound similar to those of a violin.",
        "price": "1,300",
        "category": "string",
          "origin":"Eastern Europe"
        },
        {
          "name": "Igil",
          "imgURL": "https://img.selzstatic.com/items/71110/sz4gylemtvx/original.jpg?w=1280&fit=min&auto=compress%2cformat&q=70",
          "description": "An igil is a two-stringed Tuvan musical instrument, played by bowing the strings. The neck and lute-shaped sound box are usually made of a solid piece of pine or larch. The top of the sound box may be covered with skin or a thin wooden plate.",
        "price": "600",
        "category": "string",
          "origin":"Tuva"
        },
        // Wind
        {
          "name": "Native American Drone Flute",
          "imgURL": "https://www.southerncrossflutes.com/wp-content/uploads/2018/12/Red-Beech-Temple-Drone-432-Double-Drone-Flute-014.jpg",
          "description": "Native American Style Drone Flutes are dual chambered flutes, playing a drone through the left chamber, and melodic playing on the right. We call this a hybrid Native American Indian Style Flute. This style of flute originates from the Mayan and Teotihuacan cultures, where it was commonly crafted from clay and played by villagers and priests. It has been adapted into a wooden flute that combines the traditional Mayan dual chambered clay flute, with the totem and slow air chamber from the modern Native American Style Flute.",
        "price": "250",
        "category": "wind",
          "origin":"North America (Mayan and Teotihuacan)"
        },
        {
          "name": "Sheng",
          "imgURL": "http://www.paulnoll.com/China/Music/mus-02.jpg",
          "description": "The sheng is a Chinese mouth-blown free reed instrument consisting of vertical pipes. It is a polyphonic instrument and enjoys an increasing popularity as a solo instrument.",
        "price": "180",
        "category": "wind",
          "origin":"China"
        },
        {
          "name": "Contrabass saxophone",
          "imgURL": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRov5CkihELyj3koSXNpZkviSdErKSGS4s5UbXttDm6MLfZDjb6ap07jbxnIj6lgySbDFa8e3y-CP7klMSB1TotS6CpL38WNyITb5IySXqGGWnv3ee3yNnP&usqp=CAE",
          "description": "The contrabass saxophone is the second-lowest-pitched extant member of the saxophone family proper. It is extremely large and heavy, and is pitched in the key of E♭, one octave below the baritone saxophone.",
        "price": "13,000",
        "category": "wind",
          "origin":"Belgium"
        },
        // Percussion
        {
          "name": "Balafon",
          "imgURL": "https://motherlandmusic.com/wp-content/uploads/2018/10/bala15ml.jpg",
          "description": "The balafon is a gourd-resonated xylophone, a type of struck idiophone. It is closely associated with the neighbouring Mandé, Senoufo and Gur peoples of West Africa, particularly the Guinean branch of the Mandinka ethnic group, but is now found across West Africa from Guinea to Mali.",
        "price": "200",
        "category": "percussion",
          "origin":"West Africa"
        },
        {
          "name": "Vibraslap",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/71KOWigZG4L._AC_SL1500_.jpg",
          "description": "The vibraslap is a percussion instrument consisting of a piece of stiff wire connecting a wood ball to a hollow box of wood with metal 'teeth' inside. The percussionist holds the metal wire in one hand and strikes the ball.",
        "price": "40",
        "category": "percussion",
          "origin":"United States"
        },
        {
          "name": "African Talking Drum",
          "imgURL": "https://cdn.shopify.com/s/files/1/0033/9652/products/MI-TD18B.jpg?v=1571262469",
          "description": "The talking drum is an hourglass-shaped drum from West Africa, whose pitch can be regulated to mimic the tone and prosody of human speech. It has two drumheads connected by leather tension cords, which allow the player to change the pitch of the drum by squeezing the cords between their arm and body.",
        "price": "80",
        "category": "percussion",
          "origin":"West Africa"
        },
        // Electronic
        {
          "name": "Misa Kitara",
          "imgURL": "https://encyclotronic.com/uploads/monthly_2018_06/misa-kitara-0.jpg.5cb34aa9fd89b954a75f0f7733484565.jpg",
          "description": "The Misa Kitara is a digital MIDI controller and musical instrument developed in 2011 and discontinued in 2013. It allows for a guitar player to produce a synthesized sound using techniques and motions referential to guitar playing.",
        "price": "900",
        "category": "electronic",
          "origin":"Australia"
        },
        {
          "name": "Reactable",
          "imgURL": "https://miro.medium.com/max/750/1*72BlBOkkGdUaA0wN23OJyw.jpeg",
          "description": "The Reactable is an electronic musical instrument with a tabletop tangible user interface that was developed within the Music Technology Group at the Universitat Pompeu Fabra in Barcelona, Spain.",
        "price": "20,000",
        "category": "electronic",
          "origin":"Spain"
        },
        {
          "name": "Otamatone",
          "imgURL": "https://cdn.shopify.com/s/files/1/0741/2319/products/OT_deluxe_white_01_1200x1200.jpg?v=1598389472",
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