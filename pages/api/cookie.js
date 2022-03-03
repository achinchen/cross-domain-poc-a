const DEFAULT_ALLOW_METHODS = [
  'POST',
  'GET',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS'
]

const DEFAULT_ALLOW_HEADERS = [
  'X-Requested-With',
  'Access-Control-Allow-Origin',
  'X-HTTP-Method-Override',
  'Content-Type',
  'Authorization',
  'Accept'
]

const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24 // 24 hours
const MAX_AGE_FOR_COOKIE = 60 * 30 // 30 mins


const setHeaderForPreflight = (request, response) => {
  const preflight = request.method === 'OPTIONS'
  if (preflight) {
    response.setHeader('Access-Control-Allow-Methods', DEFAULT_ALLOW_METHODS.join(','))
    response.setHeader('Access-Control-Allow-Headers', DEFAULT_ALLOW_HEADERS.join(','))
    response.setHeader('Access-Control-Max-Age', String(DEFAULT_MAX_AGE_SECONDS))
  }
}

const setHeaderForCORSWithCredentials = (response) => {
  response.setHeader('Access-Control-Allow-Origin', 'https://siteb.pango.plus')
  response.setHeader('Access-Control-Allow-Credentials', 'true')
}


export default function handler(request, response) {
  setHeaderForPreflight(request, response)
  setHeaderForCORSWithCredentials(response)
  response.setHeader('set-cookie', `delicious=from_site_b_endpoint; path=/; secure; samesite=none; maxAge=${MAX_AGE_FOR_COOKIE}`)
  response.status(200).json({result: 'cookie is delivered'})
}
