import {API_URL_PREFIX, getAuthHeaders} from '../utilities/helper'
import axios from 'axios'

export function grantApplications(grant_applications) {
  return {type: 'GRANTS_INDEX_SUCCESS', grant_applications};
}

export function grantsIndexError(bool) {
  return {type: 'GRANTS_INDEX_ERROR', indexError: bool};
}

export function grantsShowError(bool) {
  return {type: 'GRANTS_SHOW_ERROR', showError: bool};
}

export function grantApplication(grant_application){
  return {type: 'GRANT_SHOW_SUCCESS', grant_application}
}

export function GrantApplicationIndex() {
  console.log("before send: "+ JSON.stringify(getAuthHeaders()))
  return (dispatch) => {
    try {
      return axios({
        method: 'GET',
        url: API_URL_PREFIX + "/grant_applications",
      })
      .then(function(response){
        console.log("grant application headers: " + JSON.stringify(response.headers))
        //storeAuthHeaders(response.headers)
        dispatch(grantApplications(response.data))
      })
    } catch (error) {
      dispatch(grantsIndexError(true))
      throw error
    }
  }
}

export function GrantApplicationShow(id) {
  console.log("before show: "+ JSON.stringify(getAuthHeaders()))
  return (dispatch) => {
    try {
      return axios({
        method: 'GET',
        url: API_URL_PREFIX + "/grant_applications/" + id,
      })
      .then(function(response){
        console.log("grant application headers: " + JSON.stringify(response.headers))
        //storeAuthHeaders(response.headers)
        dispatch(grantApplication(response.data))
      })
    } catch (error) {
      dispatch(grantsShowError(true))
      throw error
    }
  }
}
