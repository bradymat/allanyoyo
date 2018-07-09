import html from 'yo-yo'

module.exports = ({ title }, dispatch) => {
  return html`
        <div id="copyright">
          <ul><li>© ${getYear()} Independent Electrical Inspectors Otago. All Rights Reserved. Devloped by <a href="http://bradymat.com" target="_blank">bradymat</a></li></ul>
        </div>
`
  function getYear () {
    return new Date().getFullYear()
  }
}
