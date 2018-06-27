import React, {Component} from 'react'

class SearchBar extends Component{
	constructor(){
		super();
		this.state={
			inputString:""
		}	
		this.updateInput = this.updateInput.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	updateInput(event){
		this.setState({name : event.target.value});
	}
	handleInput(){
	    const finalInput= this.state.name;
	    console.log(finalInput);
	}
	render() {
    return (
      <div className="myInput">  
      	<input type="text" onChange={this.updateInput}/>
      	<button type="submit" onClick={this.handleInput}>Search</button>
      </div>
    )
	}
}
export default SearchBar