import { createStore, combineReducers } from 'redux';

let sampleReducer = (state = {from: 0, until: 0, color: "#00ff00", prop: "", data: []}, action) => {
  if(action.type === "SET_COLOR") return {...(JSON.parse(JSON.stringify(state))), color: action.color}
  if(action.type === "SET_BORD") return {...(JSON.parse(JSON.stringify(state))), from: action.obj.from, until: action.obj.until}
  if(action.type === "SET_PROP") return {...(JSON.parse(JSON.stringify(state))), prop: action.val}
  if(action.type === "SET_DATA") return {...(JSON.parse(JSON.stringify(state))), data: action.data}
  return state
}
let reducers = combineReducers({
  sample: sampleReducer
})

const store = createStore(reducers)
let setC = value => ({type: "SET_COLOR", color: value})
let setB = values => ({type: "SET_BORD", obj: values})
let setP = val => ({type: "SET_PROP", val: val})
let setD = data => ({type: "SET_DATA", data: data})

export {store, setC, setB, setP, setD}
