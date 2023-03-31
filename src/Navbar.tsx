import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <div className="bg-dark text-white p-2">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="./">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./podcasts">
            Podcasts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./Movies">
            Movies
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
{
  /* <div class="bg-dark text-white p-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="col navbar-brand">Jack's Bookstore</div>
                    <div class="col-4 text-right">
                        <vc:cart-summary />
                    </div>
                </div>
            </div>
        </div> */
}
