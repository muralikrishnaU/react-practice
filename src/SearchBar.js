import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(){
		super();
		this.state={
			searchString:""
		}	
		
	}
	
	handleSearchInput(event){
	    
    	// this.setState({
    	// 	searchString: event.target.value
    	// })
    	
	    this.props.thisIsFunctionAsProp_updateSearchString(event.target.value)
	    console.log(event.target.value);
	}
	render() {
    return (
	    <div className='header'>
	    	<input value={this.props.searchString} onChange={event=>this.handleSearchInput(event)}/>
	    	<span> {this.props.cart.length} </span>

	    </div>
    )
	}
}
export default SearchBar