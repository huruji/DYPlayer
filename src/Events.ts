import Player from './Player'


export default class Events {
  player: Player
  video: Player['video']
  videoContainer: Player['videoContainer']

  constructor(player: Player) {
    this.player = player
    this.video = this.player.video
    this.videoContainer = this.player.videoContainer
    this.init()
  }

  init() {
    this.player.videoPlayBtn.addEventListener('click', (e) => {
      console.log('123')
      this.playVideo()
      e.stopPropagation()
    })

    this.video.addEventListener('play', (e) => {
      this.player.videoPlayBtn.style.display = 'none'
    }, false)

    this.video.addEventListener('pause', (e) => {
      e.stopPropagation()
    }, false)

    this.videoContainer.addEventListener('click', () => {
      if (this.video.paused) {
        this.playVideo()
      } else {
        this.video.pause()
        this.player.videoPlayBtn.style.display = 'block'
      }
    })
  }

  playVideo() {
    const playPromise = Promise.resolve(this.video.play())
    playPromise.catch(() => {
      this.video.pause()
    })
  }
}
