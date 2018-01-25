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
export function grantsCreateComplete(bool){
  return {type: 'GRANTS_CREATE_COMPLETE', createComplete: bool}
}

export function grantsCreateSuccess(bool){
  return {type: 'GRANT_CREATE_SUCCESS', createSuccess: bool}
}
export function grantsDeleteError(bool) {
  return {type: 'GRANTS_DELETE_ERROR', deleteError: bool};
}
export function grantsDeleteComplete(bool){
  return {type: 'GRANTS_DELETE_COMPLETE', deleteComplete: bool}
}

export function grantsUpdateError(bool) {
  return {type: 'GRANTS_UPDATE_ERROR', updateError: bool};
}

export function grantsUpdateSuccess(bool){
  return {type: 'GRANT_UPDATE_SUCCESS', updateSuccess: bool}
}

export function grantsUpdateComplete(bool){
  return {type: 'GRANTS_UPDATE_COMPLETE', updateComplete: bool}
}

export function grantApplicationSelector(int){
  return {type: "GRANT_APPLICATION_SELECTED", selectedGrant: int}
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
    dispatch(grantApplicationSelector(id))
    // try {
    //   return axios({
    //     method: 'GET',
    //     url: API_URL_PREFIX + "/grant_applications/" + id,
    //   })
    //   .then(function(response){
    //     console.log("grant application headers: " + JSON.stringify(response.headers))
    //     //storeAuthHeaders(response.headers)
    //     dispatch(grantApplication(response.data))
    //   })
    // } catch (error) {
    //   dispatch(grantsShowError(true))
    //   throw error
    // }
  }
}

export function GrantApplicationDelete(id) {
  console.log("before show: "+ JSON.stringify(axios.defaults.headers))
  return (dispatch) => {
    try {
      return axios({
        method: 'DELETE',
        url: API_URL_PREFIX + "/grant_applications/" + id,
      })
      .then(function(response){
        if (response.status !== 204)
        {
          dispatch(grantsDeleteError(true))
        }
      })
    } catch (error) {
      dispatch(grantsDeleteError(true))
      throw error
    }
    finally{
      dispatch(grantsDeleteComplete(true))
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
    finally{
      dispatch(grantsCreateComplete(true))
    }
  }
}

export function GrantApplicationUpdate(id, grant_application) {
  console.log("before update: "+ JSON.stringify(getAuthHeaders()))
  console.log(grant_application)
  return (dispatch) => {
    try {
      return axios({
        method: 'PATCH',
        url: API_URL_PREFIX + "/grant_applications/" + id,
        data: {grant_application}
      })
      .then(function(response){
        if (response.status === 200)
        {
          dispatch(grantsUpdateSuccess(true))
        }
        else{
          dispatch(grantsUpdateError(true))
        }
      })
    } catch (error) {
      dispatch(grantsUpdateError(true))
      throw error
    }
    finally{
      dispatch(grantsUpdateComplete(true))
    }
  }
}

export function ResetGrantApplication(){
  return (dispatch) => {
    dispatch(grantsUpdateSuccess(false))
    dispatch(grantsUpdateError(false))
    dispatch(grantsUpdateComplete(false))
    dispatch(grantsCreateComplete(false))
    dispatch(grantsCreateError(false))
    dispatch(grantsIndexError(false))
    dispatch(grantsShowError(false))
    dispatch(grantsDeleteComplete(false))
    dispatch(grantsDeleteError(false))
    dispatch(grantApplicationSelector(0))
  }
}