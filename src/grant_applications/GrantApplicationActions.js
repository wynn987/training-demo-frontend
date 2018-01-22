import {API_URL_PREFIX} from '../utilities/helper'
import {setAuthHeaders, persistAuthHeadersInDeviceStorage} from 'redux-token-auth'

export function grantApplications(grant_applications) {
  return {type: 'GRANTS_INDEX_SUCCESS', grant_applications};
}

export function grantsIndexError(bool) {
  return {type: 'GRANTS_INDEX_ERROR', showError: bool};
}

export async function GrantApplicationIndex() {
  myStorage = window.localStorage
  const authHeaders = new Headers({
    'access-token': await AsyncLocalStorage
      .getItem('access-token')
      .toString(),
    client: await AsyncLocalStorage
      .getItem('client')
      .toString(),
    uid: await AsyncLocalStorage
      .getItem('uid')
      .toString(),
    expiry: await AsyncLocalStorage
      .getItem('expiry')
      .toString()
  });
  return (dispatch) => {
    fetch(API_URL_PREFIX + "/grant_applications", {
      method: "GET",
      headers: authHeaders
    }).then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      //setAuthHeaders(response.headers)
      //persistAuthHeadersInDeviceStorage(Storage, response.headers)
      return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(grantApplications(items)))
    .catch(() => dispatch(grantsIndexError(true)));
  };
}