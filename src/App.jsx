import './App.css';
import Slots from "./Slots";
import ShoppingList from './ShoppingList';
// import Greeter from "./Greeter"
// import ListPicker from './ListPicker'

const data = [
  {item: 'egg', quantity: 12, completed: false},
  {item: 'milk', quantity: 1, completed: true},
  {item: 'chicken breasts', quantity: 4, completed: false},
  {item: 'carrots', quantity: 12, completed: true}
]

function App() {
 return ( 
 <div>
    <ShoppingList items={data}/>
    
  
    {/* <Slots val1="🍒" val2="🍒" val3="🍒"/>
    <Slots val1="🍒" val2="🍌" val3="🍉"/> */}
    {/* <Greeter person="Bob"/>
    <Greeter person="Jim"/>
    <Greeter person="Toby"/>
    <Greeter person="Luke"/> */}
    {/* <ListPicker values={[1,2,3,4,5,6,7]}/> */}
  </div>
)}

export default App
