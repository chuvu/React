// component that contains all the logic and other smaller components
// that form the Read Records view
window.ReadRecordsComponent = React.createClass({

    getInitialState: function(){
        return {
            inputPage: null,
            search_keywords: "",
            selectedRows: [],
            products: []
        };
    },

    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function(){
		this.serverRequest = $.get("http://localhost/api/product/read_paging.php",
            function (products){
                this.setState({
                    products: products.records,
                    paging: products.paging
                });
            }.bind(this));

        changePageTitle('Read Records');
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function(){
        this.serverRequest.abort();
    },

    // change page, called when a page number is clicked
    onPageChange: function(url){

        this.serverRequest = $.get(url, function (products){
            this.setState({
                products: products.records,
                paging: products.paging
            });
        }.bind(this));

    },

    // update search term. called when the magnifying glass button is clicked
    onSearchSubmit: function(e){

        let search_keywords = this.state.search_keywords;

        this.onPageChange(
            "http://localhost/api/product/search_paging.php?s=" + search_keywords
        );

        changePageTitle('Search "' + search_keywords + '"');

        // prevent whole page refresh
        e.preventDefault();
    },

    // set keyword from search input box
    onSearchKeywordChange(event){
        this.setState({search_keywords: event.target.value});
    },

    // handle multiple row deletion
    onDeleteSelected: function(){

        // needed so component can be used inside boobox
        let this_component=this;

        // check if at least one record was selected
        if(this_component.state.selectedRows.length<=0){
            bootbox.alert("<h4>Please select at least one record.</h4>");
        }else{
            // bootbox for good looking 'confirm pop up'
            bootbox.confirm({
    		    message: "<h4>Are you sure?</h4>",
    		    buttons: {
    		        confirm: {
    		            label: '<span class="glyphicon glyphicon-ok"></span> Yes',
    		            className: 'btn-danger'
    		        },
    		        cancel: {
    		            label: '<span class="glyphicon glyphicon-remove"></span> No',
    		            className: 'btn-primary'
    		        }
    		    },

    		    callback: function (result){

                    if(result==true){

                        // submit ids to api
            			$.ajax({
            				url: "http://localhost/api/product/delete_selected.php",
            				type : "POST",
            				contentType : 'application/json',
            				data : JSON.stringify({'ids' : this_component.state.selectedRows}),
            				success : function(response) {

                                // update component state by removing the products we just deleted
                                this_component.componentDidMount();
                                this_component.setState({selectedRows: []});

            				},
            				error: function(xhr, resp, text){
            					// show error to console
            					console.log(xhr, resp, text);
            				}
            			});
                    }

                }
            });
        }
    },

    // handle selection of a single row checkbox
    toggleOne: function(checked, id){
        if(checked){
            this.setState({selectedRows: this.state.selectedRows.concat([id])});
        }else{
            this.setState({
                selectedRows :
                this.state.selectedRows.filter((el) => el !== id)
            });
        }
    },

    // render the records table with other functions
    render: function(){

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent
                    onSearchSubmit={this.onSearchSubmit}
                    onSearchKeywordChange={this.onSearchKeywordChange}
                    onDeleteSelected={this.onDeleteSelected} />

                <RecordsTable
                    productRecords={this.state.products}
                    toggleAll={this.toggleAll}
                    toggleOne={this.toggleOne}
                    selectedRows={this.state.selectedRows} />

                <PaginationComponent
                    productPaging={this.state.paging}
                    isSearch={this.props.searchedTerm}
                    onInputPageChange={this.onInputPageChange}
                    onPageChange={this.onPageChange}
                    goToInputPage={this.goToInputPage} />
            </div>
        );
    }
});
