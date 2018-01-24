import {API_URL_PREFIX, getAuthHeaders, storeAuthHeaders} from '../utilities/helper'
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

export function grantsCreateError(bool) {
  return {type: 'GRANTS_CREATE_ERROR', createError: bool};
}

export function grantsCreateSuccess(bool){
  return {type: 'GRANT_CREATE_SUCCESS', createSuccess: bool}
}

export function GrantApplicationIndex() {
  storeAuthHeaders(getAuthHeaders())
  console.log("before show: "+ JSON.stringify(axios.defaults.headers))
  return (dispatch) => {
    try {
      return axios({
        mode: 'cors',
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
  console.log("before show: "+ JSON.stringify(axios.defaults.headers))
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

export function GrantApplicationCreate(grant_application) {
  console.log("before create: "+ JSON.stringify(getAuthHeaders()))
  return (dispatch) => {
    try {
      return axios({
        method: 'POST',
        url: API_URL_PREFIX + "/grant_applications",
        data: grant_application
      })
      .then(function(response){
        if (response.status === 200)
        {
          dispatch(grantsCreateSuccess(true))
        }
        else{
          dispatch(grantsCreateError(true))
        }
      })
    } catch (error) {
      dispatch(grantsCreateError(true))
      throw error
    }
  }
}
