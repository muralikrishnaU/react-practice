import React, { Component } from 'react'
import PlayersContainer from './containers/PlayersContainer'
import SearchBar from './SearchBar' 

const URL = 'https://api.myjson.com/bins/gsxjq'
class App extends Component {
  constructor(){
  	super();
  	this.state={
  		dynamicPlayers:[]
  		}
  	}
   render(){
    return( 
    	<div className = 'header'>
    		<h1>THE ALLTIME WORLD ODI XI</h1>
    		<div>
    		<SearchBar />
	    		<div className= 'App'>
	    			<PlayersContainer players={this.state.dynamicPlayers}/>
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
