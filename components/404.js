import html from 'yo-yo'
import header from './header'
import back from './buttons/404back'

module.exports = (state, dispatch) => {
  const { lastRoute } = state
  return html`
    <div>
      ${header({title: '404'}, dispatch)}
      ${back(dispatch, lastRoute)}
      <h2>route not found</h2>
      <p>Dynamically goes back to where you were</p>
    </div>
  `
}
