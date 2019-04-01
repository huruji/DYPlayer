import {html, render} from 'lit-html'

interface OptInter {
  container: HTMLElement
}
export default class Template{
  opts: OptInter
  container: HTMLElement
  video: HTMLVideoElement
  videoContainer: HTMLElement


  constructor(opts:OptInter) {
    this.opts = opts;
    this.container = opts.container
  }

  init():void {
    this.renderToContainer()
    this.video = document.querySelector('.dyplayer-video')
    this.videoContainer = document.querySelector('.dyplayer-container')
  }

  renderToContainer() {
    render(this.tep(), this.container)
  }

  tep () {
    return html`
      <section class="dyplayer-container">
        <video class="dyplayer-video" controls="false"></video>
      </section>
    `
  }

}
