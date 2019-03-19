import React, { Component } from 'react';
import "./index.css"
import ukraine from '../../ukraine_geojson/Ukraine.json'
import ConfigInputs from "../../Components/ConfigInputs/"
import Select from "../../Components/Select/"
import Colorer from "../../Components/Colorer/"

//from-until Component
//select Component
//Line Component

class Panel extends Component {
  render(){
    return (
      <div className="panel">
        <ConfigInputs />
        <Select />
        <Colorer />
      </div>
    )
  }
}

export default Panel
