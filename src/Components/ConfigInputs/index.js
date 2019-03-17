import React, { Component } from 'react';
import "./index.css"
import { connect}   from 'react-redux';
import { setB, setP} from "../../store.js"

class ConfigInputs extends Component {
  state = {
      property: {
        value: "population",
        comm: "Enter your property",
        type: "text"
      },
      from: {
        value: 0,
        comm: "Enter lower bound",
        type: "number"
      },
      until: {
        value: 100000,
        comm: "Enter upper bound",
        type: "number"
      }
  }
  componentDidMount(){
    let s = this.state
    this.props.setB({until: s.until.value, from: s.from.value})
    this.props.setP(s.property.value)
  }
  inpHandler = name => e => {
      let newState = JSON.parse(JSON.stringify(this.state))
      newState[name].value = e.target.value
      this.setState(newState)
  }
  submitHandler = e => {
    e.preventDefault()
    let bounds = {}
    let prop = ""
    Array.from(e.target.elements).forEach(el => {
      if(el.name === "until" || el.name === "from"){
        bounds[el.name] = el.value
      } else {
        if(el.name === "property")prop = el.value
      }
    })
    if(bounds.until > bounds.from) {
      this.props.setB(bounds)
    }
    this.props.setP(prop)
  }

  render(){
    let s = this.state
    return (
        <div className="config_inputs">
          <form className="form" onSubmit={this.submitHandler}>
            {Object.keys(s).map((el,ind)=> (
              <label key={ind}>
                {s[el].comm}
                <input name={el} key={ind} value={s[el].value} type={s[el].type}
                  onChange={this.inpHandler(el)}/>
              </label>
            ))}
            <button type="submit">Confirm changes</button>
          </form >
        </div>
    )
  }
}
ConfigInputs = connect(()=>({}), { setB, setP})(ConfigInputs)

export default ConfigInputs
