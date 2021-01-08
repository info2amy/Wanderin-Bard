const db = require('../db/connection')
const Instrument = require('../models/instrument')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const instruments = 
      [
        // STRING
        {
          "name": "Sarangi",
          "imgURL": "https://2.bp.blogspot.com/-_lgP4zMbsEY/Uf1ge4FiYlI/AAAAAAAAAEQ/hWrZmyb_pQc/s1600/Sarangi.jpg",
          "img2URL": "https://canary.contestimg.wish.com/api/webimage/59f34e66977da143a2b6ab76-3-large.jpg",
          "img3URL": "https://images.reverb.com/image/upload/s--JHR_M82D--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1487530594/fkah9h3xxjsoexrpp2j7.jpg",
          "img4URL": "https://images.reverb.com/image/upload/s--piJ5wn3p--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1487530596/i3jrgqupxnfch9wrvqcu.jpg",
          "description": "A sarangi is a bowed stringed instrument with a skin-covered resonator. The typical sarangi is made by hand, usually from a single block of wood. The four playing strings on this instrument are made of goat gut, and the seventeen sympathetic strings are made of steel.",
        "price": "600",
        "category": "string",
          "origin":"India"
        },
        {
          "name": "Hurdy Gurdy",
          "imgURL": "https://i.etsystatic.com/16326835/r/il/6858be/2273715354/il_794xN.2273715354_lg9d.jpg",
          "img2URL": "https://i.etsystatic.com/16326835/r/il/55be6c/2273715276/il_794xN.2273715276_chz0.jpg",
          "img3URL": "https://i.etsystatic.com/16326835/r/il/1be3f9/2273714986/il_794xN.2273714986_21da.jpg",
          "img4URL": "https://i.etsystatic.com/16326835/r/il/65f1c6/2509231785/il_794xN.2509231785_quz2.jpg",
          "description": "The hurdy-gurdy is a stringed instrument that produces sound by a hand-crank-turned, rosined wheel rubbing against the strings. The wheel functions much like a violin bow, and single notes played on the instrument sound similar to those of a violin.",
        "price": "1,300",
        "category": "string",
          "origin":"Eastern Europe"
        },
        {
          "name": "Igil",
          "imgURL": "https://www.alashensemble.com/Instruments/igil/igil-hexagon.jpg",
          "img2URL": "https://www.alashensemble.com/Instruments/igil/igil-new-side.jpg",
          "img3URL": "https://www.alashensemble.com/Instruments/igil/igil-2.gif",
          "img4URL": "https://www.alashensemble.com/Instruments/igil/igil-1.gif",
          "description": "An igil is a two-stringed Tuvan musical instrument, played by bowing the strings. The neck and lute-shaped sound box are usually made of a solid piece of pine or larch. The top of the sound box may be covered with skin or a thin wooden plate.",
        "price": "600",
        "category": "string",
          "origin":"Tuva"
        },
        // Wind
        {
          "name": "Native American Drone Flute",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/71obnSwoI8L._AC_SL1500_.jpg",
          "img2URL": "https://images-na.ssl-images-amazon.com/images/I/810h3Pe3JjL._AC_SL1500_.jpg",
          "img3URL": "https://images-na.ssl-images-amazon.com/images/I/71cJY%2BYNhwL._AC_SL1500_.jpg",
          "img4URL": "https://images-na.ssl-images-amazon.com/images/I/71LxKbbN8vL._AC_SL1500_.jpg",
          "description": "Native American Style Drone Flutes are dual chambered flutes, playing a drone through the left chamber, and melodic playing on the right. We call this a hybrid Native American Indian Style Flute. This style of flute originates from the Mayan and Teotihuacan cultures, where it was commonly crafted from clay and played by villagers and priests. It has been adapted into a wooden flute that combines the traditional Mayan dual chambered clay flute, with the totem and slow air chamber from the modern Native American Style Flute.",
        "price": "250",
        "category": "wind",
          "origin":"North America (Mayan and Teotihuacan)"
        },
        {
          "name": "Sheng",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/51qNDv6TtOL._AC_SL1041_.jpg",
          "img2URL": "https://images-na.ssl-images-amazon.com/images/I/51eDVhSaIxL._AC_.jpg",
          "img3URL": "https://images-na.ssl-images-amazon.com/images/I/71HizV8i8lL._AC_SL1500_.jpg",
          "img4URL": "https://images-na.ssl-images-amazon.com/images/I/51S5QgmC8bL._AC_.jpg",
          "description": "The sheng is a Chinese mouth-blown free reed instrument consisting of vertical pipes. It is a polyphonic instrument and enjoys an increasing popularity as a solo instrument.",
        "price": "180",
        "category": "wind",
          "origin":"China"
        },
        {
          "name": "Conch shell horm",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/61ZNhM1H5uL._AC_SL1080_.jpg",
          "img2URL": "https://images-na.ssl-images-amazon.com/images/I/618g2MzCHSL._AC_SL1080_.jpg",
          "img3URL": "https://images-na.ssl-images-amazon.com/images/I/614T7EUGrkL._AC_SL1080_.jpg",
          "img4URL": "https://images-na.ssl-images-amazon.com/images/I/61r2vZ6Su8L._AC_SL1080_.jpg",
          "description": "Conch, or conque, also known as a 'seashell horn' or 'shell trumpet', is a wind instrument that is made from a conch, the shell of several different kinds of sea snails. Their natural conical bore is used to produce a musical tone. Conch shell trumpets have been played in many Pacific Island countries, as well as South America and Southern Asia.",
        "price": "50",
        "category": "wind",
          "origin":"Pacific Island, South America, Southern Asia"
        },
        // Percussion
        {
          "name": "Balafon",
          "imgURL": "https://i.ebayimg.com/images/g/5MgAAOSwR2Rbu8Oz/s-l640.jpg",
          "img2URL": "https://i.ebayimg.com/images/g/53kAAOSwMzVbu8Oz/s-l640.jpg",
          "img3URL": "https://i.ebayimg.com/images/g/mQoAAOSwhZ5bu8Oz/s-l640.jpg",
          "img4URL": "https://i.ebayimg.com/images/g/db4AAOSwGsJbu8Oz/s-l640.jpg",
          "description": "The balafon is a gourd-resonated xylophone, a type of struck idiophone. It is closely associated with the neighbouring Mandé, Senoufo and Gur peoples of West Africa, particularly the Guinean branch of the Mandinka ethnic group, but is now found across West Africa from Guinea to Mali.",
        "price": "200",
        "category": "percussion",
          "origin":"West Africa"
        },
        {
          "name": "Vibraslap",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/71eIaIri1RL._AC_SL1500_.jpg",
          "img2URL": "https://images-na.ssl-images-amazon.com/images/I/71LmapVqkQL._AC_SL1500_.jpg",
          "img3URL": "https://images-na.ssl-images-amazon.com/images/I/71g0eyuLBoL._AC_SL1500_.jpg",
          "img4URL": "https://images-na.ssl-images-amazon.com/images/I/61YZSB9wO4L._AC_SL1500_.jpg",
          "description": "The vibraslap is a percussion instrument consisting of a piece of stiff wire connecting a wood ball to a hollow box of wood with metal 'teeth' inside. The percussionist holds the metal wire in one hand and strikes the ball.",
        "price": "40",
        "category": "percussion",
          "origin":"United States"
        },
        {
          "name": "African Talking Drum",
          "imgURL": "https://images-na.ssl-images-amazon.com/images/I/61BFeEORehL._AC_SL1000_.jpg",
          "img2URL": "https://images-na.ssl-images-amazon.com/images/I/61b%2B3-%2BfRUL._AC_SL1200_.jpg",
          "img3URL": "https://images-na.ssl-images-amazon.com/images/I/610itMabIVL._AC_SL1000_.jpg",
          "img4URL": "https://images-na.ssl-images-amazon.com/images/I/61tsUBDUNBL._AC_SL1000_.jpg",
          "description": "The talking drum is an hourglass-shaped drum from West Africa, whose pitch can be regulated to mimic the tone and prosody of human speech. It has two drumheads connected by leather tension cords, which allow the player to change the pitch of the drum by squeezing the cords between their arm and body.",
        "price": "80",
        "category": "percussion",
          "origin":"West Africa"
        },
        // Electronic
        {
          "name": "Misa Kitara",
          "imgURL": "https://www.vintageguitar.com/wp-content/uploads/MISA-KITARA1.jpg",
          "img2URL": "https://i.ebayimg.com/images/g/-bkAAOSwYV5f3d0r/s-l640.jpg",
          "img3URL": "https://i.ebayimg.com/images/g/9w8AAOSw1rJf3d0s/s-l640.jpg",
          "img4URL": "https://i.ebayimg.com/images/g/cpgAAOSw~nFf3d0s/s-l640.jpg",
          "description": "The Misa Kitara is a digital MIDI controller and musical instrument developed in 2011 and discontinued in 2013. It allows for a guitar player to produce a synthesized sound using techniques and motions referential to guitar playing.",
        "price": "900",
        "category": "electronic",
          "origin":"Australia"
        },
        {
          "name": "Reactable",
          "imgURL": "https://miro.medium.com/max/750/1*72BlBOkkGdUaA0wN23OJyw.jpeg",
          "img2URL": "https://images.reverb.com/image/upload/s--IrbTwd3g--/f_auto,t_supersize/v1608145403/eafxdldrrsf0f5uedigq.jpg",
          "img3URL": "https://images.reverb.com/image/upload/s--UuDKV4cR--/f_auto,t_supersize/v1608145404/v47fcqrwqljpdpfiedjq.jpg",
          "img4URL": "https://az877327.vo.msecnd.net/~/media/images/references/2013/reactable/the%20reactable2%20png.png?v=1&mw=1800&mh=1200",
          "description": "The Reactable is an electronic musical instrument with a tabletop tangible user interface that was developed within the Music Technology Group at the Universitat Pompeu Fabra in Barcelona, Spain.",
        "price": "20,000",
        "category": "electronic",
          "origin":"Spain"
        },
        {
          "name": "Otamatone",
          "imgURL": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0aBj6xQv6v6MHWyAi2r70J63lbjByj6Okrk0amApzqSmZendeLfxNQA2_Iu9gq6NJKQp7vYAFu-oeTcUcQ_Nv0cnFJXLZ0HGcFMcH83r2-23KchukVtQm&usqp=CAE",
          "img2URL": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8J1ZiAD0UeVZa5K6C-jqgKp4YctrxsKeZUfZpZrLwhaJKXXqOgbih4Gpw3YKytRU1Ur_7gCLpkYm5weuCy6VEh7cVld25NQ&usqp=CAY",
          "img3URL": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcblc0d8F68v98gtRcL-dJJtyScYik3BDNp8wTHVO7VbaWg2S9lH6JPb0IcM-xl9chhIQgZTvgStxpgCVYB8JAM3WjrA2w&usqp=CAY",
          "img4URL": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKXV9p47y0MwOvt9rUkWtOzFKv1ucXhul6eHgSJdRc-86IHRKAfY9h2pj9nFhB0vL54w2a54xmtNBQhFaR_V1cIMBKWy18&usqp=CAY",
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