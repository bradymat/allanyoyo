import html from 'yo-yo'

module.exports = (label, dispatch, type, payload) => html`
  <button onclick=${() => { dispatch({type, payload}) }} >${label}</button>
`
