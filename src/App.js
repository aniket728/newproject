import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/website/layouts/Layout';
import Home from './components/website/Home';
import Dashboard from './components/vendorpanel/layouts/Dashboard';
import Vendorregister from './components/vendorpanel/Vendorregister';
import Vendorlogin from './components/vendorpanel/Vendorlogin';
import Thankyou from './components/vendorpanel/Thankyou';
import Items from './components/vendorpanel/pages/Items';
import Warehouses from './components/vendorpanel/pages/Warehouses';
import PriceLists from './components/vendorpanel/pages/PriceLists';
import Regions from './components/vendorpanel/pages/Regions';
import Cities from './components/vendorpanel/pages/Cities';
import Areas from './components/vendorpanel/pages/Areas';
import Attendance from './components/vendorpanel/pages/Attendance';
import Settings from './components/vendorpanel/pages/Settings';
import User from './components/vendorpanel/pages/User';
import Target from './components/vendorpanel/pages/Target';
import Leaderboard from './components/vendorpanel/pages/Leaderboard';
import Achievements from './components/vendorpanel/pages/Achievements';
import Estimates from './components/vendorpanel/pages/Estimates';
import DeliveryChallan from './components/vendorpanel/pages/DeliveryChallan';
import SalesReturn from './components/vendorpanel/pages/SalesReturn';
import PurchaseInvoice from './components/vendorpanel/pages/PurchaseInvoice';
import PurchaseReturn from './components/vendorpanel/pages/PurchaseReturn';
import VanSales from './components/vendorpanel/pages/VanSales';
import Customers from './components/vendorpanel/pages/Customers';
import Suppliers from './components/vendorpanel/pages/Suppliers';
import Groups from './components/vendorpanel/pages/Groups';
import Visited from './components/vendorpanel/pages/Visited';
import LIveLocation from './components/vendorpanel/pages/LIveLocation';
import Reports from './components/vendorpanel/pages/Reports';
import Subscription from './components/vendorpanel/pages/Subscription';
import Profile from './components/vendorpanel/pages/Profile';
import SubscriptionPay from './components/vendorpanel/pages/SubscriptionPay';

import PurchaseOrder from './components/vendorpanel/pages/PurchaseOrder';
import AllTransaction from './components/vendorpanel/pages/AllTransaction';
import AdminDashboard from './components/adminpanel/layouts/AdminDashboard';
import SalesByParty from './components/vendorpanel/pages/SalesByParty ';
import StockSummary from './components/vendorpanel/pages/StockSummary';
import SalesByUser from './components/vendorpanel/pages/SalesByUser';
import ItemDetails from './components/vendorpanel/pages/ItemDetails';
import SalesByItem from './components/vendorpanel/pages/SalesByItem';
import RateList from './components/vendorpanel/pages/RateList';
import SalesByCategory from './components/vendorpanel/pages/SalesByCategory ';
import StockAdjustment from './components/vendorpanel/pages/StockAdjustment';
import SalesByBrand from './components/vendorpanel/pages/SalesByBrand';
import LowStockSummary from './components/vendorpanel/pages/LowStockSummary';
import VanSalesByItem from './components/vendorpanel/pages/VanSalesByItem ';
import StockSummaryByBrand from './components/vendorpanel/pages/StockSummaryByBrand';
import VanSalesReconcilation from './components/vendorpanel/pages/VanSalesReconcilation';
import StockSummaryByGroup from './components/vendorpanel/pages/StockSummaryByGroup';
import Plan from './components/vendorpanel/pages/Plan';
import GSTRone from './components/vendorpanel/pages/GSTRone';
import PartyOutstanding from './components/vendorpanel/pages/PartyOutstanding ';
import GSTRtwo from './components/vendorpanel/pages/GSTRtwo';
import PartyStatement from './components/vendorpanel/pages/PartyStatement';
import PurchaseByItem from './components/vendorpanel/pages/PurchaseByItem';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vendorregister" element={<Vendorregister />} />
          <Route path="thank" element={<Thankyou />} />
          <Route path="vendorlogin" element={<Vendorlogin/>} />
        </Route>

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h1>Dashboard Home</h1>} /> {/* Default dashboard page */}
          <Route path="items" element={<Items />} />
          <Route path="warehouses" element={<Warehouses />} />
          <Route path="price-lists" element={<PriceLists />} />
          <Route path="regions" element={<Regions />} />
          <Route path="cities" element={<Cities />} />
          <Route path="areas" element={<Areas />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<User />} />
          <Route path="target" element={<Target />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="estimates" element={<Estimates />} />
          <Route path="delivery-challan" element={<DeliveryChallan />} />
          <Route path="sales-return" element={<SalesReturn />} /> 
          <Route path="purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="purchase-return" element={<PurchaseReturn />} />
          <Route path="van-sales" element={<VanSales />} />
          <Route path="live-location" element={<LIveLocation />} />
          <Route path="customers" element={<Customers />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="groups" element={<Groups />} />
          <Route path="visited" element={<Visited />} />
          
          <Route path="purchaseorder" element={< PurchaseOrder/>} />
          <Route path="subscription" element={< Subscription/>} />
          <Route path="profile" element={< Profile/>} />
          <Route path="subscriptionpay" element={< SubscriptionPay/>} />
            <Route path='plan' element={<Plan/>}/>
          <Route path="alltransaction" element={< AllTransaction/>} />
          <Route path="salesbyparty" element={< SalesByParty/>} />
          <Route path="stocksummary" element={< StockSummary/>} />
          <Route path="salesbyuser" element={< SalesByUser/>} />
          <Route path="itemdetails" element={< ItemDetails/>} />
          <Route path="salesbyitem" element={< SalesByItem/>} />
          <Route path="ratelist" element={< RateList/>} />
          <Route path="salesbycategory" element={< SalesByCategory/>} />
          <Route path="stockadjustment" element={< StockAdjustment/>} />
          <Route path="salesbybrand" element={< SalesByBrand/>} />
          <Route path="lowstocksummary" element={< LowStockSummary/>} />
          <Route path="vansalesbyitem" element={< VanSalesByItem/>} />
          <Route path="stocksummarybybrand" element={< StockSummaryByBrand/>} />
          <Route path="vansalesreconcilation" element={< VanSalesReconcilation/>} />
          <Route path="stocksummarybygroup" element={< StockSummaryByGroup/>} />
        
         
      
         
        </Route>
        <Route path='admindashboard' element={< AdminDashboard/>}>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
