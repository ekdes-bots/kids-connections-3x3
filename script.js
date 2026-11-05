// Launch anchor: Puzzles rotate daily at 7:00 AM ET starting on this date
const START_DATE_UTC = Date.UTC(2026, 10, 1, 12, 0, 0); // Nov 1, 2026, 12:00 UTC (7:00 AM EST)
const MAX_MISTAKES = 4;
const COLOR_PALETTE = ['#fbc02d', '#4caf50', '#0288d1'];

// 25 Themes tailored for young players (3x3 rows)
const PUZZLES = [
  {
    id: 1,
    categories: [
      { name: "Farm Animals", words: ["COW", "PIG", "HEN"], color: COLOR_PALETTE[0] },
      { name: "Colors", words: ["RED", "BLUE", "PINK"], color: COLOR_PALETTE[1] },
      { name: "Fruit", words: ["FIG", "PLUM", "PEAR"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 2,
    categories: [
      { name: "Pets", words: ["DOG", "CAT", "FISH"], color: COLOR_PALETTE[0] },
      { name: "Things You Wear", words: ["HAT", "SOCK", "SHOE"], color: COLOR_PALETTE[1] },
      { name: "Things That Fly", words: ["BIRD", "KITE", "PLANE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 3,
    categories: [
      { name: "Ocean Life", words: ["SEAL", "CRAB", "SHARK"], color: COLOR_PALETTE[0] },
      { name: "Shapes", words: ["STAR", "OVAL", "RING"], color: COLOR_PALETTE[1] },
      { name: "Vehicles", words: ["BUS", "CAR", "VAN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 4,
    categories: [
      { name: "Things at the Beach", words: ["SAND", "WAVE", "SUN"], color: COLOR_PALETTE[0] },
      { name: "Body Parts", words: ["HAND", "FOOT", "NOSE"], color: COLOR_PALETTE[1] },
      { name: "Hot Drinks", words: ["TEA", "MILK", "COCOA"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 5,
    categories: [
      { name: "In the Sky", words: ["MOON", "STAR", "CLOUD"], color: COLOR_PALETTE[0] },
      { name: "Family Members", words: ["MOM", "DAD", "BABY"], color: COLOR_PALETTE[1] },
      { name: "Numbers", words: ["ONE", "TWO", "THREE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 6,
    categories: [
      { name: "Wild Animals", words: ["LION", "BEAR", "WOLF"], color: COLOR_PALETTE[0] },
      { name: "School Supplies", words: ["PEN", "DESK", "BOOK"], color: COLOR_PALETTE[1] },
      { name: "Breakfast Foods", words: ["EGG", "TOAST", "JAM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 7,
    categories: [
      { name: "Insects", words: ["ANT", "BEE", "BUG"], color: COLOR_PALETTE[0] },
      { name: "Things in a Park", words: ["TREE", "GRASS", "BENCH"], color: COLOR_PALETTE[1] },
      { name: "Winter Items", words: ["SNOW", "ICE", "COAT"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 8,
    categories: [
      { name: "Bugs That Fly", words: ["FLY", "MOTH", "WASP"], color: COLOR_PALETTE[0] },
      { name: "Musical Instruments", words: ["DRUM", "FLUTE", "BELL"], color: COLOR_PALETTE[1] },
      { name: "Things You Read", words: ["BOOK", "MAP", "CARD"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 9,
    categories: [
      { name: "Toys", words: ["DOLL", "BALL", "BLOCK"], color: COLOR_PALETTE[0] },
      { name: "Fast Food", words: ["FRIES", "BURGER", "PIZZA"], color: COLOR_PALETTE[1] },
      { name: "Feelings", words: ["HAPPY", "SAD", "GLAD"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 10,
    categories: [
      { name: "Things in the Kitchen", words: ["FORK", "SPOON", "PAN"], color: COLOR_PALETTE[0] },
      { name: "Flavors", words: ["SWEET", "SOUR", "SALT"], color: COLOR_PALETTE[1] },
      { name: "Things That Run on Power", words: ["LAMP", "TV", "FAN"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 11,
    categories: [
      { name: "Baking Ingredients", words: ["FLOUR", "SUGAR", "MILK"], color: COLOR_PALETTE[0] },
      { name: "Things with Wheels", words: ["BIKE", "CART", "TRUCK"], color: COLOR_PALETTE[1] },
      { name: "Nighttime Things", words: ["BED", "MOON", "DREAM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 12,
    categories: [
      { name: "Zoo Animals", words: ["ZEBRA", "HIPPO", "RHINO"], color: COLOR_PALETTE[0] },
      { name: "Clothing Items", words: ["VEST", "PANTS", "SKIRT"], color: COLOR_PALETTE[1] },
      { name: "Footwear", words: ["BOOT", "SHOE", "SOCK"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 13,
    categories: [
      { name: "Water Toys", words: ["BOAT", "FLOAT", "BALL"], color: COLOR_PALETTE[0] },
      { name: "Forest Animals", words: ["DEER", "FOX", "OWL"], color: COLOR_PALETTE[1] },
      { name: "Types of Trees", words: ["OAK", "PINE", "PALM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 14,
    categories: [
      { name: "Things That Bounce", words: ["BALL", "FROG", "TRAMP"], color: COLOR_PALETTE[0] },
      { name: "Sweet Treats", words: ["CAKE", "CANDY", "PIE"], color: COLOR_PALETTE[1] },
      { name: "Coin Values", words: ["DIME", "CENT", "NICKEL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 15,
    categories: [
      { name: "Yard Items", words: ["HOSE", "RAKE", "Lawn"], color: COLOR_PALETTE[0] },
      { name: "Sports Equipment", words: ["BAT", "NET", "GOAL"], color: COLOR_PALETTE[1] },
      { name: "Ways to Travel", words: ["WALK", "RUN", "SWIM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 16,
    categories: [
      { name: "Space Things", words: ["SUN", "MOON", "MARS"], color: COLOR_PALETTE[0] },
      { name: "Things You Draw With", words: ["PEN", "CRAYON", "CHALK"], color: COLOR_PALETTE[1] },
      { name: "Places in a House", words: ["ROOM", "HALL", "YARD"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 17,
    categories: [
      { name: "Things on a Face", words: ["EYE", "NOSE", "LIPS"], color: COLOR_PALETTE[0] },
      { name: "Things You Drink From", words: ["CUP", "MUG", "GLASS"], color: COLOR_PALETTE[1] },
      { name: "Cold Treats", words: ["ICE", "POPS", "CONE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 18,
    categories: [
      { name: "Things Made of Wood", words: ["DESK", "LOG", "STICK"], color: COLOR_PALETTE[0] },
      { name: "Baby Animals", words: ["CUB", "PUP", "KIT"], color: COLOR_PALETTE[1] },
      { name: "Things That Shine", words: ["SUN", "STAR", "LAMP"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 19,
    categories: [
      { name: "Weather Words", words: ["RAIN", "WIND", "SNOW"], color: COLOR_PALETTE[0] },
      { name: "Things on a Bird", words: ["WING", "BEAK", "NEST"], color: COLOR_PALETTE[1] },
      { name: "Green Things", words: ["LEAF", "FROG", "LIME"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 20,
    categories: [
      { name: "Round Things", words: ["BALL", "COIN", "RING"], color: COLOR_PALETTE[0] },
      { name: "Things in a Bed", words: ["SHEET", "PILLOW", "QUILT"], color: COLOR_PALETTE[1] },
      { name: "Tools", words: ["SAW", "AXE", "DRILL"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 21,
    categories: [
      { name: "Noisy Things", words: ["BELL", "DRUM", "HORN"], color: COLOR_PALETTE[0] },
      { name: "Things That Melt", words: ["ICE", "SNOW", "WAX"], color: COLOR_PALETTE[1] },
      { name: "Things with Pages", words: ["BOOK", "MAG", "ALBUM"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 22,
    categories: [
      { name: "Things at a Party", words: ["CAKE", "HAT", "GIFTS"], color: COLOR_PALETTE[0] },
      { name: "Jungle Animals", words: ["APE", "TIGER", "SNAKE"], color: COLOR_PALETTE[1] },
      { name: "Water Sources", words: ["POND", "LAKE", "RIVER"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 23,
    categories: [
      { name: "Things in a School Bag", words: ["BOOK", "PEN", "RULER"], color: COLOR_PALETTE[0] },
      { name: "Kinds of Bread", words: ["BUN", "ROLL", "LOAF"], color: COLOR_PALETTE[1] },
      { name: "Things with Keyboards", words: ["PIANO", "LAPTOP", "PHONE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 24,
    categories: [
      { name: "Things that Make Light", words: ["SUN", "FIRE", "BULB"], color: COLOR_PALETTE[0] },
      { name: "Types of Shoes", words: ["BOOT", "SNEAKER", "CLOG"], color: COLOR_PALETTE[1] },
      { name: "Things with Wings", words: ["BIRD", "BAT", "BEE"], color: COLOR_PALETTE[2] }
    ]
  },
  {
    id: 25,
    categories: [
      { name: "Things on a Tree", words: ["LEAF", "BARK", "BRANCH"], color: COLOR_PALETTE[0] },
      { name: "Fast Animals", words: ["CHEETAH", "HARE", "HORSE"], color: COLOR_PALETTE[1] },
      { name: "Soft Things", words: ["FUR", "COTTON", "SILK"], color: COLOR_PALETTE[2] }
    ]
  }
];

// App State
let currentPuzzle = null;
let activeWords = [];
let selectedWords = [];
let solvedCategories = [];
let mistakesLeft = MAX_MISTAKES;

// Elements
const gridEl = document.getElementById("grid");
const solvedEl = document.getElementById("solved-categories");
const statusEl = document.getElementById("game-status");
const submitBtn = document.getElementById("submit-btn");
const deselectBtn = document.getElementById("deselect-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const mistakesEl = document.getElementById("mistake-dots");

// Determine current daily game (7:00 AM ET rotation)
function getDailyPuzzleIndex() {
  const now = new Date();
  
  // Calculate offset for Eastern Time (UTC-5 or UTC-4 DST)
  const isEDT = isDaylightSavings(now);
  const etOffsetHours = isEDT ? 4 : 5; 
  
  // Create 7:00 AM ET threshold in UTC milliseconds
  const et7AMOffsetMs = (etOffsetHours + 7) * 60 * 60 * 1000;
  
  const diffMs = now.getTime() - (START_DATE_UTC - (5 * 60 * 60 * 1000));
  const dayIndex = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  // Loop puzzle array across available days safely
  return Math.max(0, dayIndex) % PUZZLES.length;
}

function isDaylightSavings(date) {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.min(jan, jul) !== date.getTimezoneOffset();
}

function initGame() {
  const puzzleIdx = getDailyPuzzleIndex();
  currentPuzzle = PUZZLES[puzzleIdx];
  
  activeWords = [];
  currentPuzzle.categories.forEach(cat => {
    cat.words.forEach(word => activeWords.push({ word, categoryName: cat.name }));
  });
  
  shuffleArray(activeWords);
  renderDots();
  renderGrid();
  
  submitBtn.addEventListener("click", handleSubmit);
  deselectBtn.addEventListener("click", () => { selectedWords = []; renderGrid(); });
  shuffleBtn.addEventListener("click", () => { shuffleArray(activeWords); renderGrid(); });
}

function renderGrid() {
  gridEl.innerHTML = "";
  activeWords.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("word-card");
    card.textContent = item.word;
    
    if (selectedWords.includes(item.word)) {
      card.classList.add("selected");
    }
    
    card.addEventListener("click", () => toggleSelectWord(item.word));
    gridEl.appendChild(card);
  });

  submitBtn.disabled = selectedWords.length !== 3;
}

function toggleSelectWord(word) {
  if (selectedWords.includes(word)) {
    selectedWords = selectedWords.filter(w => w !== word);
  } else if (selectedWords.length < 3) {
    selectedWords.push(word);
  }
  renderGrid();
}

function handleSubmit() {
  if (selectedWords.length !== 3 || mistakesLeft <= 0) return;

  // Check matching category
  const matchedCategory = currentPuzzle.categories.find(cat => 
    cat.words.every(w => selectedWords.includes(w))
  );

  if (matchedCategory) {
    // Correct Match
    solvedCategories.push(matchedCategory);
    activeWords = activeWords.filter(item => !selectedWords.includes(item.word));
    selectedWords = [];
    
    renderSolvedCategories();
    renderGrid();

    if (solvedCategories.length === 3) {
      statusEl.textContent = "Great job! You solved today's puzzle!";
      submitBtn.disabled = true;
    }
  } else {
    // Incorrect Match
    mistakesLeft--;
    renderDots();
    
    // Check if player was 1 off
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
      revealAllCategories();
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener("DOMContentLoaded", initGame);
