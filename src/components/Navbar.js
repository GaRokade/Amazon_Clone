import React from 'react'
import { Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div  >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ height: '60px', width: '1393px' }} >
  <div className="contai" > 
  <div id="nav-logo" style={{ height: '100%', width: '10%', border: '1px solid black', fontFamily: 'Arial', margin: '0' }}>
    <img src='amazon_logo.png' alt="example picture" top="0px"  height="50" width="100px"/>
  </div>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className='container d-flex flex-column ' style={{height:"90px", width:"110px",color:'white'}} >
        <li className="nav-item  "  
  
  >
          <NavLink className="nav-link position-absolute bottom-0 active text-center text-light " herf="/location" target='_blank'><h7>Delivering to Pune 411007</h7><h6><img src='icons8-location-50.png' width="22px" height="18px" style={{color:'white'}}
/>Update location</h6></NavLink>
          

        </li>
        </div>
        
        
       
      </ul>
      <div className=' position-absolute end-50 d-flex align-items-center' display="flex" style={{width:'25%', height:'40px' }}>
      <form className="d-flex position-relative " >
        <div className='text-align  d-flex justify-content-center' >
          <div className='All' >
        <select aria-describedby="searchDropdownDescription" className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown  rounded-start"style={{height:"40px",width:"40px"}} data-nav-digest="RR+qianDtZtLEzyy23IH86F6v1A=" data-nav-selected="0" width="15px" id="searchDropdownBox" name="url"  tabindex="0" title="Search in">
        <option selected="selected" value="search-alias=aps" >All</option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=amazon-global-store">Amazon Global Store</option>
        <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
        <option value="search-alias=audible">Audible Audiobooks</option>
        <option value="search-alias=automotive">Automotive</option>
        <option value="search-alias=baby">Baby</option>
        <option value="search-alias=stripbooks">Books</option>  
        <option value="search-alias=photo">Camera &amp; Photo</option>
        <option value="search-alias=popular">CDs &amp; Vinyl</option>
        <option value="search-alias=classical">Classical Music</option>
        <option value="search-alias=computers">Computers &amp; Accessories</option>
        <option value="search-alias=todays-deals">Deals</option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=dvd">DVD &amp; Blu-ray</option>
        <option value="search-alias=electronics">Electronics &amp; Photo</option>
        <option value="search-alias=fashion">Fashion</option>
        <option value="search-alias=fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
        <option value="search-alias=fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
        <option value="search-alias=fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
        <option value="search-alias=fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
        <option value="search-alias=fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
        <option value="search-alias=outdoor">Garden &amp; Outdoors</option>
        <option value="search-alias=gift-cards">Gift Cards</option>
        <option value="search-alias=grocery">Grocery</option>
        <option value="search-alias=handmade">Handmade</option>
        <option value="search-alias=drugstore">Health &amp; Personal Care</option>
        <option value="search-alias=local-services">Home &amp; Business Services</option>
        <option value="search-alias=kitchen">Home &amp; Kitchen</option>
        <option value="search-alias=diy">Home Improvement</option>
        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=appliances">Large Appliances</option>
        <option value="search-alias=lighting">Lighting</option>
        <option value="search-alias=fashion-luggage">Luggage and travel gear</option>
        <option value="search-alias=luxury">Luxury Stores</option>
        <option value="search-alias=magazines">Magazines</option>
        <option value="search-alias=mi">Musical Instruments &amp; DJ Equipment</option>
        <option value="search-alias=office-products">Office Products</option>
        <option value="search-alias=videogames">PC &amp; Video Games</option>
        <option value="search-alias=beauty">Perfume &amp; Cosmetic</option>
        <option value="search-alias=pets">Pet Supplies</option>
        <option value="search-alias=luxury-beauty">Premium Beauty</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=sports">Sports</option>
        <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
        <option value="search-alias=tegut">tegut...</option>
        <option value="search-alias=toys">Toys &amp; Games</option>
    </select>
    </div><div className='gayu'>
        <input className="form-control rounded-0 " style={{height:"40px",width:"560px"}} type="search" placeholder="Search in amazon" aria-label="Search"/>
        </div>
        <div >
          <img src='magnifying-glass-solid.svg'className='rounded-end' style={{height:'40px',width:'35px', backgroundColor:'rgb(255, 163, 26)'}}></img>
        </div>
        
        </div>
       
      </form>
      </div>
    </div>
    
    <div><div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
    <li className="nav-item">
    <NavLink className="nav-link text-light"  aria-current="page"  to="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Felectronics%2Fb%2F%3Fie%3DUTF8%26node%3D976419031%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"><h8>signin</h8><h6>Accounts&Lists</h6></NavLink>
        </li>
        </ul>
        </div>
        </div>
        <div>
          <NavLink className='nav-link active text-light margin-0 padding-0 ' to="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fyour-orders%2Forders%3F_encoding%3DUTF8%26ref_%3Dnav_orders_first&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_retail_yourorders_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"><h8>Returns</h8><h6>&Orders</h6></NavLink>
        </div>
        <div>
          <img src='icons8-favorite-cart-24.png'  style={{height:'20',width:'25px'}}/>
        </div>
        
  
</nav>
    
    <nav className="navbar navbar-expand-lg navbar-light text-light"style={{ height: '40px', width: '1393px',backgroundColor:'#232F3E' }} >
    <div className="container-fluid ">
      
      
      <div className="collapse navbar-collapse  " id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink className="nav-link text-light" to="/about">All</NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/minitv/tp/amzn1.dv.gti.dc89050a-d90a-47cd-8d57-56f1b69d4aa1">Amazon miniTV</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3">Sell</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  text-light" to="https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers" tabIndex="-1" aria-disabled="true">Best Seller</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to='https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles'>Mobiles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/deals?ref_=nav_cs_gb">Todays Deals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics">Electronics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help">Customer Service</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember">Prime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases">New Releases</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home">Home&Kitchen</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light position-absolute end-0" to="https://www.amazon.in/b/?_encoding=UTF8&node=56944732031&ref_=nav_swm_swm_gd&pf_rd_p=2c882b5b-152a-4b19-a642-4683a15fc4f7&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=RAP317F2E83RFS3AH1V6"><img src='icons8-amazon-shopping-app-48.png' style={{height:'28',width:'31px'}}/> Shopping Make Easy|Download The App</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  
  </div>
  )
}
