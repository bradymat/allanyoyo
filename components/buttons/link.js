import html from 'yo-yo'

module.exports = (label, link) => html`
  <a target="_blank" href=${link}>${label}</a>
`
