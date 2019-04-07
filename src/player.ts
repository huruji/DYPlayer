import Template from './template'
import Events from './Events'
import './css/index.styl'
interface PlayerOpts {
  container: HTMLElement,
  url: string
}

export default class Player {
  opts: PlayerOpts
  container: HTMLElement
  video: HTMLVideoElement
  videoContainer: HTMLElement
  videoPlayBtn: HTMLElement
  url: string
  template: Template
  events: Events

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
    this.videoPlayBtn = this.template.videoPlayBtn
    this.video.src = this.url
    this.events = new Events(this)
  }
}
