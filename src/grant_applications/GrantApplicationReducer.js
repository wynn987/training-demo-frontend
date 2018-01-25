export function grantApplications(state = [], action){
  switch (action.type) {
    case 'GRANTS_INDEX_SUCCESS':
        return action.grant_applications;
    default:
        return state;
  }
}

export function grantApplicationSelector(state = 0, action){
  switch (action.type) {
    case 'GRANT_APPLICATION_SELECTED':
      return action.selectedGrant;
    default:
      return state;
  }
}

export function grantsIndexError(state = false, action){
  switch (action.type) {
    case 'GRANTS_INDEX_ERROR':
        return action.indexError;
    default:
        return state;
  }
}
export function grantApplication(state = {application_type: '', applicant_name: ''}, action){
  switch (action.type) {
    case 'GRANTS_SHOW_SUCCESS':
        return action.grant_application;
    default:
        return state;
  }
}

export function grantsShowError(state = false, action){
  switch (action.type) {
    case 'GRANTS_SHOW_ERROR':
        return action.showError;
    default:
        return state;
  }
}

export function grantsCreateSuccess(state = {application_type: '', applicant_name: ''}, action){
  switch (action.type) {
    case 'GRANTS_CREATE_SUCCESS':
        return action.grant_application;
    default:
        return state;
  }
}

export function grantsCreateError(state = false, action){
  switch (action.type) {
    case 'GRANTS_CREATE_ERROR':
        return action.createError;
    default:
        return state;
  }
}

export function grantsCreateComplete(state = false, action){
  switch (action.type) {
    case 'GRANTS_CREATE_COMPLETE':
        return action.createComplete;
    default:
        return state;
  }
}

export function grantsDeleteError(state = false, action){
  switch (action.type) {
    case 'GRANTS_DELETE_ERROR':
        return action.deleteError;
    default:
        return state;
  }
}

export function grantsDeleteComplete(state = false, action){
  switch (action.type) {
    case 'GRANTS_DELETE_COMPLETE':
        return action.deleteComplete;
    default:
        return state;
  }
}

export function grantsUpdateSuccess(state = {application_type: '', applicant_name: ''}, action){
  switch (action.type) {
    case 'GRANTS_UPDATE_SUCCESS':
        return action.grant_application;
    default:
        return state;
  }
}

export function grantsUpdateError(state = false, action){
  switch (action.type) {
    case 'GRANTS_UPDATE_ERROR':
        return action.updateError;
    default:
        return state;
  }
}
