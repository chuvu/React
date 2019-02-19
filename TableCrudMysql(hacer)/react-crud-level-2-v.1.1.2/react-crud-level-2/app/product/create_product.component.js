/******************* CREATE RECORDS COMPONENTS ***************************************/
// component that contains the logic to create a new record
window.CreateRecordComponent = React.createClass({

    // initial values of this component
    getInitialState: function() {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null
        };
    },

    // on mount, fetch all categories and stored them in this component's state
    componentDidMount: function() {
        this.serverRequest = $.get("http://localhost/api/category/read.php", function (categories) {
            this.setState({
                categories: categories.records
            });
        }.bind(this));
        changePageTitle('Create Record');
    },

    // on unmount, stop categories fetching in case the request is still pending
    componentWillUnmount: function(){
        this.serverRequest.abort();
    },

    // handle category change
    onCategoryChange: function(e) {
        this.setState({selectedCategoryId: e.target.value});
    },

    // handle name change
    onNameChange: function(e) {
        this.setState({name: e.target.value});
    },

    // handle description change
    onDescriptionChange: function(e) {
        this.setState({description: e.target.value});
    },

    // handle price change
    onPriceChange: function(e) {
        this.setState({price: e.target.value});
    },

    // handle save button clicked
    onSave: function(e){

		// data in the form
        var form_data={
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId
        };

        // submit form data to api
        $.ajax({
            url: "http://localhost/api/product/create.php",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify(form_data),
            success : function(response) {

                // api message
                this.setState({successCreation: response['message']});

                // empty form
                this.setState({name: ""});
                this.setState({description: ""});
                this.setState({price: ""});
                this.setState({selectedCategoryId: -1});

            }.bind(this),
            error: function(xhr, resp, text){
                // show error to console
                console.log(xhr, resp, text);
            }
        });

        e.preventDefault();
    },

    // render the component
    render: function() {

        var categoriesOptions = this.state.categories.map(function(category){
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        // return message box, 'create product' form
        return (
            <div>
                {
                    this.state.successCreation == "Product was created." ?
                        <div className='alert alert-success'>
                            Record was saved.
                        </div>
                    : null
                }

                {
                    this.state.successCreation == "Unable to create product." ?
                        <div className='alert alert-danger'>
                            Unable to save record. Please try again.
                        </div>
                    : null
                }

                <a href='#' className='btn btn-primary pull-right margin-bottom-1em'>
                    <span className='glyphicon glyphicon-list'></span> Read Records
                </a>

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
                                        type='number'
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
                                        Save
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

});
/******************* END CREATE RECORDS COMPONENTS ***********************************/
