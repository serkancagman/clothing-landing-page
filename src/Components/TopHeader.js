import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import {SiWhatsapp} from 'react-icons/si';
import {SiInstagram} from 'react-icons/si';
import {HiOutlineLocationMarker} from 'react-icons/hi';


export default function Header(){

    const [selected, setSelected] = useState('GB');

    return (
      <header className="bg-light border-bottom">
      
        <div className="nav-top fixed-top bg-dark">
          <div className="container-lg info-top d-flex justify-content-between align-items-center py-2">
            <div className="menu-left text-light">
              <h6 className="m-0">Torino Whole Sale</h6>
            </div>
            <div className="menu-right">
              <a
                href="https://wa.me/905459268577"
                target="_blank"
                rel="noopener noreferrer"
                className="wp-number text-light mx-4"
              >
                <SiWhatsapp className="pb-1 me-2 fs-5" />
                +905459268577
              </a>
              <a
                href="https://www.instagram.com/torinowholesale/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-insta text-light mx-4"
              >
                <SiInstagram className="pb-1 me-2 fs-5" />
                torinowholesale
              </a>
              <span className="location text-light ">
                <HiOutlineLocationMarker className="pb-1 me-2 fs-5" />
                Turkey
              </span>
            </div>
          </div>
        </div>
        <div className="container-lg main-nav">
          <nav className="d-flex main-header justify-content-between align-items-center py-3 w-100">
            <a href="http://localhost:3000" className="navbar-brand fs-2 fw-semibold text-dark">
              Torino Whole Sale
            </a>
            <form action="" method="GET">
              <input
                id="searchArea"
                type="search"
                placeholder="Search the best products">
              </input>
            </form>
            <div id="navConten" className="na">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-2">
                  <a href="http://localhost:3000" className="nav-link text-dark fs-5">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="http://localhost:3000" className="nav-link text-dark fs-5">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <ReactFlagsSelect
                    countries={[
                      "GB",
                      "PT",
                      "MA",
                      "ES",
                      "FR",
                      "DE",
                      "NL",
                      "IT",
                    ]}
                    customLabels={{
                      PT: "PT",
                      MA: "MA",
                      ES: "ES",
                      NL: "NL",
                      GB: "EN",
                      FR: "FR",
                      DE: "DE",
                      IT: "IT",
                    }}
                    placeholder="US"
                    onSelect={(code) => setSelected(code)}
                    selected={selected}
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
}