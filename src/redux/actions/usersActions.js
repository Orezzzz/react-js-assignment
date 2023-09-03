import {actionTypes} from '../constants/usersActionTypes'

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        payload: users
    }
}

export const selectedUser = (user) => {
    return {
        type: actionTypes.SELECTED_USER,
        payload: user
    }
}

export const selectedSection = (section) => {
    return {
        type: actionTypes.SELECTED_SECTION,
        payload: section
    }
}