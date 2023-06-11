const champions = [
    {
      name: "Jhin",
      gender: "Male",
      positions: ["ADC"],
      species: ["Human", "Spiritualist"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2016
    },
    {
      name: "Soraka",
      gender: "Female",
      positions: ["Support"],
      species: "Celestial",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia", "Targon"],
      releaseYear: 2009
    },
    {
      name: "Kled",
      gender: "Male",
      positions: ["Top"],
      species: "Yordle",
      resource: "Courage",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2016
    },
  
    {
      name: "Warwick",
      gender: "Male",
      positions: ["Jungle", "Top"],
      species: ["Chemically Altered", "Cyborg", "Human"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Zaun"],
      releaseYear: 2009
    },
    {
      name: "Zed",
      gender: "Male",
      positions: ["Mid"],
      species: "Human / Magically Altered",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2012,
    },
    {
      name: "Aatrox",
      gender: "Male",
      positions: ["Top"],
      species: "Darkin",
      resource: "Manaless",
      rangeType: "Melee",
      regions: ["Runeterra", "Shurima"],
      releaseYear: 2013
    },
    {
      name: "Ahri",
      gender: "Female",
      positions: ["Mid"],
      species: "Vastayan",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2011
    },
    {
      name: "Akali",
      gender: "Female",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2010
    },
    {
      name: "Akshan",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima"],
      releaseYear: 2021
    },
    {
      name: "Alistar",
      gender: "Male",
      positions: ["Support"],
      species: "Minotaur",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Runeterra"],
      releaseYear: 2009
    },
    {
      name: "Amumu",
      gender: "Male",
      positions: ["Jungle", "Support"],
      species: ["Undead", "Yordle"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Shurima"],
      releaseYear: 2009
    },
    {
      name: "Anivia",
      gender: "Female",
      positions: ["Mid"],
      species: ["God", "Spirit"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Freljord"],
      releaseYear: 2009
    },
    {
      name: "Annie",
      gender: "Female",
      positions: ["Mid", "Magicborn"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus", "Runeterra"],
      releaseYear: 2009
    },
    {
      name: "Aphelios",
      gender: "Male",
      positions: ["ADC"],
      species: ["Human", "Spiritualist"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Targon"],
      releaseYear: 2019
    },
    {
      name: "Ashe",
      gender: "Female",
      positions: ["ADC", "Support"],
      species: ["Human", "Iceborn"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Freljord"],
      releaseYear: 2009
    },
    {
      name: "Aurelion Sol",
      gender: "Male",
      positions: ["Mid"],
      species: ["Celestial", "Dragon"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Runeterra", "Targon"],
      releaseYear: 2016
    },
    {
      name: "Azir",
      gender: "Male",
      positions: ["Mid"],
      species: "God-Warrior",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima"],
      releaseYear: 2014
    },
    {
      name: "Blitzcrank",
      gender: "Other",
      positions: ["Support"],
      species: "Golem",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Zaun"],
      releaseYear: 2009
    },
    {
      name: "Bel'Veth",
      gender: "Female",
      positions: ["Jungle"],
      species: "Void-Being",
      resource: "Manless",
      rangeType: "Melee",
      regions: ["Void"],
      releaseYear: 2022
    },
    {
      name: "Bard",
      gender: "Male",
      positions: ["Support"],
      species: "Celestial",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Runeterra"],
      releaseYear: 2015
    },
    {
      name: "Brand",
      gender: "Male",
      positions: ["Support"],
      species: ["Human", "Magically Altered"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Freljord", "Runeterra"],
      releaseYear: 2011
    },
    {
      name: "Braum",
      gender: "Male",
      positions: ["Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2014
    },
    {
      name: "Caitlyn",
      gender: "Female",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2011
    },
    {
      name: "Camille",
      gender: "Female",
      positions: ["Top"],
      species: ["Cyborg", "Human"],
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Piltover"],
      releaseYear: 2016
    },
    {
      name: "Cassiopeia",
      gender: "Female",
      positions: ["Mid"],
      species: ["Human", "Magically Altered"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus", "Shurima"],
      releaseYear: 2010
    },
    {
      name: "Cho'Gath",
      gender: "Male",
      positions: ["Top"],
      species: "Void-Being",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Void"],
      releaseYear: 2009
    },
    {
      name: "Corki",
      gender: "Male",
      positions: ["Mid"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City", "Piltover"],
      releaseYear: 2009
    },
    {
      name: "Darius",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2012
    },
    {
      name: "Diana",
      gender: "Female",
      positions: ["Jungle"],
      species: ["Aspect", "Human"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Targon"],
      releaseYear: 2012
    },
    {
      name: "Dr. Mundo",
      gender: "Male",
      positions: ["Top"],
      species: ["Chemically Altered", "Human"],
      resource: "Health",
      rangeType: "Melee",
      regions: ["Zaun"],
      releaseYear: 2009
    },
    {
      name: "Draven",
      gender: "Male",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus"],
      releaseYear: 2012
    },
    {
      name: "Ekko",
      gender: "Male",
      positions: ["Jungle", "Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Zaun"],
      releaseYear: 2015
    },
    {
      name: "Elise",
      gender: "Female",
      positions: ["Jungle"],
      species: ["Human", "Magically Altered"],
      resource: "Mana",
      rangeType: ["Ranged", "Melee"],
      regions: ["Noxus", "Shadow Isles"],
      releaseYear: 2012
    },
    {
      name: "Evelynn",
      gender: "Female",
      positions: ["Jungle"],
      species: ["Demon", "Spirit"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Runeterra"],
      releaseYear: 2009
    },
    {
      name: "Ezreal",
      gender: "Male",
      positions: ["ADC"],
      species: ["Human", "Magicborn"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2010
    },
    {
      name: "Fiddlesticks",
      gender: "Male",
      positions: ["Jungle"],
      species: ["Demon", "Spirit"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Runeterra"],
      releaseYear: 2009
    },
    {
      name: "Fiora",
      gender: "Female",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2012
    },
    {
      name: "Fizz",
      gender: "Male",
      positions: ["Mid"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Bilgewater"],
      releaseYear: 2011
    },
    {
      name: "Galio",
      gender: "Male",
      positions: ["Mid", "Support"],
      species: "Golem",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Gangplank",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Bilgewater"],
      releaseYear: 2009
    },
    {
      name: "Garen",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Manaless",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Gnar",
      gender: "Male",
      positions: ["Top"],
      species: "Yordle",
      resource: "Rage",
      rangeType: ["Ranged", "Melee"],
      regions: ["Freljord"],
      releaseYear: 2014
    },
    {
      name: "Gragas",
      gender: "Male",
      positions: ["Jungle", "Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2010
    },
    {
      name: "Graves",
      gender: "Male",
      positions: ["Jungle"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bilgewater"],
      releaseYear: 2011
    },
    {
      name: "Gwen",
      gender: "Female",
      positions: ["Top"],
      species: ["Human", "Magically Altered"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Camavor", "Shadow Isles"],
      releaseYear: 2021
    },
    {
      name: "Hecarim",
      gender: "Male",
      positions: ["Jungle"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Camavor", "Shadow Isles"],
      releaseYear: 2012
    },
    {
      name: "Heimerdinger",
      gender: "Male",
      positions: ["Mid", "Support"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2009
    },
    {
      name: "Illaoi",
      gender: "Female",
      positions: ["Top"],
      species: ["Human", "Spiritualist"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Bilgewater"],
      releaseYear: 2015
    },
    {
      name: "Irelia",
      gender: "Female",
      positions: ["Mid", "Top"],
      species: ["Human", "Spiritualist"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2010
    },
    {
      name: "Ivern",
      gender: "Male",
      positions: ["Jungle"],
      species: ["Human", "Magically Altered"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Freljord", "Ionia"],
      releaseYear: 2016
    },
    {
      name: "Janna",
      gender: "Female",
      positions: ["Support"],
      species: ["God", "Spirit"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima", "Zaun"],
      releaseYear: 2009
    },
    {
      name: "Jarvan IV",
      gender: "Male",
      positions: ["Jungle"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2011
    },
    {
      name: "Jax",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Icathia", "Shurima"],
      releaseYear: 2009
    },
    {
      name: "Jayce",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: ["Ranged", "Melee"],
      regions: ["Piltover"],
      releaseYear: 2012
    },
    {
      name: "Jinx",
      gender: "Female",
      positions: ["ADC"],
      species: ["Chemically Altered", "Human"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2013
    },
    {
      name: "Kai'Sa",
      gender: "Female",
      positions: ["ADC"],
      species: ["Human", "Void-being"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima", "Void"],
      releaseYear: 2018
    },
    {
      name: "Kalista",
      gender: "Female",
      positions: ["ADC"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Camavor", "Shadow Isles"],
      releaseYear: 2014
    },
    {
      name: "Karma",
      gender: "Female",
      positions: ["Support"],
      species: ["Human", "Spiritualist"],
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2011
    },
    {
      name: "Karthus",
      gender: "Male",
      positions: ["Jungle"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus", "Shadow Isles"],
      releaseYear: 2009
    },
    {
      name: "Kassadin",
      gender: "Male",
      positions: ["Mid"],
      species: ["Human", "Void-Being"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Shurima", "Void"],
      releaseYear: 2009
    },
    {
      name: "Katarina",
      gender: "Female",
      positions: ["Mid"],
      species: "Human",
      resource: "Manaless",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2009
    },
    {
      name: "Kayle",
      gender: "Female",
      positions: ["Top"],
      species: ["Aspect", "Human", "Magically Altered"],
      resource: "Mana",
      rangeType: ["Ranged", "Melee"],
      regions: ["Demacia", "Targon"],
      releaseYear: 2009
    },
    {
      name: "Kayn",
      gender: "Male",
      positions: ["Jungle"],
      species: ["Darkin", "Human", "Magically Altered"],
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Ionia", "Noxus", "Shurima"],
      releaseYear: 2017
    },
    {
      name: "Kennen",
      gender: "Male",
      positions: ["Top", "Mid"],
      species: "Yordle",
      resource: "Energy",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2010
    },
    {
      name: "Kha'Zix",
      gender: "Male",
      positions: ["Jungle"],
      species: "Voidborn",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Void"],
      releaseYear: 2012
    },
    {
      name: "Kindred",
      gender: "Non-binary",
      positions: ["Jungle"],
      species: "Lamb and Wolf",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2015
    },
    {
      name: "Kog'Maw",
      gender: "Male",
      positions: ["ADC"],
      species: "Voidborn",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Void"],
      releaseYear: 2010
    },
    {
      name: "LeBlanc",
      gender: "Female",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus"],
      releaseYear: 2010
    },
    {
      name: "Lee Sin",
      gender: "Male",
      positions: ["Jungle"],
      species: "Human",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2011
    },
    {
      name: "Leona",
      gender: "Female",
      positions: ["Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Targon"],
      releaseYear: 2011
    },
    {
      name: "Lillia",
      gender: "Female",
      positions: ["Jungle"],
      species: "Fae",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2020
    },
    {
      name: "Lissandra",
      gender: "Female",
      positions: ["Mid"],
      species: "Human / Iceborn",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Freljord"],
      releaseYear: 2013
    },
    {
      name: "Lucian",
      gender: "Male",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Demacia"],
      releaseYear: 2013
    },
    {
      name: "Lulu",
      gender: "Female",
      positions: ["Support", "Mid"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2012
    },
    {
      name: "Lux",
      gender: "Female",
      positions: ["Mid", "Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Malphite",
      gender: "Male",
      positions: ["Top"],
      species: "Rock",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Malzahar",
      gender: "Male",
      positions: ["Mid"],
      species: "Voidborn",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Void"],
      releaseYear: 2010
    },
    {
      name: "Maokai",
      gender: "Male",
      positions: ["Top", "Support"],
      species: "Tree",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Shadow Isles"],
      releaseYear: 2011
    },
    {
      name: "Master Yi",
      gender: "Male",
      positions: ["Jungle", "Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Miss Fortune",
      gender: "Female",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bilgewater"],
      releaseYear: 2010
    },
    {
      name: "Mordekaiser",
      gender: "Male",
      positions: ["Top"],
      species: "Iron revenant",
      resource: "Shield",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2010
    },
    {
      name: "Morgana",
      gender: "Female",
      positions: ["Support", "Mid"],
      species: "Fallen Angel",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Nami",
      gender: "Female",
      positions: ["Support"],
      species: "Mermaid",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2012
    },
    {
      name: "Nautilus",
      gender: "Male",
      positions: ["Support", "Top"],
      species: "Titan",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2012
    },
    {
      name: "Neeko",
      gender: "Female",
      positions: ["Mid", "Support"],
      species: "Vastaya",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2018
    },
    {
      name: "Nidalee",
      gender: "Female",
      positions: ["Jungle", "Top"],
      species: "Human / Cougar",
      resource: "Mana",
      rangeType: "Ranged / Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Nocturne",
      gender: "Male",
      positions: ["Jungle"],
      species: "Nightmare",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2011
    },
    {
      name: "Nunu & Willump",
      gender: "Male",
      positions: ["Jungle"],
      species: "Boy and Yeti",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Olaf",
      gender: "Male",
      positions: ["Top", "Jungle"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2010
    },
    {
      name: "Orianna",
      gender: "Female",
      positions: ["Mid"],
      species: "Clockwork Girl",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2011
    },
    {
      name: "Ornn",
      gender: "Male",
      positions: ["Top"],
      species: "Demigod",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2017
    },
    {
      name: "Pantheon",
      gender: "Male",
      positions: ["Top", "Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Targon"],
      releaseYear: 2010
    },
    {
      name: "Poppy",
      gender: "Female",
      positions: ["Top"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Pyke",
      gender: "Male",
      positions: ["Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Bilgewater"],
      releaseYear: 2018
    },
    {
      name: "Qiyana",
      gender: "Female",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Ixtal"],
      releaseYear: 2019
    },
    {
      name: "Quinn",
      gender: "Female",
      positions: ["Top", "ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Demacia"],
      releaseYear: 2013
    },
    {
      name: "Rakan",
      gender: "Male",
      positions: ["Support"],
      species: "Vastayan",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2017
    },
    {
      name: "Rammus",
      gender: "Male",
      positions: ["Jungle"],
      species: "Armordillo",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Rek'Sai",
      gender: "Female",
      positions: ["Jungle"],
      species: "Voidborn",
      resource: "Fury",
      rangeType: "Melee",
      regions: ["Void"],
      releaseYear: 2014
    },
    {
      name: "Rell",
      gender: "Female",
      positions: ["Support"],
      species: "Iron Maiden",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2021
    },
    {
      name: "Renekton",
      gender: "Male",
      positions: ["Top"],
      species: "Human / Crocodile",
      resource: "Fury",
      rangeType: "Melee",
      regions: ["Shurima"],
      releaseYear: 2011
    },
    {
      name: "Rengar",
      gender: "Male",
      positions: ["Jungle"],
      species: "Beast",
      resource: "Ferocity",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2012
    },
    {
      name: "Riven",
      gender: "Female",
      positions: ["Top"],
      species: "Human",
      resource: "None",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2011
    },
    {
      name: "Rumble",
      gender: "Male",
      positions: ["Top"],
      species: "Yordle",
      resource: "Heat",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2011
    },
    {
      name: "Ryze",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Samira",
      gender: "Female",
      positions: ["ADC"],
      species: "Human",
      resource: "None",
      rangeType: "Ranged / Melee",
      regions: ["Unknown"],
      releaseYear: 2020
    },
    {
      name: "Sejuani",
      gender: "Female",
      positions: ["Jungle", "Top"],
      species: "Human / Boar",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2012
    },
    {
      name: "Senna",
      gender: "Female",
      positions: ["ADC", "Support"],
      species: "Human / Spirit",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2019
    },
    {
      name: "Seraphine",
      gender: "Female",
      positions: ["Mid", "Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2020
    },
    {
      name: "Sett",
      gender: "Male",
      positions: ["Top", "Jungle"],
      species: "Human",
      resource: "None",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2020
    },
    {
      name: "Shaco",
      gender: "Male",
      positions: ["Jungle"],
      species: "Demon",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Shen",
      gender: "Male",
      positions: ["Top", "Support"],
      species: "Human",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2010
    },
    {
      name: "Shyvana",
      gender: "Female",
      positions: ["Jungle"],
      species: "Dragon",
      resource: "Fury",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2011
    },
    {
      name: "Singed",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Piltover"],
      releaseYear: 2009
    },
    {
      name: "Sion",
      gender: "Male",
      positions: ["Top"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2009
    },
    {
      name: "Sivir",
      gender: "Female",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima"],
      releaseYear: 2010
    },
    {
      name: "Skarner",
      gender: "Male",
      positions: ["Jungle"],
      species: "Scorpion",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2011
    },
    {
      name: "Sona",
      gender: "Female",
      positions: ["Support"],
      species: "Human / Spirit",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Swain",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus"],
      releaseYear: 2010
    },
    {
      name: "Sylas",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2019
    },
    {
      name: "Syndra",
      gender: "Female",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2012
    },
    {
      name: "Tahm Kench",
      gender: "Male",
      positions: ["Support", "Top"],
      species: "River King",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2015
    },
    {
      name: "Taliyah",
      gender: "Female",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima"],
      releaseYear: 2016
    },
    {
      name: "Talon",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Noxus"],
      releaseYear: 2011
    },
    {
      name: "Taric",
      gender: "Male",
      positions: ["Support"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Mount Targon"],
      releaseYear: 2009
    },
    {
      name: "Teemo",
      gender: "Male",
      positions: ["Top"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2009
    },
    {
      name: "Thresh",
      gender: "Male",
      positions: ["Support"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shadow Isles"],
      releaseYear: 2013
    },
    {
      name: "Tristana",
      gender: "Female",
      positions: ["ADC"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2010
    },
    {
      name: "Trundle",
      gender: "Male",
      positions: ["Top", "Jungle"],
      species: "Troll",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2010
    },
    {
      name: "Tryndamere",
      gender: "Male",
      positions: ["Top"],
      species: "Human",
      resource: "None",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2009
    },
    {
      name: "Twisted Fate",
      gender: "Male",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Twitch",
      gender: "Male",
      positions: ["ADC"],
      species: "Rat",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Udyr",
      gender: "Male",
      positions: ["Jungle"],
      species: "Human / Spirit",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2009
    },
    {
      name: "Urgot",
      gender: "Male",
      positions: ["Top"],
      species: "Urgot",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Noxus"],
      releaseYear: 2010
    },
    {
      name: "Varus",
      gender: "Male",
      positions: ["ADC"],
      species: "Darkin",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Unknown"],
      releaseYear: 2012
    },
    {
      name: "Vayne",
      gender: "Female",
      positions: ["ADC"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Demacia"],
      releaseYear: 2011
    },
    {
      name: "Veigar",
      gender: "Male",
      positions: ["Mid"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2009
    },
    {
      name: "Vel'Koz",
      gender: "Male",
      positions: ["Mid", "Support"],
      species: "Voidborn",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Void"],
      releaseYear: 2014
    },
    {
      name: "Vi",
      gender: "Female",
      positions: ["Jungle"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Piltover"],
      releaseYear: 2012
    },
    {
      name: "Viego",
      gender: "Male",
      positions: ["Jungle"],
      species: "Unknown",
      resource: "None",
      rangeType: "Melee",
      regions: ["Unknown"],
      releaseYear: 2021
    },
    {
      name: "Viktor",
      gender: "Male",
      positions: ["Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Zaun"],
      releaseYear: 2011
    },
    {
      name: "Vladimir",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Vampire",
      resource: "Health",
      rangeType: "Ranged",
      regions: ["Noxus"],
      releaseYear: 2010
    },
    {
      name: "Volibear",
      gender: "Male",
      positions: ["Jungle", "Top"],
      species: "Bear",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Freljord"],
      releaseYear: 2012
    },
    {
      name: "Wukong",
      gender: "Male",
      positions: ["Top"],
      species: "Vastayan",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2011
    },
    {
      name: "Xayah",
      gender: "Female",
      positions: ["ADC"],
      species: "Vastayan",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2017
    },
    {
      name: "Xerath",
      gender: "Male",
      positions: ["Mid"],
      species: "Ascended",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Shurima"],
      releaseYear: 2011
    },
    {
      name: "Xin Zhao",
      gender: "Male",
      positions: ["Jungle"],
      species: "Human",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Demacia"],
      releaseYear: 2010
    },
    {
      name: "Yasuo",
      gender: "Male",
      positions: ["Mid", "Top"],
      species: "Human",
      resource: "Flow",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2013
    },
    {
      name: "Yone",
      gender: "Male",
      positions: ["Mid"],
      species: "Human",
      resource: "Energy",
      rangeType: "Melee",
      regions: ["Ionia"],
      releaseYear: 2020
    },
    {
      name: "Yorick",
      gender: "Male",
      positions: ["Top"],
      species: "Undead",
      resource: "Mana",
      rangeType: "Melee",
      regions: ["Shadow Isles"],
      releaseYear: 2011
    },
    {
      name: "Yuumi",
      gender: "Female",
      positions: ["Support"],
      species: "Cat",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Bandle City"],
      releaseYear: 2019
    },
    {
      name: "Zac",
      gender: "Male",
      positions: ["Jungle"],
      species: "Blob",
      resource: "None",
      rangeType: "Melee",
      regions: ["Zaun"],
      releaseYear: 2013
    },
    {
      name: "Ziggs",
      gender: "Male",
      positions: ["Mid"],
      species: "Yordle",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Piltover"],
      releaseYear: 2012
    },
    {
      name: "Zilean",
      gender: "Male",
      positions: ["Support", "Mid"],
      species: "Human",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Zaun"],
      releaseYear: 2009
    },
    {
      name: "Zoe",
      gender: "Female",
      positions: ["Mid", "Support"],
      species: "Aspect",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Targon"],
      releaseYear: 2017
    },
    {
      name: "Zyra",
      gender: "Female",
      positions: ["Support", "Mid"],
      species: "Plant",
      resource: "Mana",
      rangeType: "Ranged",
      regions: ["Ionia"],
      releaseYear: 2012
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ];
  let correctGuesses = 0;
  let timerStarted = false;
  let guessAttempts = 0;
  let firstGuessMade = false;
  
  
  
  
  const form = document.getElementById("form");
  const answerEl = document.getElementById("answer");
  const resultsEl = document.getElementById("results");
  const autocompleteList = document.getElementById("autocomplete-list");
  const playAgainButton = document.getElementById("play-again");
  const guessedChampions = [];
  
  
  playAgainButton.addEventListener("click", () => {
    results.querySelector("tbody").innerHTML = "";
    playAgainButton.style.display = "none";
    const championImage = document.getElementById("champion-image"); // Get the champion image element
    championImage.src = ""; // Clear the image src
    championImage.style.display = "none"; // Hide the image element
  
    // Clear the guessedChampions array
    guessedChampions.length = 0;
    correctGuesses = 0;
    startTime = new Date();
    guessAttempts = 0;
    updateLeaderboard();
  
    // Clear the champion name
    const championNameContainer = document.getElementById("champion-name");
    championNameContainer.textContent = "";
    championNameContainer.style.display = "none"; // Hide the champion name element
  
    generateQuestion();
  });
  
  let currentChampion = {};
  
  function generateQuestion() {
    currentChampion = champions[Math.floor(Math.random() * champions.length)];
    currentChampion = champions.find(champ => champ.name === "Aatrox");
  }
  
  // ... rest of your code ...
  function updateLeaderboard() {
    if (timerStarted && firstGuessMade) {
      document.getElementById("timer").innerText = `Time: ${formatTime(new Date() - startTime)}`;
    } else {
      document.getElementById("timer").innerText = `Time: 02:00`;
    }
  
    document.getElementById("guess-attempts").innerText = `Guess attempts: ${guessAttempts}`;
  }
  
  function formatTime(milliseconds) {
    const remainingMilliseconds = 120000 - milliseconds; // 2 minutes in milliseconds
    const seconds = Math.floor(remainingMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }
  
  
  function createBox(key, value, isCorrect, isPartial) {
    const box = document.createElement("div");
    box.classList.add("box");
  
    if (key === "name") {
      box.textContent = value;
    } else {
      const valueSpan = document.createElement("span");
      valueSpan.textContent = value;
      valueSpan.classList.add("box-value");
      box.appendChild(valueSpan);
    }
  
    if (isCorrect) {
      box.classList.add("correct");
    } else if (isPartial) {
      box.classList.add("partial");
    } else {
      box.classList.add("incorrect");
    }
  
    return box;
  }
  
  function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
  
    for (const key in currentChampion) {
      const boxContainer = document.createElement("div");
      boxContainer.classList.add("box-container");
      boxContainer.id = key;
  
      const label = document.createElement("span");
      label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: `;
      boxContainer.appendChild(label);
  
      row.appendChild(boxContainer);
    }
  
    return row;
  }
  
  function isPartiallyCorrect(inputValue, championValue) {
    const inputValues = new Set(
      inputValue.replace(/,/g, " / ").split(" / ").map(val => val.trim().toLowerCase())
    );
    const championValues = new Set(
      championValue.replace(/,/g, " / ").split(" / ").map(val => val.trim().toLowerCase())
    );
  
    return [...inputValues].some(val => championValues.has(val));
  }
  
  function createCell(content, isCorrect, isPartial, key, onAnimationEnd) {
    const cell = document.createElement("td");
  
    if (key === "name") {
      const img = document.createElement("img");
      let formattedName;
  
      if (content === "Nunu & Willump") {
        formattedName = "Nunu&Willump";
      } else {
        formattedName = content.replace(/ /g, '_');
      }
  
      img.src = `ChampSquares/${formattedName}Square.png`;
      img.alt = content;
      img.classList.add("champion-icon");
      cell.appendChild(img);
      cell.classList.add("name-cell");
    } else {
      const tableContent = document.createElement("div");
      tableContent.classList.add("table-content", "word-wrap"); // Add the 'table-content' class here
      tableContent.textContent = content;
      cell.appendChild(tableContent);
      cell.classList.add("text-cell");
  
      setTimeout(() => {
        adjustFontSize(cell, tableContent);
      }, 0);
    }
    setTimeout(() => {
      adjustFontSize(cell, tableContent);
    }, 0);
  
    if (isCorrect) {
      cell.classList.add("correct");
    } else if (isPartial) {
      cell.classList.add("partial");
    } else {
      cell.classList.add("incorrect");
    }
  
    // Add the fade-in animation class to the cell
    cell.classList.add("fade-in");
  
    // Set the animation delay based on the cell's position in the row
    const columnIndex = Object.keys(currentChampion).indexOf(key);
    const animationDelay = columnIndex * 0.4; // Adjust the multiplier (0.1) to control the delay between animations
    cell.style.animationDelay = `${animationDelay}s`;
  
    // Add an event listener to the animationend event
    cell.addEventListener('animationend', () => {
      onAnimationEnd();
    });
  
    return cell;
  }
  
  function adjustFontSize(cell, element) {
    const maxHeight = cell.clientHeight;
    const maxWidth = cell.clientWidth;
    let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
  
    // Split the content into words
    const words = element.textContent.split(" ");
    element.innerHTML = "";
  
    // Create a div element for each word with the "word" class
    words.forEach((word) => {
      const wordDiv = document.createElement("div");
      wordDiv.textContent = word;
      wordDiv.classList.add("word");
      element.appendChild(wordDiv);
    });
  
    // Adjust the font size until all words fit within the cell
    while (
      (Array.from(element.children).some(
        (wordDiv) => wordDiv.scrollWidth > maxWidth
      ) || element.scrollHeight > maxHeight) &&
      fontSize > 0
    ) {
      fontSize -= 0.5;
      element.style.fontSize = `${fontSize}px`;
      element.style.lineHeight = `${fontSize}px`;
    }
  }
  
  function checkAnswer(event) {
    event.preventDefault();
  
    const guessedChampion = champions.find(
      (champ) => champ.name.toLowerCase() === answerEl.value.trim().toLowerCase()
    );
  
    // Check if the champion has already been guessed
    if (!timerStarted && !firstGuessMade) {
      timerStarted = true;
      startTime = new Date();
      firstGuessMade = true;
    }
  
    if (guessedChampion && !guessedChampions.includes(guessedChampion.name)) {
      guessedChampions.push(guessedChampion.name); // Add the champion to the guessedChampions array
  
      let allCorrect = true;
      const row = document.createElement("tr");
      let completedAnimations = 0;
      const totalAnimations = Object.keys(currentChampion).length;
  
      for (const key in currentChampion) {
        const inputValue = guessedChampion[key].toString().toLowerCase();
        const championValue = currentChampion[key].toString().toLowerCase();
  
        const inputValues = new Set(
          inputValue.replace(/,/g, " / ").split(" / ").map(val => val.trim().toLowerCase())
        );
        const championValues = new Set(
          championValue.replace(/,/g, " / ").split(" / ").map(val => val.trim().toLowerCase())
        );
  
        const isCorrect = isEqual(inputValues, championValues);
        const isPartial = !isCorrect && isPartiallyCorrect(inputValue, championValue);
  
        if (!isCorrect && !isPartial) {
          allCorrect = false;
        }
  
        const cell = createCell(guessedChampion[key], isCorrect, isPartial, key, () => {
          completedAnimations++;
  
          if (completedAnimations === totalAnimations) {
            // Scroll down to the champion image and play again button after all cell animations have completed
            const championImage = document.getElementById("champion-image");
            const championImagePosition = championImage.getBoundingClientRect().top + window.scrollY + 10;
            window.scrollTo({ top: championImagePosition, behavior: "smooth" });
          }
        });
  
        row.appendChild(cell);
      }
  
      results.querySelector("tbody").insertBefore(row, results.querySelector("tbody").firstChild);
  
      guessAttempts++; // Increment guess attempts counter outside of the if (allCorrect) block
  
      if (allCorrect) {
        playAgainButton.style.display = "inline-block";
        displayChampionImage(guessedChampion.name);
  
        // Display the champion's name below the image and the "Play Again" button
        const championNameContainer = document.getElementById("champion-name");
        championNameContainer.textContent = guessedChampion.name;
        championNameContainer.classList.add("champion-name"); // Add the "champion-name" class
        championNameContainer.style.display = "block"; // Make sure the name container is displayed
        updateLeaderboard();
      }
  
      answerEl.value = "";
      // Update leaderboard after each guess attempt
    }
  }
  
  function displayChampionImage(championName) {
    const championImage = document.getElementById("champion-image");
    championImage.src = `img/champions/${championName}.png`;
    championImage.style.display = "block";
  
    displayChampionName(championName);
  }
  function displayChampionName(championName) {
    const championNameContainer = document.getElementById("champion-name");
    championNameContainer.textContent = championName;
  }
  
  function playAgain() {
    function playAgain() {
      startTime = new Date(); // Reset the start time
      updateLeaderboard(); // Update the timer display
      firstGuessMade = false;
  
      // ... rest of the playAgain function ...
    }
  
    // Hide the champion image, name, and "Play Again" button
    championImage.style.display = "none";
    const championNameContainer = document.getElementById("champion-name");
    championNameContainer.textContent = "";
    championNameContainer.classList.remove("champion-name");
    championNameContainer.style.display = "none";
    playAgainButton.style.display = "none";
  
    // Clear the results table (excluding the header row)
    const resultsTable = results.querySelector("tbody");
    while (resultsTable.firstChild && resultsTable.firstChild !== resultsTable.querySelector("thead")) {
      resultsTable.removeChild(resultsTable.firstChild);
    }
  
    // Generate a new champion for guessing
    generateChampion();
  }
  
  function resetTimerDisplay() {
    document.getElementById("timer").innerText = `Time: 02:00`;
  }
  
  
  // Utility function to compare two sets for equality
  function isEqual(setA, setB) {
    if (setA.size !== setB.size) {
      return false;
    }
    for (const item of setA) {
      if (!setB.has(item)) {
        return false;
      }
    }
    return true;
  }
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
  
  async function displayChampionImage(championName) {
    const championImage = document.getElementById("champion-image");
    const extensions = [".jpeg", ".png", ".jpg"];
  
    for (const ext of extensions) {
      try {
        const imagePath = `Champions_img/${championName}${ext}`;
        const img = await loadImage(imagePath);
        championImage.src = img.src;
        championImage.style.display = "block"; // Add this line to make the image visible
        break;
      } catch (error) {
        console.error(`Failed to load image with extension ${ext}`, error);
      }
    }
  
    displayChampionName(championName); // Call the displayChampionName function here
  }
  
  
  form.addEventListener("submit", checkAnswer);
  generateQuestion();
  
  function autocomplete() {
    const inputValue = answerEl.value.trim().toLowerCase();
    autocompleteList.innerHTML = "";
  
    if (inputValue.length > 0) {
      const matchingChampions = champions
        .filter((champ) => champ.name.toLowerCase().startsWith(inputValue) && !guessedChampions.includes(champ.name))
        .sort((a, b) => a.name.localeCompare(b.name));
  
      matchingChampions.forEach((champion) => {
        const championName = champion.name.replace(/ /g, "_");
        const iconSrc = `ChampSquares/${championName}Square.png`;
  
        const div = document.createElement("div");
        div.classList.add("autocomplete-item");
  
        const img = document.createElement("img");
        img.src = iconSrc;
        img.alt = champion.name;
        img.classList.add("autocomplete-icon");
        div.appendChild(img);
  
        const nameSpan = document.createElement("span");
        nameSpan.textContent = champion.name;
        nameSpan.classList.add("autocomplete-name");
        div.appendChild(nameSpan);
  
        div.addEventListener("click", () => {
          answerEl.value = champion.name;
          autocompleteList.innerHTML = "";
        });
        autocompleteList.appendChild(div);
      });
    }
  
    autocompleteList.style.backgroundColor = "#28314E";
    autocompleteList.style.color = "#ffffff";
  }
  
  answerEl.addEventListener("input", autocomplete);
  answerEl.addEventListener("focus", autocomplete);
  
  document.addEventListener("click", (event) => {
    if (event.target !== answerEl) {
      autocompleteList.innerHTML = "";
    }
  });
  playAgainButton.addEventListener("click", () => {
    results.querySelector("tbody").innerHTML = "";
    playAgainButton.style.display = "none";
    const championImage = document.getElementById("champion-image"); // Get the champion image element
    championImage.src = ""; // Clear the image src
    championImage.style.display = "none"; // Hide the image element
  
    // Clear the guessedChampions array
    guessedChampions.length = 0;
    correctGuesses = 0;
    guessAttempts = 0;
    firstGuessMade = false;
    timerStarted = false; // Reset the timer flag
  
    // Clear the champion name
    const championNameContainer = document.getElementById("champion-name");
    championNameContainer.textContent = "";
    championNameContainer.style.display = "none"; // Hide the champion name element
  
    generateQuestion();
  });
  
  setInterval(() => {
    updateLeaderboard();
  }, 1000);
  
  