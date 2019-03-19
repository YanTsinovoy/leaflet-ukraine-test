import React from 'react';

const ColorInput = p => (
  <input type="color" defaultValue={p.color} onChange={p.change}/>
)

export default ColorInput
