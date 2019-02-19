/******************* UPDATE RECORDS COMPONENTS ***********************************/
// component that contains the logic to update a record
window.UpdateRecordComponent = React.createClass({

    getInitialState: function() {
        // initial values of this component
        return {
            categories: [],
            selectedCategoryId: 0,
            id: 0,
            name: '',
            description: '',
            price: 0,
            successUpdate: null
        };
    },

    // on mount, fetch all categories and stored them as this component's state
    // read single product as well
    componentDidMount: function(){

        this.serverRequestCat = $.get("http://localhost/api/category/read.php", function (categories) {
            this.setState({
                categories: categories.records
            });
        }.bind(this));

        var editId = this.props.editId;
        this.serverRequestProd = $.get("http://localhost/api/product/read_one.php?id=" + editId,
            function(product){
                if(product!=null){
                    this.setState({selectedCategoryId: product.category_id});
                    this.setState({id: product.id});
                    this.setState({name: product.name});
                    this.setState({description: product.description});
                    this.setState({price: product.price});
					this.setState({category_id: product.category_id});
                }
            }
        .bind(this));

        changePageTitle('Update Record');
    },

    // on unmount, stop categories and product fetching in case the request is still pending
    componentWillUnmount: function(){
        this.serverRequestCat.abort();
        this.serverRequestProd.abort();
    },

    // handle category change
    onCategoryChange: function(e){
        this.setState({selectedCategoryId: e.target.value});
    },

    // handle name change
    onNameChange: function(e){
        this.setState({name: e.target.value});
    },

    // handle description change
    onDescriptionChange: function(e){
        this.setState({description: e.target.value});
    },

    // handle price change
    onPriceChange: function(e){
        this.setState({price: e.target.value});
    },

    // handle save changes button clicked
    onSave: function(e){

		// data in the form
        var form_data={
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId
        };

        // submit form data to api
        $.ajax({
            url: "http://localhost/api/product/update.php",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response){
                this.setState({successUpdate: response['message']});
            }.bind(this),
            error: function(xhr, resp, text){
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        e.preventDefault();
    },

    // render the component
    // this includes: message box, update form, read records button
    render: function() {

        var categoriesOptions = this.state.categories.map(function(category){
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        return (
            <div>
            {
                this.state.successUpdate == "Product was updated." ?
                    <div className='alert alert-success'>
                        Record was updated.
                    </div>
                : null
            }

            {
                this.state.successUpdate == "Unable to update product." ?
                    <div className='alert alert-danger'>
                        Unable to update record. Please try again.
                    </div>
                : null
            }

            {
                !this.state.name ?
                    <div className='alert alert-danger text-center'>
                        No record found
                    </div>
                :null
            }

            <a href='#' className='btn btn-primary pull-right margin-bottom-1em'>
                <span className='glyphicon glyphicon-list'></span> Read Records
            </a>

            {
                this.state.name ?
                    <form onSubmit={this.onSave}>
                        <table className='table table-bordered table-hover'>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        type='text'
                                        className='form-control'
                                        value={this.state.name}
                                        required
                                        onChange={this.onNameChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea
                                        type='text'
                                        className='form-control'
                                        required
                                        value={this.state.description}
                                        onChange={this.onDescriptionChange}>
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>Price ($)</td>
                                <td>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min='0'
                                        className='form-control'
                                        value={this.state.price}
                                        required
                                        onChange={this.onPriceChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    <select
                                        onChange={this.onCategoryChange}
                                        className='form-control'
                                        value={this.state.selectedCategoryId}>
                                        <option value="-1">Select category...</option>
                                        {categoriesOptions}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button className='btn btn-primary' onClick={this.onSave}>
                                        Save Changes
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                : null
            }
            </div>
        );
    }
});
/******************* END UPDATE RECORDS COMPONENTS ***********************************/
