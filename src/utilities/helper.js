import axios from 'axios'

let prefix = "http://localhost:3000";
if (process.env.NODE_ENV === 'production') {
    prefix = "https://review-api.gds-gov.tech";
}

export const API_URL_PREFIX = prefix;

const authHeaderKeys = [
  'access-token',
  'client',
  'expiry',
  'uid',
]
export const storeAuthHeaders = (headers) => {
  authHeaderKeys.forEach((key) => {
    axios.defaults.headers.common[key] = headers[key]
  })
  authHeaderKeys.forEach((key) => {
   window.localStorage.setItem(key, headers[key])
  })
}

export var getAuthHeaders = () => {
  return {
    'access-token': window.localStorage
      .getItem('access-token'),
    client: window.localStorage
      .getItem('client'),
    uid: window.localStorage
      .getItem('uid')
  };
}

export function headersNotReady(){
  authHeaderKeys.forEach((key) => {
    if (window.localStorage.getItem(key) == null || window.localStorage.getItem(key) === undefined){
      return true
    }
  })
  for (var pair of authHeaderKeys.entries()) {
    console.log(pair[1]+ ': '+ pair[2]);
 }
  return false
}