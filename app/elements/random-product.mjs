export default function RandomProduct({ html, state = {} }) {
  const { store = {} } = state
  const { title = "", description = "" } = store
  return html`<p>Product: ${title}</p>
    <p>Description: ${description}</p>`
}
