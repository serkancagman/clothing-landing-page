import React, { useEffect, useState } from "react";
import WomanSweatApi from "Api/WomanApiSweat";

export default function NewWomanSweats() {
  const [womanSweat, setwomanSweat] = useState([]);

  useEffect(() => {
    WomanSweatApi()
      .get("/WomanSweat")
      .then((res) => {
        setwomanSweat(res.data);
      });
  }, []);

  return (
    <div className="row flex-wrap p-3">
      {womanSweat.map((wSweat) => {
        return (
          <div className="col-md-3 p-3" key={wSweat.id}>
            <div className="product-box">
              <div className="product-img">
                <img className="img-fluid" src={wSweat.url} alt="" />
                <div className="color-area">
                  <div className="color-flex">
                    <span className="color-box red"></span>
                    <span className="color-box white"></span>
                    <span className="color-box green"></span>
                    <span className="color-box blue"></span>
                    <span className="color-box orange"></span>
                  </div>
                </div>
                <div className="size-area">
                  <div className="size-col">
                    <span className="size-box">XS</span>
                    <span className="size-box">S</span>
                    <span className="size-box">M</span>
                    <span className="size-box">L</span>
                    <span className="size-box">XL</span>
                  </div>
                </div>
              </div>
              <div className="bottom-area">
                <div className="product-info py-2">
                  <h6 className="product-text text-dark">
                    <span className="fw-bold ">{wSweat.header} </span>
                    {wSweat.title}
                  </h6>
                </div>
                <div className="product-button">
                  <button id="detail-button" className="go-detail w-100 py-2">
                    Some More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
