import ProductTab from './ProductTab.jsx'
import MsgBox from './MsgBox.jsx'
import './App.css'
import ReactEvent from './ReactEvent.jsx'

function App() {
  return (
    <>
      <MsgBox username="Sub" textColor="pink" />
      <MsgBox username="Subhransu" textColor="lightblue" />
      <ProductTab />
      <ReactEvent />
    </>
  )
}

export default App
