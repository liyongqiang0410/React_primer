const redux = require('redux')
const { createStore } = redux
const { reducer } = require('./reducer')
const store = createStore(reducer)

export { store }  