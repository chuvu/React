var React = require('react');

var Button = React.createClass({
  render: function() {
    function notify(e) {
      this.props.handler(e.target.dataset.operation);
    }
    
    return (
      <div className={ this.props.classDiv }>
        <button href='#' className={ this.props.classButton } 
                    onClick={ notify.bind(this) }
                    data-operation={ this.props.operation }
                    disabled={ this.props.disabled } >
          { this.props.value } 
        </button>
      </div>
    );
  }
});

module.exports = Button;