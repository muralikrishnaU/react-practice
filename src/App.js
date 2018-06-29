import React, { Component } from 'react'
import PlayersContainer from './containers/PlayersContainer'
import SearchBar from './SearchBar' 

const URL = 'https://api.myjson.com/bins/gsxjq'
class App extends Component {
  constructor(){
  	super();
  	this.state={
  		dynamicPlayers:[],
  		searchString: "",
  		cart: [],
  		filteredPlayers: []
  		}
  	}
  	updateSearchString(searchStringAsInpupt){
  		this.setState({
  			searchString: searchStringAsInpupt
  		}
  	}
  	handleAddToCart(newPlayer){
	    console.log("This is the message from App and this is the player that is clicked",newPlayer)
	    let newCart = [...this.state.cart,newPlayer]
	    this.setState({
	      cart: newCart
    	})
  	}
   render(){
    return( 
    	<div className = 'header'>
    		<h1>THE ALLTIME WORLD ODI XI</h1>
    		<div className= 'App'>
    			<SearchBar searchString={this.state.searchString} cart={this.state.cart} thisIsFunctionAsProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)}/>
	    		<div>
	    			<PlayersContainer cart={this.state.cart} players={this.state.dynamicPlayers} handleAddToCartInPlayersContainer={(player)=>this.handleAddToCart(player)}/>
	    		</div>
	    	</div>
    	</div>	
    );	
	}  

componentDidMount(){
	
  	fetch(URL)
  	.then(res => res.json())
  	.then(players=>{
  		console.log("This is Data from API",players);
  		this.setState({dynamicPlayers:players});
  	})
  	// .then(function (res){
  	// 	return res.json();
  	// })
  	// .then(function (players){
  	// 	console.log("This is Data from API",players);
  	// 	this.setState({dynamicPlayers:players});
  	// })
   	.catch(function(error){
  		console.log("error");
  	})
	}	
}

export default App;
