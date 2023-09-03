import { combineReducers } from "redux";
import { allUsersReducer, userReducer, sectionReducer} from "./userReducer"

const reducers = combineReducers({
    allUsers: allUsersReducer,
    selectedUserDetail: userReducer,
    sectionSelected: sectionReducer,
})

export default reducers