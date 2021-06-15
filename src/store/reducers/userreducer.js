export default(state = [], action)=>{
console.log(state)
console.log(action)
switch (action.type) {
    case "CREATEUSER":
        localStorage.setItem('token', JSON.stringify(action.payload?.data ));

        return action.payload?.data
        case "SIGNUSER":
            localStorage.setItem('token', JSON.stringify(action.payload?.data));

        return action.payload?.data
        case "SIGNOUT":
            localStorage.clear()
            return null
            case "SEARCH":
                return action.payload
       default:
      return  state
}
}