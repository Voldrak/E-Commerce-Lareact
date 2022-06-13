import './App.css';
import Header from './components/Header.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UpdateProduct from './pages/UpdateProduct.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Protected from './components/Protected';
import ProductList from './pages/ProductList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <h1>E-Commerce in Laraval e React</h1> */}
      <Routes>
      
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={
        <Register/>}/>
        <Route path="/update" element={
        <Protected Cmp={UpdateProduct}/>}/>
        <Route path="/" element={
        <Protected Cmp={ProductList}/>}/>
        <Route path="/add" element={
        <Protected Cmp={AddProduct}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
