import React from "react";
import "./style.css";
import Child from './Child'

export default function App() {

  function getData(data) {
    alert(data.name + data.email);
    console.log(data);
  }
  return (
    <div>
      {/*  */}
      <Child data={getData}/>
    </div>
  );
}
