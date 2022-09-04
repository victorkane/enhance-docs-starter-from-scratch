export default function Head(req = {}) {
  // console.log("req", req)
  const { path } = req
  const title = `My app — ${path}`
  return `
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="/_static/styles.css">
      <link rel="icon" href="/_static/favicon.svg">
    </head>
  `
}
