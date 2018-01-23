export function grantApplications(state = [], action){
  switch (action.type) {
    case 'GRANTS_INDEX_SUCCESS':
        return action.grant_applications;
    default:
        return state;
  }
}

export function grantApplication(state = {application_type: '', applicant_name: ''}, action){
  switch (action.type) {
    case 'GRANTS_INDEX_SUCCESS':
        return action.grant_application;
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
export function grantsShowError(state = false, action){
  switch (action.type) {
    case 'GRANTS_SHOW_ERROR':
        return action.showError;
    default:
        return state;
  }
}