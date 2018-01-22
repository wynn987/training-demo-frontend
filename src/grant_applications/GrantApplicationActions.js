import {API_URL_PREFIX, getAuthHeaders, storeAuthHeaders} from '../utilities/helper'

export function grantApplications(grant_applications) {
  return {type: 'GRANTS_INDEX_SUCCESS', grant_applications};
}

export function grantsIndexError(bool) {
  return {type: 'GRANTS_INDEX_ERROR', indexError: bool};
}

export function GrantApplicationIndex() {
  return (dispatch) => {
    const headers = getAuthHeaders
    fetch(API_URL_PREFIX + "/grant_applications", {
      type: "cors",
      method: "GET",
      headers: headers
    }).then((response) => {
      //storeAuthHeaders(response.headers)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(grantApplications(items)))
    .catch(() => dispatch(grantsIndexError(true)));
  };
}
