/******************** READ ONE PRODUCT COMPONENTS ********************/
// component that contains the logic to update a product
window.ReadOneProductComponent = React.createClass({

    getInitialState: function() {
        // Get this product fields from the data attributes we set on the
        // #content div, using jQuery
        return {
            id: 0,
            name: '',
            description: '',
            price: 0,
            category_name: ''
        };
    },

    // on mount, fetch all categories and stored them as this component's state
    componentDidMount: function() {

        var productId = this.props.productId;

		this.serverRequestProd = $.get("http://localhost/api/product/read_one.php?id=" + productId,
            function (product) {
                this.setState({selectedCategoryId: product.category_id});
                this.setState({id: product.id});
                this.setState({name: product.name});
                this.setState({description: product.description});
                this.setState({price: product.price});
				this.setState({category_name: product.category_name});
            }.bind(this));

        $('.page-header h1').text('Read Product');
    },

    // on unmount, kill categories fetching in case the request is still pending
    componentWillUnmount: function(){
        this.serverRequestProd.abort();
    },

    render: function(){

        return (
            <div>
                <a href='#' className='btn btn-primary pull-right margin-bottom-1em'>
                    <span className='glyphicon glyphicon-list'></span> Read Records
                </a>

                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>

                        <tr>
                            <td>Description</td>
                            <td>{this.state.description}</td>
                        </tr>

                        <tr>
                            <td>Price ($)</td>
                            <td>${this.state.price}</td>
                        </tr>

                        <tr>
                            <td>Category</td>
                            <td>{this.state.category_name}</td>
                        </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});
/******************** END READ ONE PRODUCT COMPONENTS ********************/
