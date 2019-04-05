module.exports = {
  plugins: [require('autoprefixer'), require('postcss-url')({
    url: 'inline'
  }), require('cssnano')]
}
