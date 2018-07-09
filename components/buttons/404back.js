import html from 'yo-yo'

module.exports = (dispatch, lastRoute) => html`
  <button onclick=${() => { dispatch({type: 'CHANGE_ROUTE', payload: lastRoute}) }} >back</button>
`
