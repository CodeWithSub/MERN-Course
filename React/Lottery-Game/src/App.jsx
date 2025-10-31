import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {

  let winningCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery winningCondition={winningCondition}></Lottery>
    </>
  )
}

export default App
