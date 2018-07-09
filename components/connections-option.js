import html from 'yo-yo'
import header from './header'
import footer from './footer'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  const { exceptionServices } = state
return html`
    <div>
      <div id="wrapper">

          ${header(state, dispatch)}

				<!-- Main -->
        <div id="main">

        <header class="major">
            <h3>Do you need a</h3>
            <ul class="actions special">
              <li><a onclick=${() => changePageToService(exceptionServices[0])} class="button">Reconnection</a></li>
            </ul>
            <h3>or a</h3>
            <ul class="actions special">
              <li><a onclick=${() => changePageToService(exceptionServices[1])} class="button">New Connection</a></li>
            </ul>
            <br>
            <br>
            <br>
          </div>
      </div>
        ${footer(state, dispatch)}
    </div>
  `
  function changePageToService (service) {
    dispatch({type: 'CHANGE_SERVICE', payload: service})
  }
}
