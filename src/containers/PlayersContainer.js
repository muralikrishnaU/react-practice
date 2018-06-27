import React , { Component }from 'react'
import PlayersDetails from '../../src/playersDetails'

const PlayersContainer = (props) => {
    return(
      <div className="players">
            {
             	props.players.map(function(eachPlayer){
                  return <PlayersDetails key={eachPlayer.playerId} playerName={eachPlayer.playerName} playerRole={eachPlayer.playerRole} playerImage={eachPlayer.playerImage} playerCountry={eachPlayer.playerCountry}/>
              })
            }
      </div>
    )
  }

export default PlayersContainer