import {html, render} from 'lit-html'

export default class Template{
  constructor(opts) {
    this.opts = opts;
    this.container = opts.container
  }

  init() {
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
