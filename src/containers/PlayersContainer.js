import React , { Component }from 'react'
import PlayersDetails from '../../src/playersDetails'

const PlayersContainer = (props) => {
    return(
      <div className="players">
            {
             	props.players.map(function(eachPlayer){
                  return <PlayersDetails
	                  handleAddToCartInPlayers={(player)=>props.handleAddToCartInPlayersContainer(player)} 
	                  key={eachPlayer.playerId} 
	                  playerName={eachPlayer.playerName} 
	                  playerRole={eachPlayer.playerRole} 
	                  playerImage={eachPlayer.playerImage} 
	                  playerCountry={eachPlayer.playerCountry}
	                  playerId={eachPlayer.playerId}
	                  isAddedToCart={props.cart.indexOf(eachPlayer.playerId) >= 0}
	                  />
              })
            }
      </div>
    )
  }

export default PlayersContainer