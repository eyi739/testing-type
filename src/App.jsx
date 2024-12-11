import './App.css';
import Slots from "./Slots";
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';
// import Clicker from './Clicker';
// import PropertyList from "./PropertyList";
// import ShoppingList from './ShoppingList';
// import Greeter from "./Greeter"
// import ListPicker from './ListPicker'

// const data = [
//   {id: 1, item: 'egg', quantity: 12, completed: false},
//   {id: 2, item: 'milk', quantity: 1, completed: true},
//   {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
//   {id: 4, item: 'carrots', quantity: 12, completed: true}
// ]

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  "#DFFF00",
   "#FFBF00",
   "#FF7F50",
   "#DE3163",
   "#9FE2BF",
   "#40E0D0",
]

function App() {
 return ( 
  <div>
    <ColorBoxGrid colors={colors}/>
    
    {/* <Toggler/> */}
    {/* <Counter num={1}/> */}
    {/* <PropertyList properties={properties} />   */}
  {/* <Clicker message="HI!!!!!" buttonText="PLEASE CLICK ME"/>
  <Clicker message="PLEASE STOP CLICKING ME" buttonText="DON'T CLICK ME "/> */}
  </div>
)}

export default App
