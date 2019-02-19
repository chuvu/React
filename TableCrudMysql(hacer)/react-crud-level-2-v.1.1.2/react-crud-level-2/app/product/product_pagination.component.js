// pagination component that shows below the records table
window.PaginationComponent = React.createClass({

    render: function(){

        let pagination_class = this.props.searchedTerm==undefined
                            ? "products-pagination-normal"
                            : "products-pagination-search";

        // creating page elements, one for each page
        let pageIndicators = [];
        if(this.props.productPaging!=undefined){

            this.props.productPaging.pages.map(function(item, i){
                pageIndicators.push(
                    <li
                        onClick={this.props.onPageChange.bind(null, item.url)}
                        className={item.current_page=="yes" ? "active":""}
                        key={i}>
                        <a>{item.page}</a>
                    </li>
                );
            }.bind(this));
        }

        return(
            this.props.productPaging ?
                <ul className={"pagination pull-left padding-bottom-2em m-b-20px " + pagination_class}>
                    {
                        this.props.productPaging.first ?
                            <li onClick={this.props.onPageChange.bind(null, this.props.productPaging.first)}>
                                <a>First Page</a>
                            </li>
                            : null
                    }

                    {pageIndicators}

                    {
                        this.props.productPaging.last ?
                            <li onClick={this.props.onPageChange.bind(null, this.props.productPaging.last)}>
                                <a>Last Page</a>
                            </li>
                            : null
                    }
                </ul>
            : null
        );

    }
});
