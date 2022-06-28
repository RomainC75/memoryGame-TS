import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../utils/context'
import { AppContextType } from '../@types/state'
import Box from './Box'


export default function PointsCountMulti() {
    const { players , state } = useContext(AppContext) as AppContextType
    return (
        <div className="PointsCountMulti">
            {players.points.filter((val,index)=>index<state.playersNumber)
                .map((player,index)=>
                    <Box key={index} 
                        name={`Player ${index+1}`}
                        nameMin={`P ${index+1}`}
                        value={players.points[index].toString()}
                        turn={players.turn===index ? true : false}
                        triangle={state.playersNumber>1 && players.turn===index}
                    />)}
        </div>
    )
}
