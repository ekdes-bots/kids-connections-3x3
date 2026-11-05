// Launch anchor: Puzzles rotate daily at 7:00 AM ET starting on this date
const START_DATE_UTC = Date.UTC(2026, 10, 1, 12, 0, 0); // Nov 1, 2026, 12:00 UTC (7:00 AM EST)
const MAX_MISTAKES = 4;
const COLOR_PALETTE = ['#fbc02d', '#4caf50', '#0288d1'];

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
  if (typeof PUZZLES === 'undefined' || PUZZLES.length === 0) {
    statusEl.textContent = "Error loading puzzles dataset.";
    return;
  }

  const puzzleIdx = getDailyPuzzleIndex();
  currentPuzzle = PUZZLES[puzzleIdx];
  
  activeWords = [];
  currentPuzzle.categories.forEach(cat => {
    cat.words.forEach(word => activeWords.push({ word, categoryName: cat.name }));
  });
  
  shuffleArray(activeWords);
  renderDots();
  renderGrid();
  
  submitBtn.onclick = handleSubmit;
  deselectBtn.onclick = () => { selectedWords = []; renderGrid(); };
  shuffleBtn.onclick = () => { shuffleArray(activeWords); renderGrid(); };
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
    
    // Use pointer/click events with fast response on mobile
    card.onclick = () => toggleSelectWord(item.word);
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
      submitBtn.disabled = true;
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
