import fetch from "node-fetch"
export async function get(req) {
  const pnum = Math.floor(Math.random() * 10)
  const p = await fetch("https://dummyjson.com/products?limit=10")
  const data = await p.json()
  const product = data.products[pnum]
  return {
    json: {
      title: product.title,
      description: product.description,
    },
  }
}
