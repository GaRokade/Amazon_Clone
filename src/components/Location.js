import React, { useState } from 'react';

function Location(props) {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Combine all location details into an object
    const locationDetails = {
      country,
      state,
      district,
      address
    };
    // Pass the location details to the parent component
    props.onLocationSubmit(locationDetails);
    // Clear the input fields after submission
    setCountry('');
    setState('');
    setDistrict('');
    setAddress('');
  };

  return (
    <>
    <div className='d-grid gap-3 position-absolute  ' style={{height:'450px',width:'470px',backgroundColor:'rgb(230, 249, 255)',margin:"0px 400px 0px"}}>
    <form onSubmit={handleSubmit}><img src='https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png' style={{height:'70px',width:'140px',margin:'20px 150px 0px'}}/>
        <div >
      <label >
      <select aria-describedby="searchDropdownDescription" className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown  rounded-start gap-3"
      style={{height:"35px",width:"400px",margin:'10px 25px 0px',backgroundColor:'white'}} data-nav-digest="RR+qianDtZtLEzyy23IH86F6v1A=" data-nav-selected="0" width="15px" id="searchDropdownBox" name="url"  tabindex="0" title="Search in">
        <option selected="selected" value="search-alias=aps" >Country</option>
        <option value="search-alias=alexa-skills">India</option>
        <option value="search-alias=amazon-devices">Australia</option>
        <option value="search-alias=amazon-global-store">Indoneshia</option>
        <option value="search-alias=warehouse-deals">America</option>
        <option value="search-alias=mobile-apps">Japan</option>
        <option value="search-alias=audible">Itely</option>
        <option value="search-alias=automotive">England</option>
        <option value="search-alias=baby">Maleshia</option>
        <option value="search-alias=stripbooks">Israel</option>  
        <option value="search-alias=photo">China</option>
        <option value="search-alias=popular">Jermany</option>
        <option value="search-alias=classical">Singapur</option>
        <option value="search-alias=computers">Brasil</option>
        <option value="search-alias=todays-deals">Bhutan</option>
        <option value="search-alias=digital-music">Nepal</option>
        <option value="search-alias=dvd">Russia</option>
        <option value="search-alias=electronics">Koria</option>
        <option value="search-alias=fashion">Afganistan</option>
        <option value="search-alias=outdoor">Bangladesh</option>
        <option value="search-alias=gift-cards">Switzarland</option>
        <option value="search-alias=grocery">Iceland</option>
        <option value="search-alias=handmade">Irak</option>
        <option value="search-alias=drugstore">Iran</option>
        <option value="search-alias=local-services">Tajakistan</option>
        <option value="search-alias=kitchen"> Palistine</option>
        <option value="search-alias=diy">Hamas</option>
        <option value="search-alias=industrial">Ukraine</option>
        <option value="search-alias=digital-text">Newzland</option>
        <option value="search-alias=appliances">Manmar</option>
        <option value="search-alias=lighting">Saudi Arebia</option>
        <option value="search-alias=fashion-luggage">Shrilanka</option>
        <option value="search-alias=luxury">France</option>
        <option value="search-alias=magazines">South Africa</option>
        
    </select>
        
      </label></div>
      <label>
      
        <select aria-describedby="searchDropdownDescription" className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown  rounded-start"style={{height:"35px",width:"400px",margin:'20px 25px 0px',backgroundColor:'white'}} data-nav-digest="RR+qianDtZtLEzyy23IH86F6v1A=" data-nav-selected="0" width="15px" id="searchDropdownBox" name="url"  tabindex="0" title="Search in">
        <option selected="selected" value="search-alias=aps" >State</option>
        <option value="search-alias=alexa-skills">Maharshtra</option>
        <option value="search-alias=amazon-devices">Goa</option>
        <option value="search-alias=amazon-global-store">Keral</option>
        <option value="search-alias=warehouse-deals">Uttar Pradesh</option>
        <option value="search-alias=mobile-apps">Uttrakhand</option>
        <option value="search-alias=audible">Jharkhand</option>
        <option value="search-alias=automotive">Arunachal Pradesh</option>
        <option value="search-alias=baby">Karnatak</option>
        <option value="search-alias=stripbooks">Rajsthan</option>  
        <option value="search-alias=photo">Madhya Pradesh</option>
        <option value="search-alias=popular">Jammu &amp; Kashmir</option>
        <option value="search-alias=classical">Tamilnadu</option>
        <option value="search-alias=computers">Panjab</option>
        <option value="search-alias=todays-deals">Hariyana</option>
        <option value="search-alias=digital-music">Gujarat</option>
        <option value="search-alias=dvd">Himachal Pradesh</option>
        <option value="search-alias=electronics">Asam</option>
        <option value="search-alias=fashion">Sikkim</option>
        
        <option value="search-alias=outdoor">Bangal</option>
        <option value="search-alias=gift-cards">Bihar</option>
        <option value="search-alias=grocery">Andhra Pradesh </option>
        <option value="search-alias=handmade">Nagaland</option>
        <option value="search-alias=drugstore">Odisha</option>
        <option value="search-alias=local-services">Chattisgarh</option>
        <option value="search-alias=kitchen">Manipur</option>
        <option value="search-alias=diy">Tripura</option>
        <option value="search-alias=industrial">Telangana</option>
        <option value="search-alias=digital-text">Meghalaya</option>
        <option value="search-alias=appliances">Mizoram</option>
        
    </select>
        
        
        
      </label>
      <div><label>
      <select aria-describedby="searchDropdownDescription" className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown  rounded-start"style={{height:"35px",width:"400px",margin:'20px 25px 0px',backgroundColor:'white'}} data-nav-digest="RR+qianDtZtLEzyy23IH86F6v1A=" data-nav-selected="0" width="15px" id="searchDropdownBox" name="url"  tabindex="0" title="Search in">
        <option selected="selected" value="search-alias=aps" >District</option>
        <option value="search-alias=alexa-skills">Amravati</option>
        <option value="search-alias=amazon-devices">Pune</option>
        <option value="search-alias=amazon-global-store">Ahmadnagar</option>
        <option value="search-alias=warehouse-deals">Akola</option>
        <option value="search-alias=mobile-apps">Vardha</option>
        <option value="search-alias=audible">Sangali</option>
        <option value="search-alias=automotive">Ratnagiri</option>
        <option value="search-alias=baby">Thane</option>
        <option value="search-alias=stripbooks">Yavatmal</option>  
        <option value="search-alias=photo">Dharani</option>
        <option value="search-alias=popular">Nagpur</option>
        <option value="search-alias=classical">Chhatrapati Sambhaji Nagar</option>
        <option value="search-alias=computers">Nagpur</option>
        <option value="search-alias=todays-deals">Nashik</option>
        <option value="search-alias=digital-music">Bheed</option>
        <option value="search-alias=dvd">Buldhana</option>
        <option value="search-alias=electronics">Bandhara</option>
        <option value="search-alias=fashion">Nanded</option>
        <option value="search-alias=outdoor">Nandurbar</option>
        <option value="search-alias=gift-cards">Osmanabad</option>
        <option value="search-alias=grocery">Palghar</option>
        <option value="search-alias=handmade">Washim</option>
        <option value="search-alias=drugstore">Solapur</option>
        <option value="search-alias=local-services">Raigad</option>
        <option value="search-alias=kitchen">Latur</option>
        <option value="search-alias=diy">Dhule</option>
        <option value="search-alias=industrial">Gadchiroli</option>
        <option value="search-alias=digital-text">Jalna</option>
        <option value="search-alias=appliances">Jalgaon</option>
        
       
    </select>
     
        
      </label>
      </div>
      <div >
      <label>
      
      
      <input style={{height:"35px",width:"400px",margin:'20px 25px 0px',backgroundColor:'white'}}
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Address"
          required
        />
   
        
      </label></div>
      <button type="submit" className='gap-3' style={{height:'40px',width:'170px',margin:'20px 35px 0px ',backgroundColor:'rgb(51, 255, 204)'}}>Submit</button>
    </form>
    </div>
    
  </>
  );
}

export default Location;
