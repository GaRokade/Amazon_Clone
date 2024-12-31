import React from 'react'

export default function Mobile() {
  return (
    <div>
        <div className='d-flex'>
        <div className='container absolute-position start-0 end-100' style={{height:'400px',width:'95px',backgroundColor:'red',margin:'0px 0px 0px'}}>
              
        </div>
        <div className='d-grid flex-row'style={{height:'700px',width:'1320px',margin:'0px 0px 0px'}}>
            <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light absolute-position end-0 top-100" style={{height:'50px',width:'1325px', backgroundColor:'red'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        
      </div>
    </div>
  </div>
</nav>
</div>
<div className='container' >
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height:'600px',width:'1330px'}}>
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/Feb/Nokia/D121321585_BAU_Nokia_HMD_Launch_G425G_catpage_1400x800._CB580048005_.jpg" />
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/NewLaunch/realme/70pro/GWset/KV-3/D120445981_SIM_1400x800_1._CB581929710_.jpg" />
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12R/CLP/1March/D111800050_1400x800_4._CB580046897_.jpg" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div></div>
<div className="position-absolute end-0 " style={{height:'400px',width:'1320px',backgroundColor:'red'}}>

</div>

    </div>
  )
}
