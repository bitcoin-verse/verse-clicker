import Building from "./classes/Building";
import Player from "./classes/Player";
import Upgrade from "./classes/Upgrade";
import { magic, premagic } from "./helpers/base64";

const game = {
  settings: {
    frameRate: 30,
    recalculateCPS: true,
    key: "cookieclicker",
  },
  buildings: [
    // Generate all buildings here
    new Building(
      "Cursor",
      15,
      0.1,
      [
        new Upgrade(
          "Reinforced Index Finger",
          100,
          "Cursors and clicking are twice as efficient",
          1,
        ),
        new Upgrade(
          "Carpal tunnel prevention cream",
          500,
          "Cursors and clicking are twice as efficient",
          1,
        ),
        new Upgrade(
          "Ambidextrous",
          10000,
          "Cursors and clicking are twice as efficient",
          10,
        ),
        new Upgrade(
          "Thousand Fingers",
          100000,
          "Mouse and cursors gain +0.1 cookies for every non-cursor building owned",
          25,
          0.1,
        ),
        new Upgrade(
          "Million Fingers",
          10000000,
          "Mouse and cursors gain +0.5 cookies for every non-cursor building owned",
          50,
          0.5,
        ),
        new Upgrade(
          "Billion Fingers",
          100000000,
          "Mouse and cursors gain +5 cookies for every non-cursor building owned",
          100,
          5,
        ),
        new Upgrade(
          "Trillion Fingers",
          1000000000,
          "Mouse and cursors gain +50 for every non-cursor building owned",
          150,
          50,
        ),
        new Upgrade(
          "Quadrillion Fingers",
          10000000000,
          "Mouse and cursors gain +500 cookies for each non-cursor building owned",
          200,
          500,
        ),
        new Upgrade(
          "Quintillion Fingers",
          10000000000000,
          "Mouse and cursors gain +5.000K for every non-cursor building owned",
          250,
          5000,
        ),
        new Upgrade(
          "Sextillion Fingers",
          10000000000000000,
          " Mouse and cursors gain +50.000K for every non-cursor building owned",
          300,
          50000,
        ),
        new Upgrade(
          "Septillion Fingers",
          10000000000000000000,
          "Mouse and cursors gain +500.000K for every non-cursor building owned",
          350,
          500000,
        ),
        new Upgrade(
          "Octillion Fingers",
          10000000000000000000000,
          "Mouse and cursors gain +5.000M for each non-cursor building owned",
          400,
          5000000,
        ),
      ],
      false,
    ),
    new Building("Grandma", 100, 1, [
      new Upgrade(
        "Forwards from grandma",
        1000,
        "Grandmas are twice as efficient",
        1,
      ),
      new Upgrade(
        "Steel-plated rolling pins",
        5000,
        "Grandmas are twice as efficient",
        5,
      ),
      new Upgrade(
        "Lubricated dentures",
        50000,
        "Grandmas are twice as efficient",
        25,
      ),
      new Upgrade(
        "Prune juice",
        5000000,
        "Grandmas are twice as efficient",
        50,
      ),
      new Upgrade(
        "Double-thick glasses",
        500000000,
        "Grandmas are twice as efficient",
        100,
      ),
      new Upgrade(
        "Aging agents",
        50000000000,
        "Grandmas are twice as efficient",
        150,
      ),
      new Upgrade(
        "Xtreme walkers",
        50000000000000,
        "Grandmas are twice as efficient",
        200,
      ),
      new Upgrade(
        "The Unbridling",
        50000000000000000,
        "Grandmas are twice as efficient",
        250,
      ),
      new Upgrade(
        "Reverse dementia",
        50000000000000000000,
        "Grandmas are twice as efficient",
        300,
      ),
      new Upgrade(
        "Timeproof hair dyes",
        50000000000000000000000,
        "Grandmas are twice as efficient",
        350,
      ),
      new Upgrade(
        "Good manners",
        500000000000000000000000000,
        "Grandmas are twice as efficient",
        400,
      ),
    ]),
    new Building("Farm", 1100, 8, [
      new Upgrade("Cheap hoes", 11000, "Farms are twice as efficient", 1),
      new Upgrade("Fertilizer", 55000, "Farms are twice as efficient", 5),
      new Upgrade("Biscuit Trees", 550000, "Farms are twice as efficient", 25),
      new Upgrade(
        "Genetically-modified Biscuits",
        55000000,
        "Farms are twice as efficient",
        50,
      ),
      new Upgrade(
        "Gingerbread scarecrows",
        5500000000,
        "Farms are twice as efficient",
        100,
      ),
      new Upgrade(
        "Pulsar sprinklers",
        550000000000,
        "Farms are twice as efficient",
        150,
      ),
      new Upgrade(
        "Fudge fungus",
        550000000000000,
        "Farms are twice as efficient",
        200,
      ),
      new Upgrade(
        "Wheat triffids",
        550000000000000000,
        "Farms are twice as efficient",
        250,
      ),
      new Upgrade(
        "Humane pesticides",
        550000000000000000000,
        "Farms are twice as efficient",
        300,
      ),
      new Upgrade(
        "Barnstars",
        550000000000000000000000,
        "Ah, yes. These help quite a bit. Somehow.",
        350,
      ),
      new Upgrade(
        "Lindworms",
        5500000000000000000000000000,
        "You have to import these from far up north, but they really help areate the soil",
        400,
      ),
    ]),
    new Building("Mine", 12000, 47, [
      new Upgrade("Sugar gas", 120000, "Mines are twice as efficient", 1),
      new Upgrade("Megadrill", 600000, "Mines are twice as efficient", 5),
      new Upgrade("Ultradrill", 6000000, "Mines are twice as efficient", 25),
      new Upgrade("Ultimadrill", 600000000, "Mines are twice as efficient", 50),
      new Upgrade(
        "H-bomb Mining",
        60000000000,
        "Mines are twice as efficient",
        100,
      ),
      new Upgrade(
        "Coreforge",
        6000000000000,
        "Mines are twice as efficient",
        150,
      ),
      new Upgrade(
        "Planetsplitters",
        6000000000000000,
        "Mines are twice as efficient",
        200,
      ),
      new Upgrade(
        "Canola oil wells",
        6000000000000000000,
        "Mines are twice as efficient",
        250,
      ),
      new Upgrade(
        "Mole People",
        6000000000000000000000,
        "Mines are twice as efficient",
        300,
      ),
      new Upgrade(
        "Mine canaries",
        6000000000000000000000000,
        "Mines are twice as efficient",
        350,
      ),
      new Upgrade(
        "Bore again",
        60000000000000000000000000000,
        "Mines are twice as efficient",
        400,
      ),
    ]),
    new Building("Factory", 130000, 260, [
      new Upgrade(
        "Sturdier conveyor belts",
        1300000,
        "Factories are twice as efficient",
        1,
      ),
      new Upgrade(
        "Child labor",
        6500000,
        "Factories are twice as efficient",
        5,
      ),
      new Upgrade(
        "Sweatshop",
        65000000,
        "Factories are twice as efficient",
        25,
      ),
      new Upgrade(
        "Radium reactors",
        6500000000,
        "Factories are twice as efficient",
        50,
      ),
      new Upgrade(
        "Recombobulators",
        650000000000,
        "Factories are twice as efficient",
        100,
      ),
      new Upgrade(
        "Deep-bake process",
        65000000000000,
        "Factories are twice as efficient",
        150,
      ),
      new Upgrade(
        "Cyborg workforce",
        65000000000000000,
        "Factories are twice as efficient",
        200,
      ),
      new Upgrade(
        "78-hour days",
        65000000000000000000,
        "Factories are twice as efficient",
        250,
      ),
      new Upgrade(
        "Machine learning",
        65000000000000000000000,
        "Factories are twice as efficient",
        300,
      ),
      new Upgrade(
        "Brownie point system",
        65000000000000000000000000,
        "Factories are twice as efficient",
        350,
      ),
      new Upgrade(
        '"Volunteer" interns',
        650000000000000000000000000000,
        "Factories are twice as efficient",
        400,
      ),
    ]),
    new Building("Bank", 1400000, 1400, [
      new Upgrade(
        "Taller Tellers",
        14000000,
        "Banks are twice as efficient",
        1,
      ),
      new Upgrade(
        "Scissor-resistant Credit Cards",
        70000000,
        "Banks are twice as efficient",
        5,
      ),
      new Upgrade(
        "Acid-proof vaults",
        700000000,
        "Banks are twice as efficient",
        25,
      ),
      new Upgrade(
        "Chocolate coins",
        70000000000,
        "Banks are twice as efficient",
        50,
      ),
      new Upgrade(
        "Exponential interest rates",
        7000000000000,
        "Banks are twice as efficient",
        100,
      ),
      new Upgrade(
        "Financial zen",
        700000000000000,
        "Banks are twice as efficient",
        150,
      ),
      new Upgrade(
        "Way of the wallet",
        700000000000000000,
        "Banks are twice as efficient",
        200,
      ),
      new Upgrade(
        "The stuff rationale",
        700000000000000000000,
        "Banks are twice as efficient",
        250,
      ),
      new Upgrade(
        "Edible money",
        700000000000000000000,
        "Banks are twice as efficient",
        300,
      ),
      new Upgrade(
        "Grand supercycle",
        700000000000000000000000,
        "Banks are twice as efficient",
        350,
      ),
      new Upgrade(
        "Rules of acquisition",
        7000000000000000000000000000,
        "Banks are twice as efficient",
        400,
      ),
    ]),
    new Building("Temple", 20000000, 7800, [
      new Upgrade(
        "Golden idols",
        200000000,
        "Temples are twice as efficient",
        1,
      ),
      new Upgrade(
        "Sacrifices",
        1000000000,
        "Temples are twice as efficient",
        5,
      ),
      new Upgrade(
        "Delicious blessing",
        10000000000,
        "Temples are twice as efficient",
        25,
      ),
      new Upgrade(
        "Sun festival",
        1000000000000,
        "Temples are twice as efficient",
        50,
      ),
      new Upgrade(
        "Enlarged pantheon",
        100000000000000,
        "Temples are twice as efficient",
        100,
      ),
      new Upgrade(
        "Great Baker in the sky",
        10000000000000000,
        "Temples are twice as efficient",
        150,
      ),
      new Upgrade(
        "Creation myth",
        10000000000000000000,
        "Temples are twice as efficient",
        200,
      ),
      new Upgrade(
        "Theocracy",
        10000000000000000000000,
        "Temples are twice as efficient",
        250,
      ),
      new Upgrade(
        "Sick rap prayers",
        10000000000000000000000000,
        "Temples are twice as efficient",
        300,
      ),
      new Upgrade(
        "Psalm-reading",
        10000000000000000000000000000,
        "Temples are twice as efficient",
        350,
      ),
      new Upgrade(
        "War of the gods",
        100000000000000000000000000000000,
        "Temples are twice as efficient",
        400,
      ),
    ]),
    new Building("Wizard Tower", 330000000, 44000, [
      new Upgrade(
        "Pointier hats",
        3300000000,
        "Wizard towers are twice as efficient",
        1,
      ),
      new Upgrade(
        "Beardlier beards",
        16500000000,
        "Wizard towers are twice as efficient",
        5,
      ),
      new Upgrade(
        "Ancient grimoires",
        165000000000,
        "Wizard towers are twice as efficient",
        25,
      ),
      new Upgrade(
        "Kitchen curses",
        16500000000000,
        "Wizard towers are twice as efficient",
        50,
      ),
      new Upgrade(
        "School of sorcery",
        1650000000000000,
        "Wizard towers are twice as efficient",
        100,
      ),
      new Upgrade(
        "Dark formulas",
        165000000000000000,
        "Wizard towers are twice as efficient",
        150,
      ),
      new Upgrade(
        "Cookiemancy",
        165000000000000000000,
        "Wizard towers are twice as efficient",
        200,
      ),
      new Upgrade(
        "Rabbit trick",
        165000000000000000000000,
        "Wizard towers are twice as efficient",
        250,
      ),
      new Upgrade(
        "Deluxe tailored wands",
        165000000000000000000000000,
        "Wizard towers are twice as efficient",
        300,
      ),
      new Upgrade(
        "Immobile spellcasting",
        165000000000000000000000000000,
        "Wizard towers are twice as efficient",
        350,
      ),
      new Upgrade(
        "Electricity",
        1650000000000000000000000000000000,
        "Wizard towers are twices as efficient",
        400,
      ),
    ]),
    new Building("Shipment", 5100000000, 260000, [
      new Upgrade(
        "Vanilla nebulae",
        51000000000,
        "Shipments are twice as efficient",
        1,
      ),
      new Upgrade(
        "Wormholes",
        255000000000,
        "Shipments are twice as efficient",
        5,
      ),
      new Upgrade(
        "Frequent flyer",
        2550000000000,
        "Shipments are twice as efficient",
        25,
      ),
      new Upgrade(
        "Warp drive",
        255000000000000,
        "Shipments are twice as efficient",
        50,
      ),
      new Upgrade(
        "Chocolate monoliths",
        25500000000000000,
        "Shipments are twice as efficient",
        100,
      ),
      new Upgrade(
        "Generation ship",
        2550000000000000000,
        "Shipments are twice as efficient",
        150,
      ),
      new Upgrade(
        "Dyson sphere",
        2550000000000000000000,
        "Shipments are twice as efficient",
        200,
      ),
      new Upgrade(
        "The final frontier",
        2550000000000000000000000,
        "Shipments are twice as efficient",
        250,
      ),
      new Upgrade(
        "Autopilot",
        2550000000000000000000000000,
        "Shipments are twice as efficient",
        300,
      ),
      new Upgrade(
        "Restaurants at the end of the universe",
        2550000000000000000000000000000,
        "Shipments are twice as efficient",
        350,
      ),
      new Upgrade(
        "Universal alphabet",
        25500000000000000000000000000000000,
        "Shipments are twice as efficient",
        400,
      ),
    ]),
    new Building("Alchemy Lab", 75000000000, 1500000, [
      new Upgrade(
        "Antimony",
        750000000000,
        "Alchemy labs are twice as efficient",
        1,
      ),
      new Upgrade(
        "Essence of dough",
        3750000000000,
        "Alchemy labs are twice as efficient",
        5,
      ),
      new Upgrade(
        "True chocolate",
        37500000000000,
        "Alchemy labs are twice as efficient",
        25,
      ),
      new Upgrade(
        "Ambrosia",
        3750000000000000,
        "Alchemy labs are twice as efficient",
        50,
      ),
      new Upgrade(
        "Aqua crustulae",
        375000000000000000,
        "Alchemy labs are twice as efficient",
        100,
      ),
      new Upgrade(
        "Origin crucible",
        37500000000000000000,
        "Alchemy labs are twice as efficient",
        150,
      ),
      new Upgrade(
        "Theory of atomic fluidity",
        37500000000000000000000,
        "Alchemy labs are twice as efficient",
        200,
      ),
      new Upgrade(
        "Beige goo",
        37500000000000000000000000,
        "Alchemy labs are twice as efficient",
        250,
      ),
      new Upgrade(
        "The advent of chemistry",
        37500000000000000000000000000,
        "Alchemy labs are twice as efficient",
        300,
      ),
      new Upgrade(
        "On second thought",
        37500000000000000000000000000000,
        "Alchemy labs are twice as efficient",
        350,
      ),
      new Upgrade(
        "Public betterment",
        375000000000000000000000000000000000,
        "Alchemy labs are twice as efficient",
        400,
      ),
    ]),
    new Building("Portal", 1000000000000, 10000000, [
      new Upgrade(
        "Ancient tablet",
        10000000000000,
        "Portals are twice as efficient",
        1,
      ),
      new Upgrade(
        "Insane oatling workers",
        50000000000000,
        "Portals are twice as efficient",
        5,
      ),
      new Upgrade(
        "Soul bond",
        500000000000000,
        "Portals are twice as efficient",
        25,
      ),
      new Upgrade(
        "Sanity dance",
        50000000000000000,
        "Portals are twice as efficient",
        50,
      ),
      new Upgrade(
        "Brane transplant",
        5000000000000000000,
        "Portals are twice as efficient",
        100,
      ),
      new Upgrade(
        "Deity-sized portals",
        500000000000000000000,
        "Portals are twice as efficient",
        150,
      ),
      new Upgrade(
        "End of times back-up plan",
        500000000000000000000000,
        "Portals are twice as efficient",
        200,
      ),
      new Upgrade(
        "Maddening chants",
        500000000000000000000000000,
        "Portals are twice as efficient",
        250,
      ),
      new Upgrade(
        "The real world",
        500000000000000000000000000000,
        "Portals are twice as efficient",
        300,
      ),
      new Upgrade(
        "Dimensional garbage gulper",
        500000000000000000000000000000000,
        "Portals are twice as efficient",
        350,
      ),
      new Upgrade(
        "Embedded microportals",
        5000000000000000000000000000000000000,
        "Portals are twice as efficient",
        400,
      ),
    ]),
    new Building("Time Machine", 14000000000000, 65000000, [
      new Upgrade(
        "Flux capacitors",
        140000000000000,
        "Time machines are twice as efficient",
        1,
      ),
      new Upgrade(
        "Time paradox resolver",
        700000000000000,
        "Time machines are twice as efficient",
        5,
      ),
      new Upgrade(
        "Quantum conundrum",
        7000000000000000,
        "Time machines are twice as efficient",
        25,
      ),
      new Upgrade(
        "Causality enforcer",
        700000000000000000,
        "Time machines are twice as efficient",
        50,
      ),
      new Upgrade(
        "Yestermorrow comparators",
        70000000000000000000,
        "Time machines are twice as efficient",
        100,
      ),
      new Upgrade(
        "Far future enactment",
        7000000000000000000000,
        "Time machines are twice as efficient",
        150,
      ),
      new Upgrade(
        "Great loop hypothesis",
        7000000000000000000000000,
        "Time machines are twice as efficient",
        200,
      ),
      new Upgrade(
        "Cookietopian moments of maybe",
        7000000000000000000000000000,
        "Time machines are twice as efficient",
        250,
      ),
      new Upgrade(
        "Second seconds",
        7000000000000000000000000000000,
        "Time machines are twice as efficient",
        300,
      ),
      new Upgrade(
        "Additional clock hands",
        7000000000000000000000000000000000,
        "Time machines are twice as efficient",
        350,
      ),
      new Upgrade(
        "Nostalgia",
        70000000000000000000000000000000000000,
        "Time machines are twice as efficient",
        400,
      ),
    ]),
    new Building("Antimatter Condenser", 170000000000000, 430000000, [
      new Upgrade(
        "Sugar bosons",
        1700000000000000,
        "Antimatter condensers are twice as efficient",
        1,
      ),
      new Upgrade(
        "String theory",
        8500000000000000,
        "Antimatter condensers are twice as efficient",
        5,
      ),
      new Upgrade(
        "Large macaron collider",
        85000000000000000,
        "Antimatter condensers are twice as efficient",
        25,
      ),
      new Upgrade(
        "Big bang bake",
        8500000000000000000,
        "Antimatter condensers are twice as efficient",
        50,
      ),
      new Upgrade(
        "Reverse cyclotrons",
        850000000000000000000,
        "Antimatter condensers are twice as efficient",
        100,
      ),
      new Upgrade(
        "Nanocosmics",
        85000000000000000000000,
        "Antimatter condensers are twice as efficient",
        150,
      ),
      new Upgrade(
        "The Pulse",
        85000000000000000000000000,
        "Antimatter condensers are twice as efficient",
        200,
      ),
      new Upgrade(
        "Some other super-tiny fundamental particle? Probably?",
        85000000000000000000000000000,
        "Antimatter condensers are twice as efficient",
        250,
      ),
      new Upgrade(
        "Quantum comb",
        85000000000000000000000000000000,
        "Antimatter condensers are twice as efficient",
        300,
      ),
      new Upgrade(
        "Baking Nobel prize",
        85000000000000000000000000000000000,
        "Antimatter condensers are twice as efficient",
        350,
      ),
      new Upgrade(
        "The definite molecule",
        850000000000000000000000000000000000000,
        "Antimatter condensers are twice as efficient",
        400,
      ),
    ]),
    new Building("Prism", 2100000000000000, 2900000000, [
      new Upgrade(
        "Gem polish",
        21000000000000000,
        "Prims are twice as efficient",
        1,
      ),
      new Upgrade(
        "9th color",
        105000000000000000,
        "Prims are twice as efficient",
        5,
      ),
      new Upgrade(
        "Chocolate light",
        1050000000000000000,
        "Prims are twice as efficient",
        25,
      ),
      new Upgrade(
        "Grainbow",
        105000000000000000000,
        "Prims are twice as efficient",
        50,
      ),
      new Upgrade(
        "Pure cosmic light",
        10500000000000000000000,
        "Prims are twice as efficient",
        100,
      ),
      new Upgrade(
        "Glow-in-the-dark",
        1050000000000000000000000,
        "Prims are twice as efficient",
        150,
      ),
      new Upgrade(
        "Lux sanctorum",
        1050000000000000000000000000,
        "Prims are twice as efficient",
        200,
      ),
      new Upgrade(
        "Reverse shadows",
        1050000000000000000000000000000,
        "Prims are twice as efficient",
        250,
      ),
      new Upgrade(
        "Crystal mirrors",
        1050000000000000000000000000000000,
        "Prims are twice as efficient",
        300,
      ),
      new Upgrade(
        "Reverse theory of light",
        1050000000000000000000000000000000000,
        "Prisms are twice as efficient",
        350,
      ),
      new Upgrade(
        "Light capture measures",
        10500000000000000000000000000000000000000,
        "Prisms are twice as efficient",
        400,
      ),
    ]),
    new Building("Chancemaker", 26000000000000000, 21000000000, [
      new Upgrade(
        "Your lucky cookie",
        260000000000000000,
        "Chancemakers are twice as efficient",
        1,
      ),
      new Upgrade(
        "'All Bets Are Off' magic coin",
        130000000000000000,
        "Chancemakers are twice as efficient",
        5,
      ),
      new Upgrade(
        "Winning lottery ticket",
        13000000000000000000,
        "Chancemakers are twice as efficient",
        25,
      ),
      new Upgrade(
        "Four-leaf clover field",
        130000000000000000000,
        "Chancemakers are twice as efficient",
        50,
      ),
      new Upgrade(
        "A recipe book about books",
        13000000000000000000000,
        "Chancemakers are twice as efficient",
        100,
      ),
      new Upgrade(
        "Leprechaun village",
        13000000000000000000000000,
        "Chancemakers are twice as efficient",
        150,
      ),
      new Upgrade(
        "Improbability drive",
        13000000000000000000000000000,
        "Chancemakers are twice as efficient",
        200,
      ),
      new Upgrade(
        "Antisuperstistronics",
        13000000000000000000000000000000,
        "Chancemakers are twice as efficient",
        250,
      ),
      new Upgrade(
        "Bunnypedes",
        13000000000000000000000000000000000,
        "Chancemakers are twice as efficient",
        300,
      ),
      new Upgrade(
        "Revised probalistics",
        13000000000000000000000000000000000000,
        "Chancemakers are twice as efficient",
        350,
      ),
      new Upgrade(
        "0-sided dice",
        130000000000000000000000000000000000000000,
        "Chancemakers are twice as efficient",
        400,
      ),
    ]),
    new Building("Fractal Engine", 310000000000000000, 150000000000, [
      new Upgrade(
        "Metabakeries",
        3100000000000000000,
        "Fractal engines are twice as efficient",
        1,
      ),
      new Upgrade(
        "Mandelbrown sugar",
        15500000000000000000,
        "Fractal engines are twice as efficient",
        5,
      ),
      new Upgrade(
        "Fractoids",
        155000000000000000000,
        "Fractal engines are twice as efficient",
        25,
      ),
      new Upgrade(
        "Nested universe theory",
        15500000000000000000000,
        "Fractal engines are twice as efficient",
        50,
      ),
      new Upgrade(
        "Menger sponge cake",
        1550000000000000000000000,
        "Fractal engines are twice as efficient",
        100,
      ),
      new Upgrade(
        "One particularly good-humoured cow",
        155000000000000000000000000,
        "Fractal engines are twice as efficient",
        150,
      ),
      new Upgrade(
        "Chocolate ouroboros",
        155000000000000000000000000000,
        "Fractal engines are twice as efficient",
        200,
      ),
      new Upgrade(
        "Nested",
        155000000000000000000000000000000,
        "Fractal engines are twice as efficient",
        250,
      ),
      new Upgrade(
        "Space-filling fibers",
        155000000000000000000000000000000000,
        "Fractal engines are twice as efficient",
        300,
      ),
      new Upgrade(
        "Endless book of prose",
        155000000000000000000000000000000000000,
        "Fractal engines are twice as efficient",
        350,
      ),
      new Upgrade(
        "The set of all sets",
        1550000000000000000000000000000000000000000,
        "Fractal engines are twice as efficient",
        400,
      ),
    ]),
    new Building("Java Console", 71000000000000000000, 1100000000000, [
      new Upgrade(
        "The JavaScript console for dummies",
        710000000000000000000,
        "Java consoles are twice as efficient",
        1,
      ),
      new Upgrade(
        "64bit Arrays",
        3550000000000000000000,
        "Java consoles are twices as efficient",
        5,
      ),
      new Upgrade(
        "Stack overflow",
        35500000000000000000000,
        "Java consoles are twice as efficient",
        25,
      ),
      new Upgrade(
        "Enterprise compiler",
        3550000000000000000000000,
        "Java consoles are twice as efficient",
        50,
      ),
      new Upgrade(
        "Syntactic sugar",
        355000000000000000000000000,
        "Java consoles are twice as efficient",
        100,
      ),
      new Upgrade(
        "A nice cup of coffee",
        35500000000000000000000000000,
        "Java consoles are twice as efficient",
        150,
      ),
      new Upgrade(
        "Just-in-time baking",
        35500000000000000000000000000000,
        "Java consoles are twice as efficient",
        200,
      ),
      new Upgrade(
        "cookies++",
        35500000000000000000000000000000000,
        "Java consoles are twice as efficient",
        250,
      ),
      new Upgrade(
        "Software updates",
        35500000000000000000000000000000000000,
        "Java consoles are twice as efficient",
        300,
      ),
      new Upgrade(
        "Game.Loop",
        35500000000000000000000000000000000000000,
        "Java consoles are twice as efficient",
        350,
      ),
      new Upgrade(
        "eval()",
        355000000000000000000000000000000000000000000,
        "Java consoles are twice as efficient",
        400,
      ),
    ]),
  ],
  utilities: {
    ShortNumbers: [
      "K",
      "M",
      "B",
      "T",
      "Qua",
      "Qui",
      "Sex",
      "Sep",
      "Oct",
      "Non",
      "Dec",
      "Und",
      "Duo",
      "Tre",
      "QuaD",
      "QuiD",
      "SexD",
      "SepD",
      "OctD",
      "NonD",
      "Vig",
    ],
    updateText(className: string, text: string) {
      const elements = document.getElementsByClassName(className);
      for (const i in elements) {
        elements[i].innerHTML = text;
      }
    },
    formatNumber(num: number) {
      let formatted = "";
      if (num >= 1000) {
        for (let i = 0; i < game.utilities.ShortNumbers.length; i++) {
          const divider = Math.pow(10, (i + 1) * 3);
          if (num >= divider) {
            formatted =
              (Math.trunc((num / divider) * 1000) / 1000).toFixed(3) +
              " " +
              game.utilities.ShortNumbers[i];
          }
        }
        return formatted;
      }
      return (Math.trunc(num * 10) / 10).toFixed(1);
    },
    getBuildingByName(name: string): Building | null {
      let correctBuilding = null;
      game.buildings.forEach((building) => {
        if (building.name == name) {
          correctBuilding = building;
          return;
        }
      });
      return correctBuilding;
    },
    getBuildingIndexByName(name: string) {
      for (let i = 0; i < game.buildings.length - 1; i++) {
        const curBuilding = game.buildings[i];
        if (curBuilding.name == name) {
          return i;
        }
      }
    },
    getBuildingCount() {
      let amount = 0;
      game.buildings.forEach((building) => {
        amount += building.amount;
      });
      return amount;
    },
    stringToBool(str: string) {
      switch (str) {
        case "true":
          return true;
        case "false":
          return false;
      }
    },
  },
  saving: {
    export() {
      let saveString = "";
      saveString += `${game.player.cookies}|${game.player.cookieStats.Earned}|${game.player.cookieStats.Spent}|${game.player.cookieStats.Clicked}-`;
      let first = true;
      game.buildings.forEach((building) => {
        if (first) {
          first = false;
          saveString += `${building.amount}|${building.locked}|`;
        } else {
          saveString += `#${building.amount}|${building.locked}|`;
        }
        building.upgrades.forEach((upgrade) => {
          saveString += `${upgrade.owned}:`;
        });
        saveString = saveString.slice(0, -1);
      });
      game.saving.saveToCache(premagic(saveString));
      return premagic(saveString);
    },
    import(saveString: string | boolean) {
      saveString = magic(saveString);
      if (saveString != false) {
        const stringToSave = saveString.split("-");
        game.saving.loadPlayer(stringToSave[0]);
        game.saving.loadBuildings(stringToSave[1]);
        game.settings.recalculateCPS = true;
        game.updateShop(game.currentShop);
      } else {
        alert(
          "Something wasn't quite right there, unfortunately your save could not be loaded.",
        );
      }
    },
    saveToCache(saveString: string) {
      try {
        return window.localStorage.setItem(game.settings.key, saveString);
      } catch {
        console.log("Problem saving to cache");
      }
    },
    getSaveFromCache() {
      try {
        return window.localStorage.getItem(game.settings.key);
      } catch {
        console.log("Problem loading data from cache, probably doesn't exist");
      }
    },
    loadPlayer(playerData: string) {
      const newPlayerData = playerData.split("|");
      try {
        game.player.cookies = parseFloat(newPlayerData[0]);
        game.player.cookieStats.Earned = parseFloat(newPlayerData[1]);
        game.player.cookieStats.Spent = parseFloat(newPlayerData[2]);
        game.player.cookieStats.Clicked = parseFloat(newPlayerData[3]);
      } catch {
        console.log(
          "Something went wrong whilst loading player data, likely from an older version and not to worry.",
        );
      }
    },
    loadBuildings(buildingData: string) {
      const newBuildingData = buildingData.split("#");
      try {
        for (let i = 0; i < game.buildings.length; i++) {
          const savedBuilding = newBuildingData[i];
          const nonUpgrade = savedBuilding.split("|");
          const building = game.buildings[i];
          building.amount = parseFloat(nonUpgrade[0]);
          // building.setCost();
          building.locked = game.utilities.stringToBool(nonUpgrade[1]) || false;
          let j = 0;
          const upgrades = nonUpgrade[2].split(":");
          building.upgrades.forEach((upgrade) => {
            upgrade.owned = game.utilities.stringToBool(upgrades[j]) || false;
            j++;
          });
        }
      } catch {
        console.log(
          "Something went wrong whilst loading building data, likely from an older version and not to worry.",
        );
      }
    },
    wipeSave() {
      if (
        confirm(
          "Are you sure you want to wipe your save? This cannot be reversed!",
        )
      ) {
        game.player.cookies = 0;
        game.player.cookieStats.Earned = 0;
        game.player.cookieStats.Spent = 0;
        game.player.cookieStats.Clicked = 0;
        game.buildings.forEach((building) => {
          if (building.name != "Cursor") {
            building.locked = true;
          }
          building.amount = 0;
          building.effect = 0;
          building.specialCPS = 0;
          // building.setCost();
          for (const i in building.upgrades) {
            building.upgrades[i].owned = false;
          }
        });
        game.constructShop();
        game.updateShop("Cursor");
        game.settings.recalculateCPS = true;
      }
    },
    importing: false,
    openBox(type: string) {
      const container = document.getElementsByClassName(
        "importExportBox",
      )[0] as HTMLDivElement;
      const box = document.getElementById("saveBox") as HTMLInputElement;
      switch (type) {
        case "import":
          this.importing = true;
          container.style.visibility = "visible";
          box.removeAttribute("readonly");
          box.value = "";
          return;
        case "export":
          const saveString = this.export();
          container.style.visibility = "visible";
          box.value = saveString;
          box.setAttribute("readonly", "true");
          return;
      }
    },
    closeBox() {
      (
        document.getElementsByClassName(
          "importExportBox",
        )[0] as HTMLInputElement
      ).style.visibility = "hidden";
      if (this.importing) {
        const box = document.getElementById("saveBox") as HTMLInputElement;
        this.import(box.value);
        box.value = "";
      }
    },
  },
  player: new Player(),
  /* logic() {
    game.updateDisplays();
    // Only recalculate it when needed, saves on some processing power because this can turn out to be quite a lot of maths.
    if (game.settings.recalculateCPS == true) {
      let CPS = 0;
      game.buildings.forEach((building) => {
        CPS += building.getCPS();
      });
      game.settings.recalculateCPS = false;
      game.player.aMPF = CPS / game.settings.frameRate;
      game.updateShop(game.currentShop);
    }
    if (document.hasFocus()) {
      game.player.earnCookie(game.player.aMPF);
      game.saving.export();
      setTimeout(game.logic, 1000 / game.settings.frameRate);
    } else {
      game.player.earnCookie(game.player.aMPF * game.settings.frameRate);
      game.saving.export();
      setTimeout(game.logic, 1000);
    }
  }, */
  updateDisplays() {
    // Create temporary shorthand aliases for ease of use.
    const updateText = game.utilities.updateText;
    const format = game.utilities.formatNumber;
    const player = game.player;
    const stats = player.cookieStats;
    document.title = "Cookie Clicker | " + format(player.cookies);
    updateText("cookieDisplay", format(player.cookies));
    updateText("cpcDisplay", format(player.aMPC));
    updateText("cpsDisplay", format(player.aMPF * game.settings.frameRate));
    updateText("earnedDisplay", format(stats.Earned));
    updateText("spentDisplay", format(stats.Spent));
    updateText("clickedDisplay", format(stats.Clicked));
  },
  constructShop() {
    const buildings = game.buildings;
    // let finalHtml = "";
    buildings.forEach((building) => {
      if (building.locked == false) {
        // finalHtml += building.generateMenuButton();
      }
    });
    // game.utilities.updateText("shopList", finalHtml);
  },
  currentShop: "Cursor",
  updateShop(name: string) {
    game.currentShop = name;
    // let finalHtml = "";
    const building = game.utilities.getBuildingByName(name);
    if (!building) return;
    // finalHtml += building.generateShopHTML();
    // game.utilities.updateText("shop", finalHtml);
  },
  /* buyBuilding(name: string, amount: number) {
    const building = game.utilities.getBuildingByName(name);
    if (!building) return;
    building.buy(amount);
  }, */
  /* buyUpgrade(buildingName: string, upgrade: string) {
    const building = game.utilities.getBuildingByName(buildingName);
    if (!building) return;
    building.buyUpgrade(upgrade);
  }, */
  /* start() {
    // This prevents the user from holding down enter to click the cookie very quickly.
    window.addEventListener("keydown", (e) => {
      if (e.key === "enter" || e.key == "space") {
        e.preventDefault();
        return false;
      }
    });

    // This enables the cookie clicking process.
    (
      document.getElementsByClassName("cookieButton")[0] as HTMLDivElement
    ).onclick = () => {
      game.player.clickCookie();
    };

    const localSave = game.saving.getSaveFromCache();
    if (localSave) {
      game.saving.import(localSave);
    } else {
      console.log("No cache save found");
    }

    game.constructShop();
    game.logic();
  }, */
};

export default game;
