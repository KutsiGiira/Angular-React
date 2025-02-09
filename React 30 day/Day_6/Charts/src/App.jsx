import './App.css'
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Header() {
  return (
    <header>
      <h1>30 Days Of React</h1>
      <h2>World population</h2>
      <h6>Ten Most Populated Countries</h6>
    </header>
  );
}

function Charts() {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599},
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "United States of America", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian Federation", population: 146599183 },
      { country: 'Japan', population: 126960000 },
  ];

  return (
    <div className="Charts">
    <ResponsiveContainer height={450} width={1000} className="inside" >
      <BarChart
        data={tenHighestPopulation}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <XAxis type="number" id="Z" />
        <YAxis dataKey="country" type="category" width={200} />
        <Tooltip />
        <Bar dataKey="population" fill="orange" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Charts />
    </>
  );
}

export default App;