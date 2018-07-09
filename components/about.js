import html from 'yo-yo'
import header from './header'
import footer from './footer'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>

      ${header(state, dispatch)}
      <div id="main">
      <section class="posts">
							<article>
								<header class="major">
									<h2>About Us</h2>
								</header>
								<p>Allan Perry is the main inspector; Allan has worked in the electrical industry for the majority of his career. Most recently, at Delta as the Superintendent for the Electrical Inspectors team in Dunedin and Central.</p>
								<p>Allan has a wealth of knowledge and expertise from his time in the industry and is happy to guide others who need clarification about regulations, compliance and best practice.</p>
								<p>Allan mentors electricians who are working towards their inspectors’ ticket.</p>
							</article>
							<article>
								<a class="image fit"><img src="images/ap.jpg" alt="" /></a>
								<header class="major">
									<h2>Allan Perry</h2>
									<p>Main Inspector at IEIO</p>
								</header>
							</article>
						</section>
        </div>
        ${footer(state, dispatch)}
    </div>
  `
