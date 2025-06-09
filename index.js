let sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = ''
sound.src = 'assets/backsound.mp3'
sound.type = 'audio/mp3'
sound.loop = true
sound.muted = true  // Start muted by default
document.body.appendChild(sound)

let hasUserInteracted = false

function playAudio() {
  sound.play().catch(error => {
    console.log('Audio autoplay prevented:', error);
  });
}

let mutedButton = document.getElementById('mutedBtn')
let mutedImg = mutedButton.querySelector('img')

// Set initial state (sound is muted, show play icon)
mutedImg.src = 'assets/sound-off.svg'
mutedImg.alt = 'Sound Off - Click to Play'
mutedButton.title = 'Click to play sound'

mutedButton.onclick = function (e) {
  if (!hasUserInteracted) {
    hasUserInteracted = true
    playAudio()
    sound.muted = false
    mutedImg.src = 'assets/mute-icon.svg'
    mutedImg.alt = 'Sound On - Click to Mute'
    mutedButton.title = 'Click to mute sound'
    return
  }
  
  if (sound.muted) {
    // Unmute the sound
    sound.muted = false
    mutedImg.src = 'assets/mute-icon.svg'
    mutedImg.style.opacity = '1'
    mutedImg.alt = 'Sound On - Click to Mute'
    mutedButton.title = 'Click to mute sound'
  } else {
    // Mute the sound
    sound.muted = true
    mutedImg.src = 'assets/sound-off.svg'
    mutedImg.style.opacity = '1'
    mutedImg.alt = 'Sound Off - Click to Unmute'
    mutedButton.title = 'Click to unmute sound'
  }
};