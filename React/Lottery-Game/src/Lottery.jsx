import { useState } from 'react'
import Ticket from './Ticket.jsx' 
import Button from './Button.jsx'
import { randomNumber} from './helper.js'
import './Lottery.css'
export default function Lottery({ n = 3, winningCondition }) {
  const [ticket, setTicket] = useState(randomNumber(n));

  const buyTicket = (n) => {
    setTicket(randomNumber(n))
  }

  let isWinner = winningCondition(ticket)
  return (
    <>
      <h2>Lottery Game</h2>
      <div className='lottery'>
        <p>Ticket</p>
        <Ticket ticket={ticket}></Ticket>
      </div>
      <br />
      <h3>{isWinner ? "Congratulations,You won! 🎉" : "Try Again 😫"}</h3>
      <Button action = {() => buyTicket(n)}></Button>
    </>
  )

}