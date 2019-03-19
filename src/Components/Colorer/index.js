import React, { Component } from 'react';
import { connect}   from 'react-redux';
import colorTabler from "../../Utils/colorTabler.js"
import {setC} from "../../store.js"
import "./index.css"
import ColorInput from "../ColorInput/"

let mapStateToProps = state => ({
  until: state.sample.until,
  from: state.sample.from,
  color: state.sample.color,
  prop: state.sample.prop
})

class Colorer extends Component {
  colorHandler = e => {
    this.props.setC(e.target.value)
  }
  render(){
    let p = this.props
    return (
      <div className="color_table">
        <ul className="table">
          {colorTabler(+p.from, +p.until).map((el,ind) => (
            <li >
              <label >{p.prop} : {el.val}</label>
              <div className="cell" style={{background: p.color, opacity: el.opa}}></div>
            </li>
          ))}
        </ul>
        <ColorInput color = {p.color} change = {this.colorHandler} />
      </div>
    )
  }
}
Colorer = connect(mapStateToProps, {setC})(Colorer)
export default Colorer
