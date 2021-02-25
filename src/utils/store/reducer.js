let state = {
  count: 0
}

const changeState = (action) => {
  action = action || { type: '' }
  switch (action.type) {
    case 'increment':
      state.count++;
      break;
    case 'decrement':
      state.count--;
      break;
    default:
      break;
  }
}

export {
  state,
  changeState
}

