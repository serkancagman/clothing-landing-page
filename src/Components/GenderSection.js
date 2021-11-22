import React from "react";
import manImg from "images/moncler-man.jpg";
import womanImg from "images/moncler-woman.jpg";

export default function HeroSection(props) {


        return (
          <section id="gender-section">
            <div className="container-lg bg-light">
              <div className="row justify-content-around ">
                <div className="col-md-6 gender p-0">
                  <div className="gender-menu d-flex justify-content-around">
                    <h1 className="gender-header py-4 px-2">MAN</h1>
                    <div className="inline-menu man d-flex ">
                      <div className="menu-wrapper d-flex">
                        <a href="http://localhost:3000" className="text-dark">
                          Sweatshirt
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          T-shirt
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          Shoes
                        </a>
                      </div>
                      <div className="menu-downwrapper d-flex">
                        <a href="http://localhost:3000" className="text-dark">
                          Coats
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          Short
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="img-area">
                    <img className="img-fluid" alt="man_img" src={manImg} />
                    <div className="hov-opa"></div>
                  </div>
                </div>
                <div className="col-md-6 p-0 gender">
                  <div className="gender-menu d-flex justify-content-around">
                    <div className="inline-menu woman d-flex">
                      <div className="menu-wrapper d-flex">
                        <a href="http://localhost:3000" className="text-dark">
                          Sweatshirt
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          T-shirt
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          Shoes
                        </a>
                      </div>
                      <div className="menu-downwrapper d-flex">
                        <a href="http://localhost:3000" className="text-dark">
                          Coats
                        </a>
                        <a href="http://localhost:3000" className="text-dark">
                          Short
                        </a>
                      </div>
                    </div>
                    <h1 className="gender-header py-4 text-end px-2">WOMAN</h1>
                  </div>
                  <div className="img-area">
                    <img className="img-fluid" alt="woman_img" src={womanImg} />
                    <div className="hov-opa"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
        

}
