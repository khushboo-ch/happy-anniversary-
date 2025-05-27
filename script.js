/// Global variables
let currentQuizQuestion = 0
let quizScore = 0
let currentSongIndex = 0
let isPlaying = false

// Sample data with image paths - UPDATE THESE PATHS TO YOUR ACTUAL IMAGES
const memories = [
  {
    id: 1,
    title: "Our First Outing....Tum jo ayae Zindagi mein baat ban gayi❤️🌍",
    description: "Where it all began...",
    date: "May 09, 2024",
    image: "asset/images/first-date.jpg",
  },
  {
    id: 2,
    title: "Life is more beautiful, agar (Tum saath ho.…❤️)",
    description: "That amazing trip to the beach",
    date: "August 15, 2024",
    image: "images/summer-vacation.jpg",
  },
  {
    id: 3,
    title: "Day-out with a handsome guy hehehehe (You Baby 🤭❤️)",
    description: "Watching our favorite film",
    date: "August 03, 2024",
    image: "images/movie-night.jpg",
  },
  {
    id: 4,
    title: "Movie & Lunch , We look cute togeather remember 🫣❣️...?",
    description: "A perfect day in the park",
    date: "February 11, 2024",
    image: "images/autumn-picnic.jpg",
  },
  {
    id: 5,
    title: "Tum ho (बस मेरे लिए ❤️)",
    description: "Our first holiday together",
    date: "June 13, 2024",
    image: "images/holiday-season.jpg",
  },
  {
    id: 6,
    title: "Mere ishq pe 'हक़' hua tera :)🥹🫶🏻",
    description: "Ringing in the new year together",
    date: "June 17, 2024",
    image: "images/new-years.jpg",
  },
  {
    id: 7,
    title: "I believe in this line 'लाखों मिल कोई भी ना तुमसा मिला' ..!🥹❤️",
    description: "A day full of love",
    date: "July 03, 2024",
    image: "images/valentines.jpg",
  },
  {
    id: 8,
    title: " When Arijit Singh said, Tu hai to mujhe fir aur kya Chahiye ,I looked at you and felt it🐣💕 ",
    description: "Adventure in the mountains",
    date: "January 23, 2025",
    image: "images/spring-hike.jpg",
  },
]

const timelineEvents = [
  {
    id: 1,
    date: "May 09, 2024",
    title: "First Outing",
    description: "Where our journey began. We went for our fisrt outing and casually chilling and suddenly my heart whispered, that's the one🥹❤️‍🩹.",
  },
  {
    id: 2,
    date: "May 29, 2024",
    title: "Official Relationship",
    description: "The day we decided to make it official.... Cheers to two imperfect pieces that fit perfectly together 🫂❤️",
  },
  {
    id: 3,
    date: "June 13, 2024",
    title: "First Movie Date",
    description: "I still remember that ,You wore a whit T-shirt with dark grey Denim on our first movie date looking the most handsome guy exist in this planet 🥹❤️‍🩹",
  },
  {
    id: 4,
    date: "August 15, 2024",
    title: "My Baby's Birthday 🐣💕 ",
    description: "The most perfect day of my life 🥹🫶🏻, Lunch Movie or vo barish sab kuach picture perfect ❤️",
  },
  {
    id: 5,
    date: "June 17, 2024",
    title: "Eid 🪷🕌",
    description: "It was our first eid in relationship we celebrated together 🥹🫶🏻🪷",
  },
  {
    id: 6,
    date: "February 11, 2025",
    title: " Day-Out With You",
    description: "Even being around you make me happy spending a whole day with you feels like i won a lottery 🥹❤️‍🩹.",
  },
  {
    id: 7,
    date: "May 29, 2025",
    title: "One Year Anniversary",
    description: "The relationship I'm in right now is the one I want forever ♾️❤️‍🩹.",
  },
]

const quizQuestions = [
  {
    id: 1,
    question: "What was our first date spot?",
    options: ["Coffee shop", "Movie theater", "Restaurant", "Park"],
    correctAnswer: "Movie theater",
  },
  {
    id: 2,
    question: "Which Movie we watched on our first Outing",
    options: ["Munjiya", "Crew", "Rockstra", "Sanam Teri Kasam"],
    correctAnswer: "Crew",
  },
  {
    id: 3,
    question: "Where did we had our first kiss?",
    options: ["Movie thater", "Car", "Home", "Cafe"],
    correctAnswer: "Cafe",
  },
  {
    id: 4,
    question: "What i was wearing on our first date?",
    options: [
      "black top blue denim",
      "Sky blue top light blue denim",
      "Brown dress",
      "Beige dress",
    ],
    correctAnswer: "Sky blue top light blue denim",
  },
  {
    id: 5,
    question: "On which date we watched Rockstar ?",
    options: ["May-09-2024", "June-13-2024", "August-15-2024", "February-07-2025"],
    correctAnswer: "June-13-2024",
  },
]

const playlist = [
  {
    id: 1,
    title: "Zara sa",
    artist: "Anhinav Sanwan",
    duration: "3:06",
    file: "audio/zara-sa.mp3"  // ← Add this line
  },
  {
    id: 2,
    title: "Samjhawan",
    artist: "Arijit Singh",
    duration: "0:51",
    file: "audio/samjhawan.mp3"  // ← Add this line
  },
  {
    id: 3,
    title: "Dil leke",
    artist: "Shaan/Shreya Ghosal",
    duration: "4:34",
    file: "audio/dil-leke.mp3"  // ← Add this line
  },
  {
    id: 4,
    title: "Ishq bulaava",
    artist: "Sanam Puri/Shipra Goyal",
    duration: "4:15",
    file: "audio/ishq-bulaava.mp3"  // ← Add this line
  },
]

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  initializeCountdown()
  generateMemoryGallery()
  generateTimeline()
  initializeQuiz()
  initializeMusicPlayer()
  initializeEventListeners()
})

// Countdown Timer
function initializeCountdown() {
  const targetDate = new Date("2025-05-28T23:59:59").getTime()

  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      document.getElementById("days").textContent = days
      document.getElementById("hours").textContent = hours
      document.getElementById("minutes").textContent = minutes
      document.getElementById("seconds").textContent = seconds
    } else {
      document.getElementById("days").textContent = "0"
      document.getElementById("hours").textContent = "0"
      document.getElementById("minutes").textContent = "0"
      document.getElementById("seconds").textContent = "0"
    }
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// Memory Gallery - UPDATED TO SUPPORT IMAGES
function generateMemoryGallery() {
  const gallery = document.getElementById("memory-gallery")

  memories.forEach((memory) => {
    const memoryItem = document.createElement("div")
    memoryItem.className = "memory-item"
    memoryItem.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}" class="memory-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="memory-placeholder" style="display: none;">
                <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <div>Photo not found</div>
                <div style="font-size: 0.8rem; margin-top: 0.5rem;">Expected: ${memory.image}</div>
            </div>
            <div class="memory-overlay">
                <div class="memory-title">${memory.title}</div>
                <div class="memory-date">${memory.date}</div>
            </div>
        `
    gallery.appendChild(memoryItem)
  })
}

// Timeline
function generateTimeline() {
  const timeline = document.getElementById("timeline")

  timelineEvents.forEach((event, index) => {
    const timelineItem = document.createElement("div")
    timelineItem.className = "timeline-item"
    timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-description">${event.description}</div>
            </div>
            <div class="timeline-marker">${event.id}</div>
        `
    timeline.appendChild(timelineItem)
  })
}

// Quiz
function initializeQuiz() {
  displayQuizQuestion()
}

function displayQuizQuestion() {
  const quizContainer = document.getElementById("quiz-container")

  if (currentQuizQuestion >= quizQuestions.length) {
    showQuizResults()
    return
  }

  const question = quizQuestions[currentQuizQuestion]

  quizContainer.innerHTML = `
        <div class="quiz-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 0.875rem; font-weight: 500; color: #e11d48;">
                    Question ${currentQuizQuestion + 1}/${quizQuestions.length}
                </span>
                <span style="font-size: 0.875rem; font-weight: 500; color: #e11d48;">
                    Score: ${quizScore}
                </span>
            </div>
        </div>
        <div class="quiz-question">${question.question}</div>
        <div class="quiz-options">
            ${question.options
              .map(
                (option) => `
                <div class="quiz-option" data-answer="${option}">
                    <span>${option}</span>
                </div>
            `,
              )
              .join("")}
        </div>
        <button class="btn btn-primary" id="next-question" disabled>
            ${currentQuizQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
        </button>
    `

  // Add event listeners to options
  const options = quizContainer.querySelectorAll(".quiz-option")
  const nextButton = quizContainer.querySelector("#next-question")
  let selectedAnswer = null

  options.forEach((option) => {
    option.addEventListener("click", function () {
      if (selectedAnswer) return // Prevent multiple selections

      selectedAnswer = this.dataset.answer

      // Mark correct/incorrect answers
      options.forEach((opt) => {
        if (opt.dataset.answer === question.correctAnswer) {
          opt.classList.add("correct")
          opt.innerHTML += ' <i class="fas fa-check" style="color: #16a34a;"></i>'
        } else if (opt === this && opt.dataset.answer !== question.correctAnswer) {
          opt.classList.add("incorrect")
          opt.innerHTML += ' <i class="fas fa-times" style="color: #dc2626;"></i>'
        }
      })

      // Update score
      if (selectedAnswer === question.correctAnswer) {
        quizScore++
      }

      nextButton.disabled = false
    })
  })

  nextButton.addEventListener("click", () => {
    currentQuizQuestion++
    displayQuizQuestion()
  })
}

function showQuizResults() {
  const quizContainer = document.getElementById("quiz-container")
  const totalQuestions = quizQuestions.length

  let message
  if (quizScore === totalQuestions) {
    message = "Perfect! You remember everything ! 💋"
  } else if (quizScore >= totalQuestions / 2) {
    message = "Not bad! You remember pretty well! 🤭❤️"
  } else {
    message = "Hmm, looks like Pitai ki zarurat hai apko ! 🙄❤️"
  }

  quizContainer.innerHTML = `
        <div class="quiz-score">
            <h3>Your Score: ${quizScore} / ${totalQuestions}</h3>
            <p style="margin-bottom: 1.5rem; color: #be185d;">${message}</p>
            <button class="btn btn-primary" id="restart-quiz">Try Again</button>
        </div>
    `

  document.getElementById("restart-quiz").addEventListener("click", () => {
    currentQuizQuestion = 0
    quizScore = 0
    displayQuizQuestion()
  })

  // Trigger confetti for high scores
  if (quizScore >= 4) {
    triggerConfetti()
  }
}

// Music Player
function initializeMusicPlayer() {
  const musicPlayer = document.getElementById("music-player")

  musicPlayer.innerHTML = `
        <div class="current-song">
            <div class="song-cover">
                <i class="fas fa-music"></i>
            </div>
            <div class="song-info">
                <h4 id="current-title">${playlist[0].title}</h4>
                <p id="current-artist">${playlist[0].artist}</p>
            </div>
        </div>
        
        <div class="player-controls">
            <button class="control-btn" id="prev-btn">
                <i class="fas fa-step-backward"></i>
            </button>
            <button class="control-btn" id="play-btn">
                <i class="fas fa-play"></i>
            </button>
            <button class="control-btn" id="next-btn">
                <i class="fas fa-step-forward"></i>
            </button>
        </div>
        
        <div class="playlist">
            <p style="font-size: 0.75rem; text-align: center; color: #6b7280; margin-bottom: 0.5rem;">Our Playlist</p>
            ${playlist
              .map(
                (song, index) => `
                <div class="playlist-item ${index === 0 ? "active" : ""}" data-index="${index}">
                    <div class="playlist-number">${index + 1}</div>
                    <div class="playlist-info">
                        <div class="playlist-title">${song.title}</div>
                        <div class="playlist-artist">${song.artist}</div>
                    </div>
                    <div style="font-size: 0.75rem; color: #6b7280;">${song.duration}</div>
                </div>
            `,
              )
              .join("")}
        </div>
    `

  // Add event listeners
  document.getElementById("play-btn").addEventListener("click", togglePlay)
  document.getElementById("prev-btn").addEventListener("click", previousSong)
  document.getElementById("next-btn").addEventListener("click", nextSong)

  // Playlist item listeners
  document.querySelectorAll(".playlist-item").forEach((item) => {
    item.addEventListener("click", function () {
      const index = Number.parseInt(this.dataset.index)
      selectSong(index)
    })
  })
}

function togglePlay() {
  const audio = document.getElementById('audio-player')
  const playBtn = document.getElementById("play-btn")
  
  // Set the audio source if not already set
  if (!audio.src || audio.src !== window.location.origin + '/' + playlist[currentSongIndex].file) {
    audio.src = playlist[currentSongIndex].file
  }
  
  isPlaying = !isPlaying

  if (isPlaying) {
    audio.play()
    playBtn.innerHTML = '<i class="fas fa-pause"></i>'
  } else {
    audio.pause()
    playBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
}

function selectSong(index) {
  const audio = document.getElementById('audio-player')
  currentSongIndex = index
  const song = playlist[index]

  // Update current song display
  document.getElementById("current-title").textContent = song.title
  document.getElementById("current-artist").textContent = song.artist

  // Set new audio source
  audio.src = song.file

  // Update playlist active state
  document.querySelectorAll(".playlist-item").forEach((item, i) => {
    item.classList.toggle("active", i === index)
  })

  // Reset playing state
  isPlaying = false
  document.getElementById("play-btn").innerHTML = '<i class="fas fa-play"></i>'
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length
  selectSong(currentSongIndex)
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length
  selectSong(currentSongIndex)
}
// Event Listeners
function initializeEventListeners() {
  // ... your existing code ...
  
  // Add this for auto-next song
 // Add this for auto-next song
const audio = document.getElementById('audio-player')
audio.addEventListener('ended', () => {
  nextSong()
  // Auto-play the next song
  setTimeout(() => {
    togglePlay()
  }, 100)
})
  
  // Confetti button
  document.getElementById("confetti-btn").addEventListener("click", triggerConfetti)

  // Proposal heart
  document.getElementById("proposal-heart").addEventListener("click", () => {
    document.getElementById("proposal-modal").classList.add("show")
  })

  // Modal close
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("proposal-modal").classList.remove("show")
  })

  // Proposal buttons
  document.querySelectorAll(".btn-proposal").forEach((button) => {
    button.addEventListener("click", function () {
      const answer = this.dataset.answer
      handleProposalResponse(answer)
    })
  })

  // Continue button
  document.getElementById("continue-btn").addEventListener("click", () => {
    document.getElementById("proposal-modal").classList.remove("show")
    resetProposal()
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Close modal when clicking outside
  document.getElementById("proposal-modal").addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("show")
    }
  })
}

// Proposal handling
function handleProposalResponse(answer) {
  const buttonsContainer = document.getElementById("proposal-buttons")
  const responseContainer = document.getElementById("proposal-response")
  const responseTitle = document.getElementById("response-title")
  const responseText = document.getElementById("response-text")

  buttonsContainer.style.display = "none"
  responseContainer.style.display = "block"

  if (answer === "no") {
    responseTitle.textContent = "Wait, let me ask again..."
    responseText.textContent = "Just kidding, that button doesn't actually work 😉"
    document.getElementById("continue-btn").textContent = "Try Again"
  } else {
    responseTitle.textContent = "I'm the luckiest person alive! 💖"
    responseText.textContent = "Thank you for making me the happiest person in the world!"
    document.getElementById("continue-btn").textContent = "Continue Celebrating"

    // Trigger confetti for positive responses
    triggerConfetti()
  }
}

function resetProposal() {
  document.getElementById("proposal-buttons").style.display = "flex"
  document.getElementById("proposal-response").style.display = "none"
}

// Confetti Animation
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas")
  const ctx = canvas.getContext("2d")

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const confettiPieces = []
  const colors = ["#ff0000", "#ff69b4", "#ff1493", "#ffd700", "#00ff00", "#0080ff"]

  // Create confetti pieces
  for (let i = 0; i < 100; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: -10,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    })
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = confettiPieces.length - 1; i >= 0; i--) {
      const piece = confettiPieces[i]

      // Update position
      piece.x += piece.vx
      piece.y += piece.vy
      piece.rotation += piece.rotationSpeed

      // Apply gravity
      piece.vy += 0.1

      // Draw confetti piece
      ctx.save()
      ctx.translate(piece.x, piece.y)
      ctx.rotate((piece.rotation * Math.PI) / 180)
      ctx.fillStyle = piece.color
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size)
      ctx.restore()

      // Remove pieces that are off screen
      if (piece.y > canvas.height + 10) {
        confettiPieces.splice(i, 1)
      }
    }

    if (confettiPieces.length > 0) {
      requestAnimationFrame(animateConfetti)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  animateConfetti()
}

// Handle window resize for confetti canvas
window.addEventListener("resize", () => {
  const canvas = document.getElementById("confetti-canvas")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})
