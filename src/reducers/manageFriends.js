export function manageFriends(state, action){
    switch (action.type){
        case "ADD_FRIEND" :
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let removedFriend = state.friends.find(friend => friend.id === action.id)
            let filteredFriends = state.friends.filter(friend => friend !== removedFriend)
            return {friends: filteredFriends}
        default:
            return state;
    }
}
