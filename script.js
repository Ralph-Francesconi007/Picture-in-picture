const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Catch errors
    console.log('whoops, error here:', error)
  }
}

button.addEventListener('click', async () => {
  // Disable the button
  button.diabled = true
  // Start picture in picture
  await videoElement.requestPictureInPicture()
  // Reset the button
  button.disabled = false
})

// On Load
selectMediaStream()