const defaultState = {
  count: 0
}

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export {
  reducer
}