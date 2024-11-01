import './App.css'
import Greeter from "./Greeter"
import ListPicker from './ListPicker'

function App() {
 return ( 
 <div>
    {/* <Greeter person="Bob"/>
    <Greeter person="Jim"/>
    <Greeter person="Toby"/>
    <Greeter person="Luke"/> */}
    <ListPicker values={[1,2,3,4,5,6,7]}/>
  </div>
)}

export default App
