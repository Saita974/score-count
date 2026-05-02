let home = document.getElementById('home')
let guest = document.getElementById('guest')
let homePoints = 0
let guestPoints = 0

//Adding points for home players
function add1Home() {
  homePoints += 1
  home.textContent = homePoints
}

function add2Home() {
  homePoints += 2
  home.textContent = homePoints
}

function add3Home() {
  homePoints += 3
  home.textContent = homePoints
}

//Adding points for guest players
function add1Guest() {
  guestPoints += 1
  guest.textContent = guestPoints
}

function add2Guest() {
  guestPoints += 2
  guest.textContent = guestPoints
}

function add3Guest() {
  guestPoints += 3
  guest.textContent = guestPoints
}