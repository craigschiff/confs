export default function sessionReducer(state=localStorage.getItem, action){
  switch (action.type) {
    case 'LOGIN':
      return localStorage.getItem
    case 'LOGOUT':
      return localStorage.getItem
    default:
      return state
  }
}
