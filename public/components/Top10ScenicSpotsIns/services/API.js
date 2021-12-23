import {getHostURL} from 'components/shared/util'
import FetchBackendDataError from '../error/FetchBackendDataError'

function parseCookies(ctx, response) {
  const raw = response.headers.raw()['set-cookie']
  if (raw && raw.length > 0) {
    const setCookies = raw
      .map((entry) => {
        const parts = entry.split(';')
        const cookiePart = parts[0]
        return cookiePart
      })
      .join(';')
    ctx.req.headers.cookie = `${ctx.req.headers.cookie}; ${setCookies}`
  }
}

export async function callCustomerApi(endpoint, options = {method: 'GET'}, isJson = true, ctx = null) {
  const headers = new Headers()
  let code = '200'
  if (options.method === 'POST') {
    if (isJson) {
      headers.append('Content-Type', 'application/json')
    } else {
      headers.append('Content-Type', 'application/x-www-form-urlencoded')
    }
  }
  headers.append('Cache-Control', 'no-cache, no-store, must-revalidate')
  headers.append('pragma', 'no-cache')
  headers.set('Expires', '0')

  return Promise.race([
    fetch(`${getHostURL(ctx)}/${endpoint}`, {
      ...options,
      credentials: 'include',
      headers,
      cache: 'no-cache'
    })
      .then((response) => {
        if (ctx?.req) {
          // is server side
          parseCookies(ctx, response)
        }
        code = `${response.status}`
        return response.text()
      })
      .then((text) => {
        if (!code.startsWith('20')) {
          throw new FetchBackendDataError(JSON.stringify({code, text}))
        }
        if (isJson) {
          return JSON.parse(text)
        }
        return text
      })
      .catch((error) => {
        throw error
      }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new FetchBackendDataError({code: 503, text: {message: 'Network request failed'}})), 60000)
    )
  ])
}

export async function getHomePageData() {
  // Todo:
}
