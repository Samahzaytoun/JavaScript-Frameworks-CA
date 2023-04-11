import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layouts from './layouts/Layouts';
import Home from './Pages/Home';
import HomeProducts from './Pages/HomeProducts';
import Contact from './Pages/Contact';
import MyItems from './Pages/MyItems';
import SingleItem from './Pages/SingleItem';
import ItemContextProvider from './state/ItemContext';
import Payment from './Pages/Payment';

function App() {

  return (
    // react router dom  
    <ItemContextProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index path='/' element={<HomeProducts />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/my-items' element={<MyItems />} />
            <Route path='/pay' element={<Payment />} />
            <Route path='/item/:id' element={<SingleItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ItemContextProvider>

  )
}

export default App
