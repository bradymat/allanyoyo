import html from 'yo-yo'
import header from './header'
import footer from './footer'
import link from './buttons/link'
import toHtml from 'string-to-html'

module.exports = (state, dispatch) => {
  const { services, currentService } = state
return html`
    <div>
      <div id="wrapper">

          ${header(state, dispatch)}

				<!-- Main -->
        <div id="main">

          <header class="major">
            <h2>${currentService.title}</h2>
            <p>${currentService.blurb}</p>
          </header>
          <section class="posts">
            <article>
            ${createContent('contentLeft')}
            </article>
            <article>
            ${createContent('contentRight')}
            </article>
          </section>
        </div>
      </div>
        ${footer(state, dispatch)}
    </div>
  `
  function createContent (section) {
    return currentService[section].map(function({heading, paragraphs}, i) {
        return html`
          <span>
            <h3>${heading}</h3>
            ${paragraphs.map(function(paragraph, i){
              return html `<p>${changeToHtml(paragraph)}</p>`
            })}

          </span>`
    })
  }
  function changeToHtml (string) {
    const theHtmlWeNeed = toHtml(string)
    return html`${theHtmlWeNeed}`
  }
  function changePageToService (service) {
    dispatch({type: 'CHANGE_SERVICE', payload: service})
  }
}
