import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/website/Home';
import Layout from './components/website/layouts/Layout';

import Vendorlogin from './components/vendorpanel/Vendorlogin';
import Attendance from './components/vendorpanel/pages/Attendance';

import Parties from './components/vendorpanel/pages/Parties';




import Regions from './components/vendorpanel/pages/Regions';
import Cities from './components/vendorpanel/pages/Cities';
import Areas from './components/vendorpanel/pages/Areas';
import DashboardHome from './components/vendorpanel/pages/DashboardHome';
import Customers from './components/vendorpanel/pages/Customers';
import Suppliers from './components/vendorpanel/pages/Suppliers';
import Visited from './components/vendorpanel/pages/Visited';
import Groups from './components/vendorpanel/pages/Groups';
import Settings from './components/vendorpanel/pages/Settings';
import Achievements from './components/vendorpanel/pages/Achievements';

import Leaderboard from './components/vendorpanel/pages/Leaderboard';
import PriceLists from './components/vendorpanel/pages/PriceLists';
import Target from './components/vendorpanel/pages/Target';


import Profile from './components/vendorpanel/pages/Profile';

import Warehouses from './components/vendorpanel/pages/Warehouses';


import Dashboard from './components/vendorpanel/layouts/Dashboard';
import LiveLocation from './components/vendorpanel/pages/LIveLocation';

import User from './components/vendorpanel/pages/Users';
import Reports from './components/vendorpanel/pages/Reports';

// import  User from './components/vendorpanel/pages/User';

import  VendorRegister from './components/vendorpanel/Vendorregister';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Main Layout Route */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="vendorlogin" element={<Vendorlogin />} />
                    <Route path="vendorregister" element={<VendorRegister />} />
                </Route>

                {/* Dashboard Route */}
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route index element={< DashboardHome/>} /> {/* Default dashboard page */}
                    <Route path="live-location" element={<LiveLocation />} />
                    <Route path="parties" element={<Parties />} />
              
                    <Route path="routes" element={<Routes/>} />
                    <Route path="user" element={<User />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="report" element={<Reports />} />
                   <Route path='regions' element={<Regions/>}/>
                   <Route path='cities' element={<Cities/>}/>
                   <Route path='areas' element={<Areas/>}/>
                   <Route path='customers' element={<Customers/>}/>
                   <Route path='suppliers' element={< Suppliers/>}/>
                   <Route path='visited' element={<Visited/>}/>
                   <Route path='groups' element={< Groups/>}/>
                   <Route path='settings' element={<Settings/>}/>
                   <Route path='achievements' element={<Achievements/>}/>
                  <Route path='settings' element={<Settings/>}/>
                   <Route path='leaderboard' element={<Leaderboard/>}/>
                   <Route path='priceLists' element={<PriceLists/>}/>
                   <Route path='target' element={<Target/>}/>
          
                   <Route path='profile' element={<Profile/>}/>


                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;