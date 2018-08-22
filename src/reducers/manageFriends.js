export function manageFriends(state, action){
    // if(action.type==="ADD_FRIEND") {
    //     return { friends: [...state.friends, action.friend]}
    // }
    switch(action.type) {
        case "ADD_FRIEND":
            return { friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            return { friends: state.friends.filter(f => f.id !== action.id)}
        default:
            return state
    }
    
}
