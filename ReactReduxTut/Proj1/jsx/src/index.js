// 1) inport React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of theat Element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<MyApp />);

