import html from 'yo-yo'
import header from './header'
import footer from './footer'
import button from './buttons/custom'
import link from './buttons/link'

module.exports = (state, dispatch) => html`
    <div>

      ${header(state, dispatch)}
      <footer id="footer">
						<section>
              <header class="major">
                <h2>Get In Touch!</h2>
                <p>If you want to book a job email or call us. We'll get back to you as soon as we can.</p>
              </header>
							<a href="#" class="image fit"><img src="images/call.jpg" alt="" /></a>
						</section>
						<section class="split contact">
							<section class="alt">
								<h3>Address</h3>
								<p>We operate in the Otago region, since we are always out and about working we do not have a main office building. Feel free to email or call us to get in touch</p>
							</section>
              <section>
								<h3>Hours</h3>
								<p>8am - 4pm Weekdays</p>
							</section>
							<section>
								<h3>Phone</h3>
								<p><a href="tel:+64204771262" >020 477 1262</a></p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="mailto:allan@ieio.co.nz" >allan@ieio.co.nz</a></p>
							</section>
						</section>
					</footer>
          ${footer(state, dispatch)}
    </div>
  `
