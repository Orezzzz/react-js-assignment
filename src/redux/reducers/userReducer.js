import { actionTypes } from "../constants/usersActionTypes"

const initialState = {
    users: [],
    selectedUserDetail: {},
    section: "Profile"
}

export const allUsersReducer = (state = initialState, { type, payload}) => {
    switch (type){
        case actionTypes.SET_USERS:
            return {...state,  ...payload};
        default:
            return state;
    }
}

export const userReducer = (state = initialState, { type, payload}) => {
    switch (type){
        case actionTypes.SELECTED_USER:
            return {...state.selectedUserDetail, selectedUserDetail: payload};    
        default:
            return state;    
    }
}

export const sectionReducer = (state = initialState, { type, payload}) => {
    switch (type){
        case actionTypes.SELECTED_SECTION:
            return {section: state.section, section: payload};    
        default:
            return state;    
    }
}