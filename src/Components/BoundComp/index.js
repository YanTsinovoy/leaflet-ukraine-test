import React, { Component } from 'react'
import { Map, Rectangle, TileLayer, GeoJSON } from 'react-leaflet'
import "./index.css"
import 'leaflet/dist/leaflet.css'
import ukraine from '../../ukraine_geojson/Ukraine.json'
import { connect}   from 'react-redux';
import colorTabler from "../../Utils/colorTabler.js"

let mapStateToProps = state => ({
  color: state.sample.color,
  data: state.sample.data,
  until: state.sample.until,
  from: state.sample.from
})

const outer = [[53.80065082633023, 41.74804687500001], [42.09822241118974, 20.566406250000004]]

type State = {
  bounds: Array<[number, number]>,
}

class BoundsExample extends Component<{}, State> {
  state = {
    bounds: outer,
    current: null
  }
  mouseOverHandler = ind => e => {
    this.setState({current: ind})
  }
  mouseOutHandler = e => {
    this.setState({current: null})
  }
  render() {
    let p = this.props
    let s = this.state
    let data = p.data
    return (
      <Map className="map" bounds={this.state.bounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ukraine.features.map(
          (el, ind) => {
            // console.log(el.properties.name);
            let check = p.data.filter(elem => elem.name === el.properties.name)[0]
            let tableCheck = colorTabler(p.from, p.until)
            let opacity = () => {
                   console.log("TESTING2", check)
                   let perem = Number(check.value.toString()[0]+"e"+(check.value.toString().length - 1))
                   return tableCheck.filter(
                     (elm,index,arr) => {
                       return elm.val === perem
                     }
                   )
            }
            console.log("TESTING", check)
            return (<GeoJSON style={ ()=>(
              {fillColor: p.color,
              color:  "blue",
              fillOpacity: check ? opacity()[0] ? opacity()[0].opa : 0 : 0 ,
              opacity: s.current === ind ? 0.8 : 0.1}
            )
          } key={ind}
            onMouseover={this.mouseOverHandler(ind)}
            onMouseout = {this.mouseOutHandler}
            onClick ={e => {
              console.log(e.target.options.data.properties.name)
            }}
            data={el} />)}
        )}
      </Map>
    )
  }
}
BoundsExample = connect(mapStateToProps,{})(BoundsExample)
export default BoundsExample
