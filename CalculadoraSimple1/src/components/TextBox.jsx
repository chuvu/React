var React = require('react');

var TextBox = React.createClass({
  notify: function() {
    let item = this.refs.inputElement;

    this.props.changeHandler(item.dataset.variable, item);
  },
  render: function() {   
    return (
      <div className={ this.props.divClass }
           ref={ this.props.id }>
          <input type="text"
                 placeholder={ this.props.placeholder} 
                 ref="inputElement" 
                 className={ this.props.textBoxClass }
                 disabled={ this.props.disabled } 
                 onChange={ this.notify }
                 data-variable={ this.props.variable } 
                 />
      </div>
    );
  }
});

module.exports = TextBox;