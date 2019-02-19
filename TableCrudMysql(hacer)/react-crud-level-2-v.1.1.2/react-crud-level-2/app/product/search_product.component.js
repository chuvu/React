// component for the "search by name" functionality that appears on top of the records table
window.SearchByName = React.createClass({

    render: function() {
        return (
            <form onSubmit={this.props.onSearchSubmit}>
                <div className="input-group col-md-3 pull-left">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a name..." 
                        onChange={this.props.onSearchKeywordChange} />
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-primary" >
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
});
