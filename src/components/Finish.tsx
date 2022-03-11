import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../utils/context'
import { AppContextType } from '../@types/state'
import RestartButton from './Buttons/RestartButton'
import NewGameButton from './Buttons/NewGameButton'

export default function Finish() {
    const { state, players } = useContext(AppContext) as AppContextType

    const getSortedScores = ():{player:number,points:number}[] =>{
        const scores = players.points.filter((points,index)=>index<state.playersNumber)
                                    .map((point,index)=>{return {player:index+1,points:point}})
        return [...scores].sort((a,b)=>b.points-a.points)
    }
    const getWinnerText = () =>{
        const scoresArray=[...players.points]
        scoresArray.sort().reverse()
        console.log("sort",scoresArray)
        if(state.playersNumber===1){
            return "You did it!"
        }else if(scoresArray[0]===scoresArray[1]){
            return "It's a tie !"
        }else{
            const scoresArray2=[...players.points]
            const maxIndex = scoresArray2.indexOf(scoresArray[0])
            return "Player "+(maxIndex+1)+" Wins!"

        }
    }

    return (
        <>{players.finished ? 
            <>
                <div className="Background"></div>
                <div className="Finish">
                    <div className="Finish__title">
                        <h1>{getWinnerText()}</h1>
                        <p className="grey">{'Game over !'}</p>
                    </div>
                    {state.playersNumber===1 ?
                        <div className="Finish__infos">
                            <div className="Finish__infos__info">
                                <div className="grey">Time Elapsed</div>
                                <div>{players.time[0]+":"+(players.time[1]+1)}</div>
                            </div>
                            <div className="Finish__infos__info">
                                <div className="grey">Moves Taken</div>
                                <div>{players.points[0]} Moves</div>
                            </div>
                        </div>
                        :
                        <div className="Finish__infos">
                            { 
                                getSortedScores().map((values)=>
                                <div className= {values.points===Math.max(...players.points) ? "Finish__infos__info winner" : "Finish__infos__info"}>
                                    <div className= {values.points===Math.max(...players.points) ? "" : "grey"}>Player {values.player} {values.points===Math.max(...players.points) ? "(winner)" : ""}</div>
                                    <div>{values.points} Pairs</div>
                                </div>
                            )}
                        </div>
                    }


                    <div className="Finish__buttons">
                        <RestartButton/>
                        <NewGameButton/>
                    </div>
                </div>
            </>
            :
        <></>}
        </>
        
    )
}
