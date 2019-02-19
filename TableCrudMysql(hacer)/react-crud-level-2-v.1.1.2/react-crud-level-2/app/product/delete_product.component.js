// component that contains the logic to delete a product
window.DeleteProductComponent = React.createClass({

    // on mount, change header text
    componentDidMount: function(){
        changePageTitle('Delete Product');
    },

    // handle single row deletion
    onDelete: function(e){
        var productId = this.props.productId;

		// submit form data to api
        $.ajax({
            url: "http://localhost/api/product/delete.php",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify({'id' : productId}),
            success : function(response){
				window.location.replace('#');
            }.bind(this),
            error: function(xhr, resp, text){
                // show error to console
                console.log(xhr, resp, text);
            }
        });

    },

    render: function(){

        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='panel panel-default'>
                    	<div className='panel-body text-align-center'>Are you sure?</div>
                    	<div className='panel-footer clearfix'>
                    		<div className='text-align-center'>
                                <button onClick={this.onDelete} className='btn btn-danger m-r-1em'>
                                    <span className='glyphicon glyphicon-ok-sign'></span> Yes
                                </button>
                                <a href='#' className='btn btn-primary'>
                                    <span className='glyphicon glyphicon-remove-sign'></span> No
                                </a>
                    		</div>
                    	</div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        );
    }
});
