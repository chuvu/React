var React = require('react');
var ReactDOM = require('react-dom');
var Calculator = require('./components/Calculator.jsx');

var NAV_BUTTONS = [
  { value: '+ Add',
    operation: 'add'
  },
  { value: '- Subtract',
    operation: 'subtract'
  },
  { value: 'x Multiply',
    operation: 'multiply'
  },
  { value: '/ Divide',
    operation: 'divide'
  }
];

ReactDOM.render(<Calculator navButtons={ NAV_BUTTONS } />, document.getElementById('app'));
