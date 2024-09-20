import { Routes, Route } from 'react-router-dom';
import './App.css';


import category from '../../data/category.json';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Category from '../Сategory/Сategory';
import CategoryDescription from '../CategoryDescription/CategoryDescription';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/category/:catId" element={<CategoryDescription/>} />
      </Routes>
    </div>
  );
}

export default App;

