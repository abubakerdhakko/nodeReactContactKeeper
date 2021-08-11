export default (state, action) => {
  switch (action.type) {

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
      
    case 'CLEAR_CONTACTS':
      return {
        ...state,
        contacts: null
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
