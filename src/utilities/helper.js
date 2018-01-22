let prefix = "http://localhost:3000";
if (process.env.NODE_ENV === 'production') {
    prefix = "https://review-api.gds-gov.tech";
}

export const API_URL_PREFIX = prefix;

const authHeaderKeys = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid',
]
export const storeAuthHeaders = (headers) => {
  authHeaderKeys.forEach((key) => {
    console.log(headers.get(key))
    window.localStorage.setItem(key, headers.get(key))
  })
}

export const getAuthHeaders = new Headers({
  'access-token': window.localStorage
    .getItem('access-token')
    .toString(),
  client: window.localStorage
    .getItem('client')
    .toString(),
  uid: window.localStorage
    .getItem('uid')
    .toString(),
  expiry: window.localStorage
    .getItem('expiry')
    .toString()
});
