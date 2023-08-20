import React from 'react'

function Navbar() {
  return (
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-whtie d-flex gap-5">
  <a class="navbar-brand" href="#">
    <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_108,h_108/https://mcdonalds.com.pk/wp-content/uploads/2022/06/McDonalds_Logo.png'/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <h6>Our Menu</h6>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item active">

        <a class="nav-link" href="#"><h6>About Our Food</h6> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h6>Your Right To Know</h6></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h6>Our App</h6> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h6>Family</h6></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h6>Trending Now</h6></a>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
