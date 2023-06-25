import { useEffect } from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Common/Navbar/Navbar';
import Main from './Component/Home/Main';
import Post from './Component/Posts/Post';
import Favourite from './Component/Favourite/Favourite';
import Footer from './Component/Footer/Footer';





function App() {



  return (
    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path='/blog-for-ingeniumedu/' element={<Main />}/>
      <Route path='/blog-for-ingeniumedu/post' element={<Post/>}/>
      <Route path='/blog-for-ingeniumedu/favourite' element={<Favourite/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
