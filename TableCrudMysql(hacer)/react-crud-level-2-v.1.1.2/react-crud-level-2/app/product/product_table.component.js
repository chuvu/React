// component for the whole records table
window.RecordsTable = React.createClass({
    render: function(){

        let rows = "";
        this.props.productRecords ?
            rows = this.props.productRecords.map(function(product, i){
                    return (
                        <RecordRow
                            key={i}
                            product={product}
                            toggleOne={this.props.toggleOne}
                            selectedRows={this.props.selectedRows} />
                    );
                }.bind(this))
        : null;

        // show the whole table
        return (
            rows < 0 ?
                <div className='alert alert-danger custom-message'>No results found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th className='text-center'></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
        );
    }
});
