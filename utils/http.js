import axios from 'axios'
import * as http from 'http'
import * as https from 'https'

// default http client config here
export default axios.create({
  // 3 rec timeout
  timeout: 1000,

  // keepAlive pools and reuses TCP connections, so it's a little bit faster
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // default headers
  headers: {
    common: {
      'Accept': 'application/json'
    },
  },

  //follow up to 10 HTTP 3xx redirects
  maxRedirects: 10,

  //cap the maximum content length we'll accept to 50MBs, just in case
  maxContentLength: 50 * 1000 * 1000
})
