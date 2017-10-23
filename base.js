function getRandomResult() {
  const choices = [
    'rock',
    'paper',
    'scissors'
  ]

  const randomIndex = Math.floor(Math.random() * choices.length)

  return choices[randomIndex]
}

function showResult() {
  document.querySelector('.menu').classList.add('hide')
  document.querySelector('.result').classList.remove('hide')
}

function getEmoji(str) {
  const emojis = {
    rock: '🤘',
    paper: '📃',
    scissors: '✂️'
  }

  return emojis[str]
}

function showEmojis() {
  document.querySelector('.player').innerText = getEmoji(player)
  document.querySelector('.computer').innerText = getEmoji(computer)
}

function playerWins() {
  document.querySelector('.result h2').innerText = 'Player wins!'
  
  showEmojis()

  showResult()
}

function computerWins() {
  document.querySelector('.result h2').innerText = 'Computer wins!'

  showEmojis()

  showResult()
}

function tie() {
  document.querySelector('.result h2').innerText = 'Tie!'

  showEmojis()

  showResult()
}

