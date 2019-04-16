import Template from './template'
import Events from './Events'
import './css/index.styl'
import Moedan from 'moedan'
import 'moedan/dist/Moedan.css'
import { DanmakuData } from 'moedan/dist/src/Moedan'
interface PlayerOpts {
  container: HTMLElement
  url: string
  danmakuData: DanmakuData
  needDanmaku: boolean
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
  danmakuData: DanmakuData
  danmaku: Moedan

  constructor(opts: PlayerOpts) {
    this.opts = opts
    this.container = opts.container
    this.danmakuData = opts.danmakuData || []
    this.url = opts.url
    this.init()
  }

  init(): void {
    this.template = new Template({
      container: this.container
    })
    this.template.init()
    this.video = this.template.video
    this.videoContainer = this.template.videoContainer
    this.videoPlayBtn = this.template.videoPlayBtn
    this.video.src = this.url
    this.events = new Events(this)

    if (this.opts.needDanmaku) {
      this.danmaku = new Moedan({
        data: this.danmakuData,
        player: this.video,
        container: this.videoContainer
      })
    }
  }
}
