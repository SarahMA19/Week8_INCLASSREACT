
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './componets/Nav';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import { useState } from 'react'

// a quick note on props vs state:
// props - is an object of arbitary inputa a Reaccomponent accepts as the first argument
// State - is data that changes over the lifetime of a specific instance of a react component

function App() {
  const [teachers, setTeachers] = useState(['Patsy', 'Paula', 'Pearl', 'Perpetua',]);
  return (
    
      <div className="App">
        <Nav teachers={teachers} />
        <Routes>
          {/* any 'page' of our app can be defined as a route here */}
          <Route children path='/home' element={<Home teachers={teachers} setTeachers={setTeachers} />}  />
          <Route children path='/shop' element={<Shop />}   />
          <Route children path='/cart' element={<Cart />}   />
        </Routes>
      </div>

    
  );
}

export default App;
