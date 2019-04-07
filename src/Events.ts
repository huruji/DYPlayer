import Player from './Player'


export default class Events {
  player: Player
  video: Player['video']

  constructor(player: Player) {
    this.player = player
    this.video = this.player.video
    this.init()
  }

  init() {
    this.player.videoPlayBtn.addEventListener('click', () => {
      const playPromise = Promise.resolve(this.video.play())
      playPromise.catch(() => {
        this.video.pause()
      })
    })

    this.video.addEventListener('play', () => {
      this.player.videoPlayBtn.style.display = 'none'
    })

  }
}
