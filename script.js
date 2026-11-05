// Launch anchor: Puzzles rotate daily at 7:00 AM ET starting on this date
const START_DATE_UTC = Date.UTC(2026, 10, 1, 12, 0, 0); 
const MAX_MISTAKES = 4;
const COLOR_PALETTE = ['#fbc02d', '#4caf50', '#0288d1'];

// --- COMPLETE PUZZLES DATASET (1-25) ---
const PUZZLES = [
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

// LocalStorage Persistence for Streaks & History
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
  
  // Inject or update stats banner above the game grid if not present
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

  // Inject or update history section at the bottom
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
