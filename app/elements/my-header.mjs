export default function MyHeader({ html, state = {} }) {
  const { attrs = {}, store = {} } = state
  // console.log("state", state)
  // console.log("attrs", attrs)
  // console.log("store", store)
  return html`
    <header>
      <h1>header</h1>
      <nav>
        <a href=/>home</a>
        <a href=/about>about</a>
      </nav>
    </header>
  `
}
