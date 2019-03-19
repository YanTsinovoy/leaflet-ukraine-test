import React from 'react';
import ReactDOM from 'react-dom';
import ColorInput from './';

it('renders without crashing', () => {
  const inp = document.createElement('div');
  ReactDOM.render(<ColorInput/>, inp);
});
