import Building from "../classes/Building";
import Upgrade from "../classes/Upgrade";

const buildings = [
  // Generate all buildings here
  new Building(
    "Dev",
    15,
    0.1,
    [
      new Upgrade(
        "Refactor Codebase",
        100,
        "Devs and clicking are twice as efficient",
        1,
      ),
      new Upgrade(
        "Premature Optimization",
        500,
        "Devs and clicking are twice as efficient",
        1,
      ),
      new Upgrade(
        "Write Tests",
        10000,
        "Devs and clicking are twice as efficient",
        10,
      ),
      new Upgrade(
        "Hunt for Bugs",
        100000,
        "Mouse and Devs gain +0.1 cookies for every non-cursor building owned",
        25,
        0.1,
      ),
      new Upgrade(
        "Replace Tabs with Spaces",
        10000000,
        "Mouse and Devs gain +0.5 cookies for every non-cursor building owned",
        50,
        0.5,
      ),
      new Upgrade(
        "Replace Spaces with Tabs",
        100000000,
        "Mouse and Devs gain +5 cookies for every non-cursor building owned",
        100,
        5,
      ),
      new Upgrade(
        "Friday Afternoon Deploys",
        1000000000,
        "Mouse and Devs gain +50 for every non-cursor building owned",
        150,
        50,
      ),
      new Upgrade(
        "Test in Production",
        10000000000,
        "Mouse and Devs gain +500 cookies for each non-cursor building owned",
        200,
        500,
      ),
      new Upgrade(
        "Migrate Database",
        10000000000000,
        "Mouse and Devs gain +5.000K for every non-cursor building owned",
        250,
        5000,
      ),
      new Upgrade(
        "Free Coffe",
        10000000000000000,
        "Mouse and Devs gain +50.000K for every non-cursor building owned",
        300,
        50000,
      ),
      new Upgrade(
        "While True",
        10000000000000000000,
        "Mouse and Devs gain +500.000K for every non-cursor building owned",
        350,
        500000,
      ),
      new Upgrade(
        "Print Hello World",
        10000000000000000000000,
        "Mouse and Devs gain +5.000M for each non-cursor building owned",
        400,
        5000000,
      ),
    ],
    false,
    "dev.png",
  ),
  new Building(
    "Wojak",
    100,
    1,
    [
      new Upgrade(
        "Join r/cryptocurrency",
        1000,
        "Wojaks are twice as efficient",
        1,
      ),
      new Upgrade(
        "More efficient Spatchelas",
        5000,
        "Wojaks are twice as efficient",
        5,
      ),
      new Upgrade(
        "Buy High, Sell Low",
        50000,
        "Wojaks are twice as efficient",
        25,
      ),
      new Upgrade(
        "McDonalds Manager training",
        5000000,
        "Wojaks are twice as efficient",
        50,
      ),
      new Upgrade(
        "Promoted to Junior Supivisor",
        500000000,
        "Wojaks are twice as efficient",
        100,
      ),
      new Upgrade(
        "Turn on Crypto Price Notifications",
        50000000000,
        "Wojaks are twice as efficient",
        150,
      ),
      new Upgrade(
        "Free Chicken Tendies",
        50000000000000,
        "Wojaks are twice as efficient",
        200,
      ),
      new Upgrade(
        "Follow Elon Musk on X",
        50000000000000000,
        "Wojaks are twice as efficient",
        250,
      ),
      new Upgrade(
        "Hodl More Doge",
        50000000000000000000,
        "Wojaks are twice as efficient",
        300,
      ),
      new Upgrade(
        "Diamond Hands",
        50000000000000000000000,
        "Wojaks are twice as efficient",
        350,
      ),
      new Upgrade(
        "I Know That Feel Bro",
        500000000000000000000000000,
        "Wojaks are twice as efficient",
        400,
      ),
    ],
    true,
    "wojak.png",
  ),
  new Building(
    "Trollfarm",
    1100,
    8,
    [
      new Upgrade(
        "Sock Puppets",
        11000,
        "Trollfarms are twice as efficient",
        1,
      ),
      new Upgrade(
        "Indian Callcenter",
        55000,
        "Trollfarms are twice as efficient",
        5,
      ),
      new Upgrade(
        "Post Memes",
        550000,
        "Trollfarms are twice as efficient",
        25,
      ),
      new Upgrade(
        "Lurk on Reddit",
        55000000,
        "Trollfarms are twice as efficient",
        50,
      ),
      new Upgrade(
        "Retweet CZ",
        5500000000,
        "Trollfarms are twice as efficient",
        100,
      ),
      new Upgrade(
        "YouTube Influencer",
        550000000000,
        "Trollfarms are twice as efficient",
        150,
      ),
      new Upgrade(
        "Automated Shitposting",
        550000000000000,
        "Trollfarms are twice as efficient",
        200,
      ),
      new Upgrade(
        "4Chan Street Cred",
        550000000000000000,
        "Trollfarms are twice as efficient",
        250,
      ),
      new Upgrade(
        "Facebook Bans",
        550000000000000000000,
        "Trollfarms are twice as efficient",
        300,
      ),
      new Upgrade(
        "Rick Roll Advertisements",
        550000000000000000000000,
        "Trollfarms are twice as efficient",
        350,
      ),
      new Upgrade(
        "Phishing Advertisements",
        5500000000000000000000000000,
        "Trollfarms are twice as efficient",
        400,
      ),
    ],
    true,
    "troll.png",
  ),
  new Building(
    "ASIC",
    12000,
    47,
    [
      new Upgrade(
        "Cheap Electricity",
        120000,
        "ASICs are twice as efficient",
        1,
      ),
      new Upgrade(
        "Hydroelectric Dam",
        600000,
        "ASICs are twice as efficient",
        5,
      ),
      new Upgrade("Water Cooling", 6000000, "ASICs are twice as efficient", 25),
      new Upgrade(
        "Ultra Cheap Electricity",
        600000000,
        "ASICs are twice as efficient",
        50,
      ),
      new Upgrade(
        "Nuclear Power Plant",
        60000000000,
        "ASICs are twice as efficient",
        100,
      ),
      new Upgrade(
        "Liquid Nitrogen Cooling",
        6000000000000,
        "ASICs are twice as efficient",
        150,
      ),
      new Upgrade(
        "Double Hashing Speed",
        6000000000000000,
        "ASICs are twice as efficient",
        200,
      ),
      new Upgrade(
        "Fission Reactor",
        6000000000000000000,
        "ASICs are twice as efficient",
        250,
      ),
      new Upgrade(
        "Arctic Warehouse",
        6000000000000000000000,
        "ASICs are twice as efficient",
        300,
      ),
      new Upgrade(
        "Moonbase Warehouse",
        6000000000000000000000000,
        "ASICs are twice as efficient",
        350,
      ),
      new Upgrade(
        "Dyson Sphere",
        60000000000000000000000000000,
        "ASICs are twice as efficient",
        400,
      ),
    ],
    true,
    "asic.png",
  ),
  new Building(
    "Okanemon",
    130000,
    260,
    [
      new Upgrade(
        "Extra Cuteness",
        1300000,
        "Okanemon are twice as efficient",
        1,
      ),
      new Upgrade("Shinier Fur", 6500000, "Okanemon are twice as efficient", 5),
      new Upgrade(
        "Money Magnetism",
        65000000,
        "Okanemon are twice as efficient",
        25,
      ),
      new Upgrade(
        "Extra Hungry",
        6500000000,
        "Okanemon are twice as efficient",
        50,
      ),
      new Upgrade(
        "Fluffyness Improvements",
        650000000000,
        "Okanemon are twice as efficient",
        100,
      ),
      new Upgrade(
        "Cheeky Smiles",
        65000000000000,
        "Okanemon are twice as efficient",
        150,
      ),
      new Upgrade(
        "Toy Productline",
        65000000000000000,
        "Okanemon are twice as efficient",
        200,
      ),
      new Upgrade(
        "Television Series",
        65000000000000000000,
        "Okanemon are twice as efficient",
        250,
      ),
      new Upgrade(
        "Feature Length Movie",
        65000000000000000000000,
        "Okanemon are twice as efficient",
        300,
      ),
      new Upgrade(
        "Knight-hood",
        65000000000000000000000000,
        "Okanemon are twice as efficient",
        350,
      ),
      new Upgrade(
        "Guiness World Record",
        650000000000000000000000000000,
        "Okanemon are twice as efficient",
        400,
      ),
    ],
    true,
    "okanemon.png",
  ),
  new Building(
    "Coaster",
    1400000,
    1400,
    [
      new Upgrade(
        "Banked Turns",
        14000000,
        "Coasters are twice as efficient",
        1,
      ),
      new Upgrade("Lift Hills", 70000000, "Coasters are twice as efficient", 5),
      new Upgrade(
        "Hammerhead Turn",
        700000000,
        "Coasters are twice as efficient",
        25,
      ),
      new Upgrade(
        "Double Dip",
        70000000000,
        "Coasters are twice as efficient",
        50,
      ),
      new Upgrade(
        "Inverted Loop",
        7000000000000,
        "Coasters are twice as efficient",
        100,
      ),
      new Upgrade(
        "Banana Roll",
        700000000000000,
        "Coasters are twice as efficient",
        150,
      ),
      new Upgrade(
        "Corkscrew",
        700000000000000000,
        "Coasters are twice as efficient",
        200,
      ),
      new Upgrade(
        "Demonic Knot",
        700000000000000000000,
        "Coasters are twice as efficient",
        250,
      ),
      new Upgrade(
        "In-line Twist",
        700000000000000000000,
        "Coasters are twice as efficient",
        300,
      ),
      new Upgrade(
        "Pretzel loop",
        700000000000000000000000,
        "Coasters are twice as efficient",
        350,
      ),
      new Upgrade(
        "Zero-G Roll",
        7000000000000000000000000000,
        "Coasters are twice as efficient",
        400,
      ),
    ],
    true,
    "coaster.png",
  ),
  new Building(
    "Printer",
    20000000,
    7800,
    [
      new Upgrade("Go Brrr", 200000000, "Printers are twice as efficient", 1),
      new Upgrade(
        "Go Brrrrrr",
        1000000000,
        "Printers are twice as efficient",
        5,
      ),
      new Upgrade(
        "Go Brrrrrrrrr",
        10000000000,
        "Printers are twice as efficient",
        25,
      ),
      new Upgrade(
        "Go Brrrrrrrrrrrr",
        1000000000000,
        "Printers are twice as efficient",
        50,
      ),
      new Upgrade(
        "Go Brrr BRRRR",
        100000000000000,
        "Printers are twice as efficient",
        100,
      ),
      new Upgrade(
        "Go Brrr BRRRR Brrrr",
        10000000000000000,
        "Printers are twice as efficient",
        150,
      ),
      new Upgrade(
        "Go Brrr BRRR Brrr BRRR",
        10000000000000000000,
        "Printers are twice as efficient",
        200,
      ),
      new Upgrade(
        "Go Brrr BRRR Brrr BRRR Brrr",
        10000000000000000000000,
        "Printers are twice as efficient",
        250,
      ),
      new Upgrade(
        "Go Brrr BRRR Brrr BRRR Brrr BRRR",
        10000000000000000000000000,
        "Printers are twice as efficient",
        300,
      ),
      new Upgrade(
        "Hyper Inflation",
        10000000000000000000000000000,
        "Printers are twice as efficient",
        350,
      ),
      new Upgrade(
        "Super Duper Hyper Inflation",
        100000000000000000000000000000000,
        "Printers are twice as efficient",
        400,
      ),
    ],
    true,
    "printer.png",
  ),
  new Building(
    "Pepe",
    330000000,
    44000,
    [
      new Upgrade(
        "Nakamoto Pepe",
        3300000000,
        "Pepes are twice as efficient",
        1,
      ),
      new Upgrade(
        "Modern Pepe",
        16500000000,
        "Pepes are twice as efficient",
        5,
      ),
      new Upgrade(
        "My Little PEPE",
        165000000000,
        "Pepes are twice as efficient",
        25,
      ),
      new Upgrade(
        "JesusPepe",
        16500000000000,
        "Pepes are twice as efficient",
        50,
      ),
      new Upgrade(
        "OnlyOnePepe",
        1650000000000000,
        "Pepes are twice as efficient",
        100,
      ),
      new Upgrade(
        "Lord Kek, Ruler of All Pepes",
        165000000000000000,
        "Pepes are twice as efficient",
        150,
      ),
      new Upgrade(
        "Japanese Watercolor Pepe",
        165000000000000000000,
        "Pepes are twice as efficient",
        200,
      ),
      new Upgrade(
        "Rabbit trick",
        165000000000000000000000,
        "Pepes are twice as efficient",
        250,
      ),
      new Upgrade(
        "Homer Pepe",
        165000000000000000000000000,
        "Pepes are twice as efficient",
        300,
      ),
      new Upgrade(
        "Rare Pepes",
        165000000000000000000000000000,
        "Pepes are twice as efficient",
        350,
      ),
      new Upgrade(
        "Ultra Rare Pepe",
        1650000000000000000000000000000000,
        "Pepes are twices as efficient",
        400,
      ),
    ],
    true,
    "pepe.png",
  ),
  new Building(
    "Hype man",
    5100000000,
    260000,
    [
      new Upgrade(
        "Hey hey HEYYYYY",
        51000000000,
        "Hype men are twice as efficient",
        1,
      ),
      new Upgrade(
        "WASAWASAWASAuuuppp",
        255000000000,
        "Hype men are twice as efficient",
        5,
      ),
      new Upgrade(
        "The world is not anymore the way it used to be",
        2550000000000,
        "Hype men are twice as efficient",
        25,
      ),
      new Upgrade(
        "MMM.. MMM.. NO NO NO",
        255000000000000,
        "Hype men are twice as efficient",
        50,
      ),
      new Upgrade(
        "I SEE YOU!!",
        25500000000000000,
        "Hype men are twice as efficient",
        100,
      ),
      new Upgrade(
        "We are coming in waves",
        2550000000000000000,
        "Hype men are twice as efficient",
        150,
      ),
      new Upgrade(
        "Going all over the world",
        2550000000000000000000,
        "Hype men are twice as efficient",
        200,
      ),
      new Upgrade(
        "One hundred and forty thousand dollars",
        2550000000000000000000000,
        "Hype men are twice as efficient",
        250,
      ),
      new Upgrade(
        "Whoawhoawhoa Wassup",
        2550000000000000000000000000,
        "Hype men are twice as efficient",
        300,
      ),
      new Upgrade(
        "WHAT?!",
        2550000000000000000000000000000,
        "Hype men are twice as efficient",
        350,
      ),
      new Upgrade(
        "Bitconneeeeeeect",
        25500000000000000000000000000000000,
        "Hype men are twice as efficient",
        400,
      ),
    ],
    true,
    "carlos.png",
  ),
  new Building(
    "Rocket",
    75000000000,
    1500000,
    [
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
    ],
    true,
    "rocket.png",
  ),
  new Building(
    "Lazer eyes",
    1000000000000,
    10000000,
    [
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
    ],
    true,
    "lazereyes.png",
  ),
  new Building(
    "Chad",
    14000000000000,
    65000000,
    [
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
    ],
    true,
    "chad.png",
  ),
  new Building(
    "Elon Tweet",
    170000000000000,
    430000000,
    [
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
    ],
    true,
    "tweet.png",
  ),
  new Building(
    "Stadium",
    2100000000000000,
    2900000000,
    [
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
    ],
    true,
    "stadium.png",
  ),
  new Building(
    "Bogdanoff",
    26000000000000000,
    21000000000,
    [
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
    ],
    true,
    "bogdanoff.png",
  ),
  new Building(
    "AI Bot",
    310000000000000000,
    150000000000,
    [
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
    ],
    true,
    "aibot.png",
  ),
  new Building(
    "Bitcoin Jesus",
    71000000000000000000,
    1100000000000,
    [
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
    ],
    true,
    "jesus.png",
  ),
];

export default buildings;
