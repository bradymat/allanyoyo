import html from 'yo-yo'
import header from './header'
import footer from './footer'
import link from './buttons/link'

module.exports = (state, dispatch) => {
  return html`
    <div>
      <div id="wrapper" class="fade-in">

          ${header(state, dispatch)}

				<!-- Main -->
					<div id="main">
						<section class="posts">
              ${createServices()}
						</section>
					</div>
        </div>
        ${footer(state, dispatch)}
    </div>
  `
  function changePageToService (service) {
    dispatch({type: 'CHANGE_SERVICE', payload: service})
  }
  function createServices () {
    return state.services.map(function(service){
      console.log(service);
      return html`
      <article>
        <header>
          <h2><a onclick=${() => changePageToService(service)}>${service.name}</a></h2>
        </header>
        <a onclick=${() => changePageToService(service)} class="image fit"><img src="${service.image}" alt="" /></a>
        <ul class="actions special">
          <li><a onclick=${() => changePageToService(service)} class="button">Learn More</a></li>
        </ul>
      </article>
      `
    })

  }
}
