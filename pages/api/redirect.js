const MAX_AGE_FOR_COOKIE = 60 * 30 // 30 mins

export default function handler(request, response) {
  response.setHeader('set-cookie', `delicious=from_site_a_endpoint; path=/; secure; maxAge=${MAX_AGE_FOR_COOKIE}`)
  response.redirect(301, 'https://sitea.achin.dev')
}
