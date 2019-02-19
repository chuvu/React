// component that renders a single record
window.RecordRow = React.createClass({

    // render a single row on a table with read, edit and delete buttons
    render: function() {
        return (
            <tr>
                <td className='text-align-center'>
                <input
                    type='checkbox'
                    className='checkboxes'
                    checked={(this.props.selectedRows && this.props.selectedRows.indexOf(this.props.product.id)) >= 0}
                    onChange={(e) => this.props.toggleOne(e.target.checked, this.props.product.id)} />
                </td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.description}</td>
                <td>${this.props.product.price}</td>
                <td>{this.props.product.category_name}</td>
                <td>
                    <a href={'#read_one?id='+this.props.product.id} className='btn btn-info m-r-1em'>
                        <span className='glyphicon glyphicon-eye-open'></span> Read One
                    </a>

                    <a href={'#update?id='+this.props.product.id} className='btn btn-primary m-r-1em'>
                        <span className='glyphicon glyphicon-edit'></span> Edit
                    </a>

                    <a href={'#delete?id='+this.props.product.id} className='btn btn-danger'>
                        <span className='glyphicon glyphicon-remove'></span> Delete
                    </a>
                </td>
            </tr>
        );
    }
});
