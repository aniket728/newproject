import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/website/layouts/Layout';
import Home from './components/website/Home';
import Dashboard from './components/vendorpanel/layouts/Dashboard';
import Vendorregister from './components/vendorpanel/Vendorregister';
import Vendorlogin from './components/vendorpanel/Vendorlogin';
import Thankyou from './components/vendorpanel/Thankyou';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={Layout}>
    <Route index Component={Home}/>
</Route>
<Route path='/dashboard' Component={Dashboard}/>
<Route path='/vendorregister' Component={Vendorregister}/>
<Route path='/vendorlogin' Component={Vendorlogin}/>
<Route path='thank' Component={Thankyou}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
