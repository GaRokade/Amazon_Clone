import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Picture from './components/Picture';
import Product from './components/Product';
import About from './components/About';
import SignIn from './components/SignIn';
import Mobile from './components/Mobile';
import  Location  from './components/Location';
import TodaysDeals from './components/Todaysdeals';
import AmazonMiniTv from './components/AmazonMiniTv';
import Electronics from './components/Electronics';
import BestSeller from './components/BestSeller';
import CustomerService from './components/CustomerService';
import Prime from './components/Prime';
import NewReleases from './components/NewReleases';
import HomeKichen from './components/HomeKichen';
import Shopping from './components/Shopping';
import Returns from './components/Returns';
function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#a2b9bc';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const [locations, setLocations] = useState([]);

  const handleLocationSubmit = (location) => {
    setLocations([...locations, location]);
  }

  return (
    <>
      <div className="container">
        <Router>
          <Navbar
            title="TextUtils2"
            aboutText="TextAbouts"
            mode={mode}
            togglemode={toggleMode}
          />
          <Picture />
          <Product />
          
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="https://www.amazon.in/deals?ref_=nav_cs_gb" element={<TodaysDeals />} />
            
            <Route path="https://www.amazon.in/minitv/tp/amzn1.dv.gti.dc89050a-d90a-47cd-8d57-56f1b69d4aa1" element={<AmazonMiniTv/>}/>
            <Route path="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Felectronics%2Fb%2F%3Fie%3DUTF8%26node%3D976419031%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0" element={<div>
              <Route path='https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics ' element={<Electronics/>}/>
              <Route path='https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers' element={<BestSeller/> }/>
              <Route path='https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help' element={<CustomerService/>}/>
              <Route path="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember" element={<Prime/>}/>
              <Route path='https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases'element={<NewReleases/>}/>
              <Route path="https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home"element={<HomeKichen/>}/>
              <Route path='https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3' element={<SignIn/>}/>
              <Route path='https://www.amazon.in/b/?_encoding=UTF8&node=56944732031&ref_=nav_swm_swm_gd&pf_rd_p=2c882b5b-152a-4b19-a642-4683a15fc4f7&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=RAP317F2E83RFS3AH1V6' element={<Shopping/>}/>
            </div>}/>
            <Route path='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dnav_orders_first&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' element={<Returns/>}/>
            <Route path="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" element={<Mobile />} />
<Route path='/location' element={<div>
      <h1 className='text-center'>Enter Location Details</h1>
      <Location onLocationSubmit={handleLocationSubmit} />
      
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            {location.address}, {location.district}, {location.state}, {location.country}
          </li>
        ))}
      </ul>
    </div>}/>
          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
