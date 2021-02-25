import { state, changeState } from './reducer'
// 获取状态
const createStore = () => {
  // 获取状态
  const getState = () => state
  // 观察者模式
  const listeners = []
  // 订阅
  const subscribe = listener => {
    listeners.push(listener)
  }

  const dispatch = action => {
    changeState(action)
    // 发布
    listeners.forEach(item => item())
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

const store = createStore()
const render = () => {
  document.querySelector('#count').innerHTML = store.getState().count
}
store.subscribe(render)

export default store 