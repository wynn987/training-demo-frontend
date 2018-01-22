import {API_URL_PREFIX, getAuthHeaders, storeAuthHeaders} from '../utilities/helper'
import axios from 'axios'

export function grantApplications(grant_applications) {
  return {type: 'GRANTS_INDEX_SUCCESS', grant_applications};
}

export function grantsIndexError(bool) {
  return {type: 'GRANTS_INDEX_ERROR', indexError: bool};
}

export function GrantApplicationIndex() {
  return (dispatch) => {
    var headers = getAuthHeaders
    try {
      axios({
        method: 'GET',
        url: API_URL_PREFIX + "/grant_applications",
        data: headers,
      })
      .then(function(response){
        storeAuthHeaders(response.headers)
        dispatch(grantApplications(response.data))
      })
    } catch (error) {
      dispatch(grantsIndexError(true))
      throw error
    }
  }
}