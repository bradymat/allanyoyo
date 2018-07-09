import html from 'yo-yo'

module.exports = ({ title, menu }, dispatch) => {
  scrollToTop()
return html`
  <div>

          <header id="header">
						<a onclick=${() => changePage('/')} class="logo"><img src="images/logo.png" alt="" /></a>
					</header>

					<nav id="nav">
            ${nav(menu)}
						<ul class="icons">
							<li><a href="tel:+64204771262" class="icon fa-phone"><span class="label">Phone</span>020 477 1262</a></li>
							<li><a href="mailto:allan@ieio.co.nz" class="icon fa-envelope"><span class="label">Mail</span>allan@ieio.co.nz</a></li>
						</ul>
					</nav>
  </div>
`

function nav (menuItems) {
    return html`
      <ul class="links">
        ${menuItems.map(function({route, label}, i) {
            return html`<li key={i} onclick=${() => changePage(route)} ><a>${label}</a></li>`
        })}
        </ul>
    `
  }
  function changePage (route) {
    dispatch({type: 'CHANGE_ROUTE', payload: route})
  }
  function scrollToTop () {
    window.scrollTo(0, 0)
  }
}
