var React = require('react');
var TextBox = require('./TextBox.jsx');
var Button = require('./Button.jsx');

var Calculator = React.createClass({
  INIT_STATE: { a: 0,
                b: 0,
                placeholderText: 'Enter a number ...',
                resultBox: '',
                aClass: 'input-box',
                bClass: 'input-box',
                aDisabled: false,
                bDisabled: false,
                buttonsDisabled: 'disabled' },
  operations: {
    'add': function() {
      return this.state.a + this.state.b;
    },
    'subtract': function() {
      return this.state.a - this.state.b;
    },
    'multiply': function() {
      return this.state.a * this.state.b;
    },
    'divide': function() {
      return this.state.a / this.state.b;
    }
  },
  getInitialState: function() {
    return this.INIT_STATE; 
  },
  updateNumbers: function(variable, reference) { 
    var val = parseFloat(reference.value);
    var varClass = [variable + 'Class'];
    
    if (typeof val === 'number' && !isNaN(val)) {
      if (this.state[variable + 'Class'].indexOf('invalid-input') > -1) {
        this.setState({
          [varClass]: 'input-box' 
        })
      }
      
      this.setState({
        [variable]: val,
        buttonsDisabled: ''
      });
    } else {
      this.setState({
        [varClass]: [varClass] + ' invalid-input',
        buttonsDisabled: 'disabled'
      });
    }
  },
  triggerOperation: function(operation) {
    var result = this.operations[operation].call(this);
    
    this.setState({
        aDisabled: 'disabled',
        bDisabled: 'disabled',
        buttonsDisabled: 'disabled'
      });

    this.refs.resultBox.refs.inputElement.value = result;
  },
  resetForm: function() {
    function resetElement(itemName, placeholder, disabled) {
      this.refs[itemName].refs.inputElement.value = ''; // Value must be empty f. placeholder to appear.
      this.refs[itemName].refs.inputElement.disabled = disabled;
      this.refs[itemName].refs.inputElement.placeholder = placeholder;
    }
    
    resetElement.call(this, 'a', this.INIT_STATE.placeholderText);
    resetElement.call(this, 'b', this.INIT_STATE.placeholderText);
    resetElement.call(this, 'resultBox', this.INIT_STATE.resultBox, 'disabled');
   
    this.setState({
      a: 0,
      b: 0,
      aClass: 'input-box',
      bClass: 'input-box',
      buttonsDisabled: 'disabled'
    });
  },
  render: function() {
    var that = this;
    
    var navButtons = this.props.navButtons.map(function(button) {
      return (
        <div>
          <Button value={ button.value } classDiv="large-3 medium-6 column"
                  classButton="calculation-method nav-button"
                  handler={ that.triggerOperation } operation={ button.operation } disabled={ that.state.buttonsDisabled }/>
        </div>
      );
    });
    
    return (
      <div className="calculator">
        
        <div className="row">
          <h1>Simple calculator</h1>
        </div>
        
        <div className="row">
          <TextBox divClass="large-6 columns"
                   placeholder={ this.state.placeholderText }
                   id="a" textBoxClass={ this.state.aClass }
                   ref="a"
                   value={ this.state.a }
                   changeHandler={ this.updateNumbers }
                   variable="a"
                   disabled={ this.state.aDisabled }
                   />
          <TextBox divClass="large-6 columns"
                   placeholder={ this.state.placeholderText }
                   id="b" textBoxClass={ this.state.bClass }
                   ref="b"
                   value={ this.state.b }
                   changeHandler={ this.updateNumbers }
                   variable="b"
                   disabled={ this.state.bDisabled }
                   />
        </div>
        
        <div className="row">
          { navButtons }
        </div>
        
        <div className="row">
          <TextBox divClass="medium-9 columns"
                   placeholder={ this.INIT_STATE.resultBox }
                   ref="resultBox" textBoxClass="input-box"
                   disabled="disabled" />
          <Button value="Clear" classDiv="medium-3 columns"
                  classButton="attention nav-button"
                  handler={ this.resetForm } />
        </div>     
      </div>
    );
  }
});

module.exports = Calculator;

