export default (state =[], action) =>{
    console.log(action)
    console.log(state)
    
switch (action.type) {
    case "CREATE":
        return  [...state,action.payload]
       case "SINGLEPOST" :
           return [{state :[...state], post :action.payload.data}]
        case "SEARCH":
            return action.payload
        case "FETCHALL":
            return action.payload.data
        case "DELETE":
                return[ ...state.filter((post) => post._id !== action.payload)]
           case "UPDATE":
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
            case "LIKE":
                return state.map((post) => (post._id == action.payload._id ? action.payload : post))
           
                default:
        return state
}
} 