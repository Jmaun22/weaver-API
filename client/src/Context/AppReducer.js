export default (state, action) => {

    switch(action.type) {
        case "ADD_USERDATA":
            return {
                ...state,
                usersData: [action.payload, ...state.userData]
                
            }
        default: 
            return state 
    }
}