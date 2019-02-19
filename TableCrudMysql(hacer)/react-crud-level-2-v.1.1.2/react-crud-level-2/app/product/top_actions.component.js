// component that contains the functionalities that appear on top of
// the records table: search by name, delete selected, export CSV and create record
window.TopActionsComponent = React.createClass({
    render: function(){
        return (
            <div>
                <SearchByName
                    onSearchSubmit={this.props.onSearchSubmit}
                    onSearchKeywordChange={this.props.onSearchKeywordChange} />

                <a href='#create' className='btn btn-primary pull-right margin-bottom-1em'>
                    <span className='glyphicon glyphicon-plus'></span> Create Record
                </a>

                <a href='http://localhost/api/product/export_csv.php' className='btn btn-info pull-right margin-bottom-1em m-r-1em'>
                    <span className='glyphicon glyphicon-download'></span> Export CSV
                </a>

                <button className='btn btn-danger pull-right margin-bottom-1em m-r-1em'
                    onClick={this.props.onDeleteSelected}>
                    <span className='glyphicon glyphicon-remove-circle'></span> Delete Selected
                </button>
            </div>
        );
    }
});
