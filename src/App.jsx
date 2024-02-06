import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';

const route=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  {path:'*',element:<NotFound/>}
]}
])


function App() {
  return (
    <>
    <RouterProvider router={route}/>
    </>
  );
}

export default App;
