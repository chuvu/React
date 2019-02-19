// component that decides which main component to load: read / create / update / search
var MainApp = React.createClass({

    render: function(){

        var modeComponent = <ReadRecordsComponent
            productsPerPage="5"
            currentPage="1"
            searchedTerm="" />;

        var currentMode = this.props.location[0] || 'read';

        currentMode = currentMode.startsWith('update') ? (currentMode.split('?'))[0] : currentMode;
        currentMode = currentMode.startsWith('page') ? (currentMode.split('='))[0] : currentMode;
        currentMode = currentMode.startsWith('search') ? (currentMode.split('='))[0] : currentMode;
        currentMode = currentMode.startsWith('read_one') ? (currentMode.split('?'))[0] : currentMode;
        currentMode = currentMode.startsWith('delete') ? (currentMode.split('?'))[0] : currentMode;

        switch(currentMode){
            case 'read':
                break;

            case 'page':
                var initialPage = (this.props.location[0].split('='))[1];
                initialPage = parseInt(initialPage) <= 0 ? "1" : initialPage;
                modeComponent = <ReadRecordsComponent productsPerPage="5" currentPage={initialPage} searchedTerm="" />;
                break;

                /*
            case 'search':
                var searchedTerm = (this.props.location[0].split('='))[1];
                console.log('searchedTerm: ' + searchedTerm);
                modeComponent = <ReadRecordsComponent productsPerPage="5" currentPage="1" searchedTerm={searchedTerm} />;
                break;
                */
            case 'create':
                modeComponent = <CreateRecordComponent />;
                break;

            case 'update':
                var updateId = (this.props.location[0].split('?')[1]).split('=')[1];
                modeComponent = <UpdateRecordComponent editId={updateId} />;
                break;

            case 'read_one':
                var productId = (this.props.location[0].split('?')[1]).split('=')[1];
                modeComponent = <ReadOneProductComponent productId={productId} />;
                break;

            case 'delete':
                var productId = (this.props.location[0].split('?')[1]).split('=')[1];
                modeComponent = <DeleteProductComponent productId={productId} />;
                break;

            default:
                break;
        }

        return (
            <div className='container'>
                <div className='page-header'>
                    <h1 id='page-title'>Loading...</h1>
                </div>
                {modeComponent}
            </div>
        );
    }
});

// format numbers with commas and decimal
window.numberWithCommas = function(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

// make 'includes' method work
if (!String.prototype.includes){
	String.prototype.includes = function(search, start){
		'use strict';
		if (typeof start !== 'number') {
			start = 0;
		}

		if(start + search.length > this.length) {
			return false;
		}else{
			return this.indexOf(search, start) !== -1;
		}
	};
}

// change page title & title tag
window.changePageTitle = function(page_title){
	$('#page-title').text(page_title);
	document.title=page_title;
}

// router: split location into `/` separated parts, then render `MainApp` with it
window.handleNewWindowLocation = function(){
    let location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
    ReactDOM.render(
        <MainApp location={location} />,
        document.getElementById('content')
    );
}

// Handle the initial route and browser navigation events
handleNewWindowLocation();
window.addEventListener('hashchange', handleNewWindowLocation, false);
