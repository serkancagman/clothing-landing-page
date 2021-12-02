import React from "react";
import NewWomanCoats from "./WomanCoatProduct";
import NewWomanSweats from "./WomanSweatProduct";
export default function NewSeason() {
  return (
    <section>
      <div className="container-lg bg-light">
        <h2 className="p-3 text-center season-header">New Seasons Woman</h2>
        <h3 className="p-3 text-start">Woman Coats</h3>
        <NewWomanCoats />
        <h3 className="p-3 text-start">Woman Sweatshirts</h3>
        <NewWomanSweats />
        <div className="row flex-wrap p-3"></div>
      </div>
    </section>
  );
}
