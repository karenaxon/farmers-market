import React from "react";

function Header(){
  return(
    <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <div class="container-fluid d-flex align-items-center">
        <h1 class="d-flex align-items-center fs-4 text-white mb-0">
          Farmer's Market
        </h1>
        <a href="/" class="ms-auto link-light" hreflang="ar">Home</a>
      </div>
    </header>
  );
}

export default Header;