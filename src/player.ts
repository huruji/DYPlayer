import Template from './template'

interface PlayerOpts {
  container: HTMLElement,
  url: string
}

export default class Player {
  opts: PlayerOpts
  container: HTMLElement
  video: HTMLVideoElement
  videoContainer: HTMLElement
  url: string
  template: Template

  constructor(opts: PlayerOpts) {
    this.opts = opts
    this.container = opts.container
    this.url = opts.url
    this.init()
  }

  init() {
    this.template = new Template({
      container: this.container
    })
    this.template.init()
    this.video = this.template.video
    this.videoContainer = this.template.videoContainer
    this.video.src = this.url
  }
}
