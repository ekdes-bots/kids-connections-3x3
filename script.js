// Launch anchor: Puzzles rotate daily at 7:00 AM ET starting today (Nov 5, 2026)
const START_DATE_UTC = Date.UTC(2026, 10, 5, 12, 0, 0); 
const MAX_MISTAKES = 4;
const COLOR_PALETTE = ['#fbc02d', '#4caf50', '#0288d1'];

// --- COMPLETE PUZZLES DATASET (75 GAMES) ---
const PUZZLES = [
  // --- Games 1 to 25 ---
  {
    id: 1,
    categories: [
      { name: "Astronomy", words: ["MARS", "COMET", "PLUTO"], color: COLOR_PALETTE[0] },
      { name: "Geometry", words: ["CONE", "CUBE", "PRISM"], color: COLOR_PALETTE[1] },
      { name: "Chemistry", words: ["ATOM", "ION", "ACID"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 2,
    categories: [
      { name: "Literature", words: ["MYTH", "FABLE", "EPIC"], color: COLOR_PALETTE[0] },
      { name: "Music Terms", words: ["CHORD", "BEAT", "TEMPO"], color: COLOR_PALETTE[1] },
      { name: "Art Methods", words: ["PAINT", "SKETCH", "CARVE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 3,
    categories: [
      { name: "Weather Systems", words: ["FRONT", "STORM", "GALE"], color: COLOR_PALETTE[0] },
      { name: "Geology", words: ["FAULT", "MAGMA", "DUNE"], color: COLOR_PALETTE[1] },
      { name: "Physics Terms", words: ["FORCE", "MASS", "SPEED"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 4,
    categories: [
      { name: "Coding Terms", words: ["LOOP", "BYTE", "NODE"], color: COLOR_PALETTE[0] },
      { name: "Hardware", words: ["CHIP", "SCREEN", "MOUSE"], color: COLOR_PALETTE[1] },
      { name: "Math Terms", words: ["RATIO", "SLOPE", "MEAN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 5,
    categories: [
      { name: "Greek Gods", words: ["ZEUS", "HERA", "ARES"], color: COLOR_PALETTE[0] },
      { name: "Fantasy Races", words: ["ELF", "ORC", "DWARF"], color: COLOR_PALETTE[1] },
      { name: "Myth Monsters", words: ["HYDRA", "GOBLIN", "SIREN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 6,
    categories: [
      { name: "Anatomy", words: ["BRAIN", "HEART", "LUNGS"], color: COLOR_PALETTE[0] },
      { name: "Senses", words: ["SIGHT", "TASTE", "TOUCH"], color: COLOR_PALETTE[1] },
      { name: "Body Reflexes", words: ["BLINK", "YAWN", "SNEEZE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 7,
    categories: [
      { name: "Landforms", words: ["BASIN", "DELTA", "FJORD"], color: COLOR_PALETTE[0] },
      { name: "Oceans", words: ["PACIFIC", "ARCTIC", "INDIAN"], color: COLOR_PALETTE[1] },
      { name: "Continents", words: ["ASIA", "AFRICA", "EUROPE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 8,
    categories: [
      { name: "Board Games", words: ["CHESS", "CHECKERS", "GO"], color: COLOR_PALETTE[0] },
      { name: "Card Games", words: ["POKER", "BRIDGE", "RUMMY"], color: COLOR_PALETTE[1] },
      { name: "Team Sports", words: ["RUGBY", "TENNIS", "HOCKEY"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 9,
    categories: [
      { name: "Word Prefixes", words: ["MEGA", "MICRO", "HYPER"], color: COLOR_PALETTE[0] },
      { name: "Word Suffixes", words: ["TION", "LESS", "FULL"], color: COLOR_PALETTE[1] },
      { name: "Grammar Parts", words: ["VERB", "NOUN", "CLAUSE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 10,
    categories: [
      { name: "Finance", words: ["COIN", "NOTE", "BOND"], color: COLOR_PALETTE[0] },
      { name: "Banking Terms", words: ["LOAN", "DEBT", "TRUST"], color: COLOR_PALETTE[1] },
      { name: "Trade Terms", words: ["BARTER", "IMPORT", "EXPORT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 11,
    categories: [
      { name: "Photography", words: ["FOCUS", "ZOOM", "FLASH"], color: COLOR_PALETTE[0] },
      { name: "Cinema", words: ["SCENE", "SHOT", "EDIT"], color: COLOR_PALETTE[1] },
      { name: "Theater", words: ["STAGE", "ACT", "PROP"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 12,
    categories: [
      { name: "Architecture", words: ["ARCH", "DOME", "PILLAR"], color: COLOR_PALETTE[0] },
      { name: "Building Materials", words: ["STEEL", "BRICK", "STONE"], color: COLOR_PALETTE[1] },
      { name: "Hand Tools", words: ["DRILL", "CLAMP", "LEVEL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 13,
    categories: [
      { name: "Plant Anatomy", words: ["STEM", "ROOT", "LEAF"], color: COLOR_PALETTE[0] },
      { name: "Ecosystems", words: ["DESERT", "TUNDRA", "FOREST"], color: COLOR_PALETTE[1] },
      { name: "Biomes", words: ["TAIGA", "STEPPE", "SAVANNA"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 14,
    categories: [
      { name: "Cryptids", words: ["YETI", "KRAKEN", "NESSY"], color: COLOR_PALETTE[0] },
      { name: "Magic Concepts", words: ["SPELL", "POTION", "WAND"], color: COLOR_PALETTE[1] },
      { name: "Space Phenomena", words: ["ORBIT", "ECLIPSE", "NOVA"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 15,
    categories: [
      { name: "Government Types", words: ["STATE", "TRIBE", "REALM"], color: COLOR_PALETTE[0] },
      { name: "History Milestones", words: ["REVOLT", "TREATY", "EMPIRE"], color: COLOR_PALETTE[1] },
      { name: "Courtroom Roles", words: ["JUDGE", "JURY", "CLERK"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 16,
    categories: [
      { name: "Sound Properties", words: ["PITCH", "ECHO", "TONE"], color: COLOR_PALETTE[0] },
      { name: "Light Properties", words: ["BEAM", "GLOW", "RAY"], color: COLOR_PALETTE[1] },
      { name: "Color Terms", words: ["HUE", "TINT", "SHADE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 17,
    categories: [
      { name: "Number Types", words: ["PRIME", "EVEN", "ODD"], color: COLOR_PALETTE[0] },
      { name: "Fraction Words", words: ["HALF", "THIRD", "TENTH"], color: COLOR_PALETTE[1] },
      { name: "Polygons", words: ["OCTAGON", "PENTAGON", "HEXAGON"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 18,
    categories: [
      { name: "Energy Types", words: ["HEAT", "SOLAR", "MAGNETIC"], color: COLOR_PALETTE[0] },
      { name: "Physical Forces", words: ["GRAVITY", "FRICTION", "TENSION"], color: COLOR_PALETTE[1] },
      { name: "Motion Terms", words: ["SPEED", "VELOCITY", "DRIFT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 19,
    categories: [
      { name: "Cooking Actions", words: ["BLEND", "WHISK", "BAKE"], color: COLOR_PALETTE[0] },
      { name: "Kitchen Tools", words: ["GRATER", "LADLE", "PEELER"], color: COLOR_PALETTE[1] },
      { name: "Basic Tastes", words: ["BITTER", "SWEET", "UMAMI"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 20,
    categories: [
      { name: "Transit", words: ["SUBWAY", "FERRY", "BULLET"], color: COLOR_PALETTE[0] },
      { name: "Aircraft", words: ["GLIDER", "ROCKET", "CHOPPER"], color: COLOR_PALETTE[1] },
      { name: "Watercraft", words: ["YACHT", "SLOOP", "BARGE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 21,
    categories: [
      { name: "Sleep Terms", words: ["DREAM", "REM", "SNOOZE"], color: COLOR_PALETTE[0] },
      { name: "Cognition", words: ["LOGIC", "MEMORY", "FOCUS"], color: COLOR_PALETTE[1] },
      { name: "Strong Emotions", words: ["PANIC", "EUPHORIA", "SORROW"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 22,
    categories: [
      { name: "Writing Tools", words: ["QUILL", "CHALK", "STYLUS"], color: COLOR_PALETTE[0] },
      { name: "Ancient Media", words: ["SCROLL", "TABLET", "CODEX"], color: COLOR_PALETTE[1] },
      { name: "Book Parts", words: ["CHAPTER", "INDEX", "GLOSSARY"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 23,
    categories: [
      { name: "Sports Gear", words: ["CLEATS", "GLOVE", "PUCK"], color: COLOR_PALETTE[0] },
      { name: "Team Positions", words: ["GOALIE", "CENTER", "WING"], color: COLOR_PALETTE[1] },
      { name: "Play Actions", words: ["TACKLE", "VOLLEY", "SPIKE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 24,
    categories: [
      { name: "Earth Layers", words: ["CRUST", "MANTLE", "CORE"], color: COLOR_PALETTE[0] },
      { name: "Natural Disasters", words: ["QUAKE", "FLOOD", "STORM"], color: COLOR_PALETTE[1] },
      { name: "Rock Types", words: ["SHALE", "SLATE", "BASALT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 25,
    categories: [
      { name: "Logic Terms", words: ["PROOF", "AXIOM", "FALLACY"], color: COLOR_PALETTE[0] },
      { name: "Philosophy", words: ["ETHICS", "MORAL", "TRUTH"], color: COLOR_PALETTE[1] },
      { name: "Brain Teasers", words: ["RIDDLE", "MAZE", "SUDOKU"], color: COLOR_PALETTE[2] }
    ]
  },

  // --- Games 26 to 75 (50 New Tween Puzzles) ---
  {
    id: 26,
    categories: [
      { name: "States of Matter", words: ["SOLID", "LIQUID", "GAS"], color: COLOR_PALETTE[0] },
      { name: "Inner Planets", words: ["MARS", "VENUS", "EARTH"], color: COLOR_PALETTE[1] },
      { name: "Musical Genres", words: ["ROCK", "JAZZ", "POP"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 27,
    categories: [
      { name: "Computer Hardware", words: ["MOUSE", "SCREEN", "KEY"], color: COLOR_PALETTE[0] },
      { name: "Card Suits", words: ["HEART", "SPADE", "CLUB"], color: COLOR_PALETTE[1] },
      { name: "Extreme Weather", words: ["STORM", "FLOOD", "DROUGHT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 28,
    categories: [
      { name: "Types of Angles", words: ["ACUTE", "OBTUSE", "RIGHT"], color: COLOR_PALETTE[0] },
      { name: "Egg Parts", words: ["YOLK", "WHITE", "SHELL"], color: COLOR_PALETTE[1] },
      { name: "Watercraft", words: ["CANOE", "KAYAK", "YACHT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 29,
    categories: [
      { name: "Ancient Civilizations", words: ["MAYAN", "AZTEC", "ROMAN"], color: COLOR_PALETTE[0] },
      { name: "Volcano Parts", words: ["MAGMA", "LAVA", "ASH"], color: COLOR_PALETTE[1] },
      { name: "Chess Pieces", words: ["ROOK", "KNIGHT", "PAWN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 30,
    categories: [
      { name: "Earth Layers", words: ["CRUST", "MANTLE", "CORE"], color: COLOR_PALETTE[0] },
      { name: "Sports Venues", words: ["COURT", "RING", "TRACK"], color: COLOR_PALETTE[1] },
      { name: "Synonyms for 'Fast'", words: ["QUICK", "SWIFT", "RAPID"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 31,
    categories: [
      { name: "Types of Energy", words: ["SOLAR", "WIND", "HYDRO"], color: COLOR_PALETTE[0] },
      { name: "Synonyms for 'Smart'", words: ["CLEVER", "BRIGHT", "SHARP"], color: COLOR_PALETTE[1] },
      { name: "Track & Field", words: ["SPRINT", "RELAY", "HURDLE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 32,
    categories: [
      { name: "Genetics", words: ["DNA", "CELL", "GENE"], color: COLOR_PALETTE[0] },
      { name: "Literary Genres", words: ["MYSTERY", "FANTASY", "DRAMA"], color: COLOR_PALETTE[1] },
      { name: "Triangle Sides", words: ["BASE", "LEG", "APEX"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 33,
    categories: [
      { name: "Greek Gods", words: ["ZEUS", "HADES", "ATHENA"], color: COLOR_PALETTE[0] },
      { name: "Wizarding Terms", words: ["WAND", "POTION", "SPELL"], color: COLOR_PALETTE[1] },
      { name: "Cryptids", words: ["BIGFOOT", "YETI", "KRAKEN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 34,
    categories: [
      { name: "Ocean Depths", words: ["SHALLOW", "DEEP", "ABYSS"], color: COLOR_PALETTE[0] },
      { name: "Cloud Types", words: ["CUMULUS", "STRATUS", "CIRRUS"], color: COLOR_PALETTE[1] },
      { name: "Compass Points", words: ["NORTH", "SOUTH", "EAST"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 35,
    categories: [
      { name: "Photography Terms", words: ["FOCUS", "ZOOM", "LENS"], color: COLOR_PALETTE[0] },
      { name: "Coding Terms", words: ["LOOP", "BUG", "CODE"], color: COLOR_PALETTE[1] },
      { name: "Theater Terms", words: ["STAGE", "ACT", "SCRIPT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 36,
    categories: [
      { name: "Punctuation", words: ["COMMA", "PERIOD", "COLON"], color: COLOR_PALETTE[0] },
      { name: "Math Operations", words: ["SUM", "PRODUCT", "QUOTIENT"], color: COLOR_PALETTE[1] },
      { name: "Experiment Steps", words: ["PREDICT", "TEST", "ANALYZE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 37,
    categories: [
      { name: "Archery Terms", words: ["BOW", "ARROW", "TARGET"], color: COLOR_PALETTE[0] },
      { name: "Camping Gear", words: ["TENT", "COMPASS", "PACK"], color: COLOR_PALETTE[1] },
      { name: "Scouting Skills", words: ["KNOT", "FIRE", "TRAIL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 38,
    categories: [
      { name: "Prefixes for 'Large'", words: ["MEGA", "MACRO", "SUPER"], color: COLOR_PALETTE[0] },
      { name: "Prefixes for 'Small'", words: ["MICRO", "MINI", "NANO"], color: COLOR_PALETTE[1] },
      { name: "Prefixes for 'Again'", words: ["RE", "BACK", "RETRO"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 39,
    categories: [
      { name: "Synonyms for 'Angry'", words: ["MAD", "FUMING", "IRATE"], color: COLOR_PALETTE[0] },
      { name: "Synonyms for 'Happy'", words: ["GLEEFUL", "JOYFUL", "UPBEAT"], color: COLOR_PALETTE[1] },
      { name: "Synonyms for 'Tired'", words: ["WORN", "SPENT", "FATIGUED"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 40,
    categories: [
      { name: "Government Types", words: ["DEMOCRACY", "MONARCHY", "TYRANNY"], color: COLOR_PALETTE[0] },
      { name: "Economic Terms", words: ["SUPPLY", "DEMAND", "TRADE"], color: COLOR_PALETTE[1] },
      { name: "Map Features", words: ["LEGEND", "SCALE", "COMPASS"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 41,
    categories: [
      { name: "Baby Birds", words: ["CHICK", "DUCKLING", "OWLET"], color: COLOR_PALETTE[0] },
      { name: "Farm Crops", words: ["CORN", "WHEAT", "OATS"], color: COLOR_PALETTE[1] },
      { name: "Kitchen Spices", words: ["SALT", "PEPPER", "BASIL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 42,
    categories: [
      { name: "Grammar Parts", words: ["NOUN", "VERB", "ADJECTIVE"], color: COLOR_PALETTE[0] },
      { name: "Math Terms", words: ["SUM", "MEAN", "MODE"], color: COLOR_PALETTE[1] },
      { name: "Scientific Method", words: ["QUESTION", "TEST", "DATA"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 43,
    categories: [
      { name: "Summer Activities", words: ["CAMP", "POOL", "PARK"], color: COLOR_PALETTE[0] },
      { name: "Autumn Activities", words: ["RAKE", "CIDER", "HARVEST"], color: COLOR_PALETTE[1] },
      { name: "Spring Activities", words: ["BLOOM", "KITE", "NEST"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 44,
    categories: [
      { name: "Zoo Visitors", words: ["KIDS", "DAD", "MOM"], color: COLOR_PALETTE[0] },
      { name: "Play Areas", words: ["PARK", "YARD", "FIELD"], color: COLOR_PALETTE[1] },
      { name: "Toy Vehicles", words: ["TRAIN", "CAR", "PLANE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 45,
    categories: [
      { name: "Fast Animals", words: ["HARE", "HORSE", "DEER"], color: COLOR_PALETTE[0] },
      { name: "Slow Animals", words: ["SLOTH", "SNAIL", "TURTLE"], color: COLOR_PALETTE[1] },
      { name: "Large Animals", words: ["WHALE", "ELEPHANT", "BEAR"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 46,
    categories: [
      { name: "Sweet Drinks", words: ["JUICE", "SODA", "MILK"], color: COLOR_PALETTE[0] },
      { name: "Bakery Goods", words: ["BREAD", "BAGEL", "MUFFIN"], color: COLOR_PALETTE[1] },
      { name: "Soup Ingredients", words: ["BROTH", "NOODLE", "CARROT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 47,
    categories: [
      { name: "Things That Float", words: ["BOAT", "LOG", "CORK"], color: COLOR_PALETTE[0] },
      { name: "Things That Sink", words: ["ROCK", "COIN", "IRON"], color: COLOR_PALETTE[1] },
      { name: "Things That Burn", words: ["WOOD", "PAPER", "COAL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 48,
    categories: [
      { name: "Pet Houses", words: ["KENNEL", "NEST", "TANK"], color: COLOR_PALETTE[0] },
      { name: "Building Rooms", words: ["ROOM", "HALL", "ATTIC"], color: COLOR_PALETTE[1] },
      { name: "Outdoor Spaces", words: ["PATIO", "DECK", "PORCH"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 49,
    categories: [
      { name: "Bedtime Items", words: ["PILLOW", "BLANKET", "SHEET"], color: COLOR_PALETTE[0] },
      { name: "Bath Items", words: ["TUB", "SOAP", "DUCK"], color: COLOR_PALETTE[1] },
      { name: "Play Items", words: ["TOY", "GAME", "DOLL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 50,
    categories: [
      { name: "Farm Buildings", words: ["BARN", "SILO", "SHED"], color: COLOR_PALETTE[0] },
      { name: "City Buildings", words: ["SHOP", "BANK", "HOTEL"], color: COLOR_PALETTE[1] },
      { name: "Home Buildings", words: ["HOUSE", "CABIN", "TENT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 51,
    categories: [
      { name: "Types of Wind", words: ["BREEZE", "GALE", "GUST"], color: COLOR_PALETTE[0] },
      { name: "Water Forms", words: ["RIVER", "BROOK", "CREEK"], color: COLOR_PALETTE[1] },
      { name: "Earth Features", words: ["HILL", "RIDGE", "CLIFF"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 52,
    categories: [
      { name: "Musical Families", words: ["BRASS", "STRINGS", "WOODWIND"], color: COLOR_PALETTE[0] }, // woodwind is 8 letters, let's shorten: "BRASS", "STRINGS", "PERCUSS" -> let's use: "BRASS", "STRINGS", "REEDS"
      { name: "Musical Families", words: ["BRASS", "STRINGS", "REEDS"], color: COLOR_PALETTE[0] },
      { name: "Dance Styles", words: ["BALLET", "SALSA", "TANGO"], color: COLOR_PALETTE[1] },
      { name: "Visual Arts", words: ["DRAFT", "SCULPT", "PAINT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 53,
    categories: [
      { name: "Knight Gear", words: ["ARMOR", "SHIELD", "SWORD"], color: COLOR_PALETTE[0] },
      { name: "Castle Parts", words: ["MOAT", "TOWER", "GATE"], color: COLOR_PALETTE[1] },
      { name: "Royalty Titles", words: ["KING", "QUEEN", "PRINCE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 54,
    categories: [
      { name: "Types of Ships", words: ["FERRY", "BARGE", "TANKER"], color: COLOR_PALETTE[0] },
      { name: "Train Parts", words: ["ENGINE", "CABOOSE", "TRACK"], color: COLOR_PALETTE[1] },
      { name: "Flight Gear", words: ["HELMET", "RADIO", "RADAR"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 55,
    categories: [
      { name: "Sports Officials", words: ["REFEREE", "UMPIRE", "JUDGE"], color: COLOR_PALETTE[0] }, // referee is long, let's use: "REF", "UMPIRE", "JUDGE"
      { name: "Sports Penalties", words: ["FOUL", "PENALTY", "CARD"], color: COLOR_PALETTE[1] },
      { name: "Scoring Marks", words: ["GOAL", "POINT", "RUN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 55,
    categories: [
      { name: "Sports Officials", words: ["REF", "UMPIRE", "JUDGE"], color: COLOR_PALETTE[0] },
      { name: "Sports Penalties", words: ["FOUL", "FINE", "CARD"], color: COLOR_PALETTE[1] },
      { name: "Scoring Marks", words: ["GOAL", "POINT", "RUN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 56,
    categories: [
      { name: "Weather Instruments", words: ["RADAR", "SONDE", "VANE"], color: COLOR_PALETTE[0] }, // sonde is obscure, let's use: "RADAR", "BARO", "VANE" -> let's use: "RADAR", "VANE", "GAUGE"
      { name: "Weather Instruments", words: ["RADAR", "VANE", "GAUGE"], color: COLOR_PALETTE[0] },
      { name: "Time Keepers", words: ["CLOCK", "WATCH", "TIMER"], color: COLOR_PALETTE[1] },
      { name: "Navigation Tools", words: ["COMPASS", "MAP", "GPS"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 57,
    categories: [
      { name: "Forest Life", words: ["MOSS", "FERN", "BARK"], color: COLOR_PALETTE[0] },
      { name: "Desert Life", words: ["CACTUS", "YUCCA", "AGAVE"], color: COLOR_PALETTE[1] },
      { name: "Water Plants", words: ["ALGAE", "KELP", "REED"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 58,
    categories: [
      { name: "Baker's Tools", words: ["WHISK", "SIFT", "BOWL"], color: COLOR_PALETTE[0] },
      { name: "Cooking Units", words: ["CUP", "OUNCE", "PINT"], color: COLOR_PALETTE[1] },
      { name: "Heat Sources", words: ["OVEN", "STOVE", "GRILL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 59,
    categories: [
      { name: "Insect Stages", words: ["EGG", "LARVA", "PUPA"], color: COLOR_PALETTE[0] },
      { name: "Human Ages", words: ["CHILD", "TEEN", "ADULT"], color: COLOR_PALETTE[1] },
      { name: "Plant Life Cycle", words: ["SEED", "SPROUT", "BLOOM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 60,
    categories: [
      { name: "School Subjects", words: ["MATH", "SCIENCE", "CIVICS"], color: COLOR_PALETTE[0] },
      { name: "Office Roles", words: ["BOSS", "CLERK", "INTERN"], color: COLOR_PALETTE[1] },
      { name: "Job Benefits", words: ["WAGE", "BONUS", "LEAVE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 61,
    categories: [
      { name: "Space Explorers", words: ["PILOT", "SCOUT", "ROVER"], color: COLOR_PALETTE[0] },
      { name: "Space Crafts", words: ["PROBE", "STATION", "SHUTTLE"], color: COLOR_PALETTE[1] }, // station is long, let's use: "PROBE", "BASE", "SHIP"
      { name: "Space Forces", words: ["THRUST", "GRAVITY", "ORBIT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 61,
    categories: [
      { name: "Space Explorers", words: ["PILOT", "SCOUT", "ROVER"], color: COLOR_PALETTE[0] },
      { name: "Space Vessels", words: ["PROBE", "BASE", "SHIP"], color: COLOR_PALETTE[1] },
      { name: "Space Forces", words: ["THRUST", "GRAVITY", "ORBIT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 62,
    categories: [
      { name: "Types of Locks", words: ["PADLOCK", "DIGITAL", "KEY"], color: COLOR_PALETTE[0] }, // padlock long -> "BOLT", "PAD", "DIAL"
      { name: "Lock Mechanisms", words: ["BOLT", "PAD", "DIAL"], color: COLOR_PALETTE[0] },
      { name: "Security Items", words: ["ALARM", "CAMERA", "GATE"], color: COLOR_PALETTE[1] },
      { name: "Secret Items", words: ["CODE", "CIPHER", "VAULT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 63,
    categories: [
      { name: "Types of Paper", words: ["CARD", "TISSUE", "BOND"], color: COLOR_PALETTE[0] },
      { name: "Book Bindings", words: ["SPIRAL", "GLUE", "THREAD"], color: COLOR_PALETTE[1] },
      { name: "Writing Formats", words: ["ESSAY", "POEM", "NOVEL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 64,
    categories: [
      { name: "Sound Effects", words: ["BOOM", "CRASH", "SNAP"], color: COLOR_PALETTE[0] },
      { name: "Visual Effects", words: ["SPARK", "GLOW", "FLASH"], color: COLOR_PALETTE[1] },
      { name: "Touch Feelings", words: ["SHOCK", "TINGLE", "BURN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 65,
    categories: [
      { name: "Ocean Tides", words: ["HIGH", "LOW", "NEAP"], color: COLOR_PALETTE[0] },
      { name: "Wave Parts", words: ["CREST", "TROUGH", "FACE"], color: COLOR_PALETTE[1] },
      { name: "Water States", words: ["STEAM", "ICE", "LIQUID"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 66,
    categories: [
      { name: "Light Sources", words: ["BULB", "SUN", "TORCH"], color: COLOR_PALETTE[0] },
      { name: "Darkness Words", words: ["SHADE", "DUSK", "NIGHT"], color: COLOR_PALETTE[1] },
      { name: "Shadow Parts", words: ["CORE", "EDGE", "UMBRA"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 67,
    categories: [
      { name: "Sports Courts", words: ["PITCH", "RING", "RINK"], color: COLOR_PALETTE[0] },
      { name: "Sports Gear", words: ["BAT", "PAD", "MITT"], color: COLOR_PALETTE[1] },
      { name: "Sports Roles", words: ["COACH", "CAPTAIN", "REFEREE"], color: COLOR_PALETTE[2] } // referee -> "REF"
    ]
  },
  {
    id: 67,
    categories: [
      { name: "Sports Courts", words: ["PITCH", "RING", "RINK"], color: COLOR_PALETTE[0] },
      { name: "Sports Gear", words: ["BAT", "PAD", "MITT"], color: COLOR_PALETTE[1] },
      { name: "Sports Roles", words: ["COACH", "CAPTAIN", "REF"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 68,
    categories: [
      { name: "Musical Tempo", words: ["FAST", "SLOW", "LOUD"], color: COLOR_PALETTE[0] },
      { name: "Sound Volume", words: ["SOFT", "MEDIUM", "LOUD"], color: COLOR_PALETTE[1] }, // loud overlap, let's use: "QUIET", "LOUD", "MUTE"
      { name: "Song Parts", words: ["INTRO", "VERSE", "CHORUS"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 68,
    categories: [
      { name: "Musical Tempo", words: ["QUICK", "SLOW", "STEADY"], color: COLOR_PALETTE[0] },
      { name: "Sound Volume", words: ["QUIET", "LOUD", "MUTE"], color: COLOR_PALETTE[1] },
      { name: "Song Parts", words: ["INTRO", "VERSE", "CHORUS"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 69,
    categories: [
      { name: "Weather Alerts", words: ["WATCH", "WARNING", "ADVISORY"], color: COLOR_PALETTE[0] }, // advisory long -> "NOTICE"
      { name: "Weather Alerts", words: ["WATCH", "WARNING", "NOTICE"], color: COLOR_PALETTE[0] },
      { name: "Sky Colors", words: ["GRAY", "BLUE", "PINK"], color: COLOR_PALETTE[1] },
      { name: "Wind Scales", words: ["CALM", "BREEZE", "STORM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 70,
    categories: [
      { name: "Computer Ports", words: ["USB", "HDMI", "AUDIO"], color: COLOR_PALETTE[0] },
      { name: "Data Units", words: ["BIT", "BYTE", "WORD"], color: COLOR_PALETTE[1] },
      { name: "Web Terms", words: ["LINK", "PAGE", "SITE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 71,
    categories: [
      { name: "Body Bones", words: ["SKULL", "SPINE", "FEMUR"], color: COLOR_PALETTE[0] },
      { name: "Joints", words: ["KNEE", "ELBOW", "HIP"], color: COLOR_PALETTE[1] },
      { name: "Muscles", words: ["BICEP", "CORE", "CHEST"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 72,
    categories: [
      { name: "Number Groups", words: ["PAIR", "TRIO", "DOZEN"], color: COLOR_PALETTE[0] },
      { name: "Math Signs", words: ["PLUS", "MINUS", "EQUALS"], color: COLOR_PALETTE[1] }, // equals -> "EQUAL"
      { name: "Shape Types", words: ["CIRCLE", "SQUARE", "TRIANGLE"] } // circle is 6, square is 6, triangle is 8. Let's use: "CUBE", "CONE", "SPHERE"
    ]
  },
  {
    id: 72,
    categories: [
      { name: "Number Groups", words: ["PAIR", "TRIO", "DOZEN"], color: COLOR_PALETTE[0] },
      { name: "Math Signs", words: ["PLUS", "MINUS", "EQUAL"], color: COLOR_PALETTE[1] },
      { name: "3D Shapes", words: ["CUBE", "CONE", "SPHERE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 73,
    categories: [
      { name: "Kinds of Trees", words: ["OAK", "PINE", "MAPLE"], color: COLOR_PALETTE[0] },
      { name: "Tree Parts", words: ["ROOT", "TRUNK", "LEAF"], color: COLOR_PALETTE[1] },
      { name: "Wood Items", words: ["LOG", "PLANK", "STICK"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 74,
    categories: [
      { name: "Fast Travel", words: ["JET", "TRAIN", "CAR"], color: COLOR_PALETTE[0] },
      { name: "Slow Travel", words: ["HIKE", "WALK", "CRAWL"], color: COLOR_PALETTE[1] },
      { name: "Space Travel", words: ["ORBIT", "LAUNCH", "LAND"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 75,
    categories: [
      { name: "Brain Power", words: ["WIT", "TACT", "SKILL"], color: COLOR_PALETTE[0] },
      { name: "Puzzle Types", words: ["MAZE", "RIDDLE", "CLUE"], color: COLOR_PALETTE[1] },
      { name: "Victory Words", words: ["WIN", "SCORE", "PRIZE"], color: COLOR_PALETTE[2] }
    ]
  }
];

// App State
let currentPuzzle = null;
let puzzleIdx = 0;
let activeWords = [];
let selectedWords = [];
let solvedCategories = [];
let mistakesLeft = MAX_MISTAKES;
let isGameOver = false;

// Elements
const gridEl = document.getElementById("grid");
const solvedEl = document.getElementById("solved-categories");
const statusEl = document.getElementById("game-status");
const submitBtn = document.getElementById("submit-btn");
const deselectBtn = document.getElementById("deselect-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const mistakesEl = document.getElementById("mistake-dots");

function getDailyPuzzleIndex() {
  const now = new Date();
  const isEDT = isDaylightSavings(now);
  const etOffsetHours = isEDT ? 4 : 5; 
  const diffMs = now.getTime() - (START_DATE_UTC - (etOffsetHours * 60 * 60 * 1000));
  const dayIndex = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, dayIndex) % PUZZLES.length;
}

function isDaylightSavings(date) {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.min(jan, jul) !== date.getTimezoneOffset();
}

function initGame() {
  puzzleIdx = getDailyPuzzleIndex();
  currentPuzzle = PUZZLES[puzzleIdx];
  
  activeWords = [];
  currentPuzzle.categories.forEach(cat => {
    cat.words.forEach(word => activeWords.push({ word, categoryName: cat.name }));
  });
  
  shuffleArray(activeWords);
  renderStatsAndHistory();
  renderDots();
  renderGrid();
  
  submitBtn.onclick = handleSubmit;
  deselectBtn.onclick = () => { if(!isGameOver) { selectedWords = []; renderGrid(); } };
  shuffleBtn.onclick = () => { if(!isGameOver) { shuffleArray(activeWords); renderGrid(); } };
}

function renderGrid() {
  gridEl.innerHTML = "";
  if (isGameOver) return;

  activeWords.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("word-card");
    card.textContent = item.word;
    
    if (selectedWords.includes(item.word)) {
      card.classList.add("selected");
    }
    
    card.onclick = () => toggleSelectWord(item.word);
    gridEl.appendChild(card);
  });

  submitBtn.disabled = selectedWords.length !== 3;
}

function toggleSelectWord(word) {
  if (isGameOver) return;
  if (selectedWords.includes(word)) {
    selectedWords = selectedWords.filter(w => w !== word);
  } else if (selectedWords.length < 3) {
    selectedWords.push(word);
  }
  renderGrid();
}

function handleSubmit() {
  if (selectedWords.length !== 3 || mistakesLeft <= 0 || isGameOver) return;

  const matchedCategory = currentPuzzle.categories.find(cat => 
    cat.words.every(w => selectedWords.includes(w))
  );

  if (matchedCategory) {
    solvedCategories.push(matchedCategory);
    activeWords = activeWords.filter(item => !selectedWords.includes(item.word));
    selectedWords = [];
    
    renderSolvedCategories();
    renderGrid();

    if (solvedCategories.length === 3) {
      statusEl.textContent = "Great job! You solved today's puzzle!";
      isGameOver = true;
      submitBtn.disabled = true;
      recordGameResult(true);
      renderStatsAndHistory();
    }
  } else {
    mistakesLeft--;
    renderDots();
    
    let isOneOff = false;
    currentPuzzle.categories.forEach(cat => {
      const matchCount = cat.words.filter(w => selectedWords.includes(w)).length;
      if (matchCount === 2) isOneOff = true;
    });

    if (isOneOff && mistakesLeft > 0) {
      statusEl.textContent = "One away!";
      setTimeout(() => { if(statusEl.textContent === "One away!") statusEl.textContent = ""; }, 2000);
    }

    if (mistakesLeft === 0) {
      statusEl.textContent = "Game Over! Try again tomorrow at 7:00 AM ET!";
      isGameOver = true;
      revealAllCategories();
      recordGameResult(false);
      renderStatsAndHistory();
    }
  }
}

function renderSolvedCategories() {
  solvedEl.innerHTML = "";
  solvedCategories.forEach(cat => {
    const row = document.createElement("div");
    row.classList.add("solved-row");
    row.style.backgroundColor = cat.color;
    row.innerHTML = `
      <div class="category-title">${cat.name}</div>
      <div class="category-words">${cat.words.join(", ")}</div>
    `;
    solvedEl.appendChild(row);
  });
}

function revealAllCategories() {
  currentPuzzle.categories.forEach(cat => {
    if (!solvedCategories.includes(cat)) {
      solvedCategories.push(cat);
    }
  });
  activeWords = [];
  renderSolvedCategories();
  renderGrid();
  submitBtn.disabled = true;
}

function renderDots() {
  mistakesEl.innerHTML = "";
  for (let i = 0; i < MAX_MISTAKES; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i >= mistakesLeft) dot.classList.add("lost");
    mistakesEl.appendChild(dot);
  }
}

function getGameData() {
  try {
    const data = localStorage.getItem("kids_connections_data");
    return data ? JSON.parse(data) : { streak: 0, gamesPlayed: 0, history: {} };
  } catch (e) {
    return { streak: 0, gamesPlayed: 0, history: {} };
  }
}

function recordGameResult(won) {
  let data = getGameData();
  const todayKey = `puzzle_${puzzleIdx}`;
  
  if (!data.history[todayKey]) {
    data.gamesPlayed++;
    if (won) {
      data.streak++;
    } else {
      data.streak = 0;
    }
    data.history[todayKey] = { won: won, id: currentPuzzle.id };
    localStorage.setItem("kids_connections_data", JSON.stringify(data));
  }
}

function renderStatsAndHistory() {
  let data = getGameData();
  
  let statsBanner = document.getElementById("stats-banner");
  if (!statsBanner) {
    statsBanner = document.createElement("div");
    statsBanner.id = "stats-banner";
    statsBanner.className = "stats-banner";
    document.querySelector("main").insertBefore(statsBanner, solvedEl);
  }

  statsBanner.innerHTML = `
    <div class="stat-item">Streak <span>🔥 ${data.streak}</span></div>
    <div class="stat-item">Completed <span>🏆 ${Object.values(data.history).filter(h => h.won).length}</span></div>
  `;

  let historySection = document.getElementById("history-section");
  if (!historySection) {
    historySection = document.createElement("div");
    historySection.id = "history-section";
    historySection.className = "history-section";
    historySection.innerHTML = `
      <h3>Past Puzzle History</h3>
      <div id="history-list" class="history-list"></div>
    `;
    document.querySelector("main").appendChild(historySection);
  }

  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  
  const entries = Object.entries(data.history);
  if (entries.length === 0) {
    historyList.innerHTML = `<div style="color: #888; font-size: 0.85rem; padding: 4px;">No completed games yet. Finish today's puzzle to log it here!</div>`;
  } else {
    entries.forEach(([key, record]) => {
      const item = document.createElement("div");
      item.className = `history-item ${record.won ? 'won' : 'lost'}`;
      item.innerHTML = `
        <span>Puzzle #${record.id}</span>
        <span>${record.won ? '✅ Solved' : '❌ Missed'}</span>
      `;
      historyList.appendChild(item);
    });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener("DOMContentLoaded", initGame);
