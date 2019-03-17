import React, { Component } from 'react'
import ukraine from '../../ukraine_geojson/Ukraine.json'
import { connect}   from 'react-redux';
import { setD } from "../../store.js"

let ukrs = ukraine.features.map(el => ({name: el.properties.name, value: 0}))
ukrs.unshift({name: "******", value: 0})

class Select extends Component {
  state = {
    names: [...ukrs],
    curName: "",
    curVal: 0,
    error: false
  }
  componentDidMount(){
    this.props.setD(this.state.names)
  }
  inpHandler = e => {
    if(e.target.value <= this.props.until && e.target.value >= this.props.from){
      this.setState({...this.state, curVal: +e.target.value, error: false})
    } else this.setState({...this.state, error: true})
  }
  selHandler = e => {
    this.setState({...this.state, curName: e.target.value})
  }
  clickHandler = () => {
    let s = this.state
    if(s.curName ){
      let newNames = s.names
      newNames.map(el => {
        if(el.name === s.curName){
          el.value = s.curVal
        }
      })
      this.setState({...this.state, names: newNames})
      this.props.setD(newNames)
    }
  }
  render(){
    let s = this.state
    return (
      <div className="city_select">
        <select onChange={this.selHandler}>
          {s.names.map((el,ind) =>(
            <option key={ind} value={el.name}>{el.name}</option>
          ))}
        </select>
        <input type="number" defaultValue={s.curVal} onChange={this.inpHandler}/>
        <button onClick={this.clickHandler}>Confirm</button>
        <div style={{visibility: s.error ? "visible" : "hidden", background: "red"}}>Incorecct value</div>
      </div>
    )
  }
}
Select = connect(state=>({until: state.sample.until, from: state.sample.from}), {setD})(Select)
export default Select
