import html from 'yo-yo'

module.exports = (dispatch, lastRoute) => html`
  <button class="icon fa-arrow-left backbutton" onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: lastRoute}) }} >Go Back</button>
`
