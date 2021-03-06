import counterStyles from './styles.module.css'

import React from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
  count: 0
}

// seems unnecessary, but will blow up if you typo instead of failing silently
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
})

const reset = () => ({
  type: RESET
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    case RESET:
      return {
        count: 0
      }
  }

  return state
}

const store = createStore(reducer)

const Counter = ({ count, increment, decrement, reset }) => {
  console.log({ count, increment })

  return (
    <main className={counterStyles.Counter}>
      <p className={counterStyles.count}>{ count }</p>
      <section className={counterStyles.controls}>
        <button className={counterStyles.button} onClick={ increment }>Increment</button>
        <button className={counterStyles.button} onClick={ decrement }>Decrement</button>
        <button className={counterStyles.button} onClick={ reset }>Reset</button>
      </section>
    </main>
  )
}

// We want to only pass in the props it cares about to as to not trigger rerenders too often
// Right now that's fine b/c app is smol and state is teeny, later that'll be undesirable
const mapStateToProps = state => { return state }
const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

const HOC = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  )
}

export default HOC
