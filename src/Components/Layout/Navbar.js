import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav style={{ background: "#333" }}>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo' style={{ paddingLeft: "2rem" }}>
            PetClinic
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>User Info</Link>
            </li>
            <li>
              <Link to='/owners'>Owners</Link>
            </li>
            <li>
              <Link to='/Veterinarians'>Veterinarians</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
