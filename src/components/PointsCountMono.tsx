import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../utils/context'
import { AppContextType } from '../@types/state'
import Box from './Box'
import Timer from './Timer'

export default function PointsCountMono() {
    const { state, setState, players, setPlayers } = useContext(AppContext) as AppContextType
     
    return (

            <div className="PointsCountMono__boxes" >
                <Box name={"Time"}><Timer/></Box>
                <Box name={"Moves"} value={players.points[0].toString()}/>
            </div>

    )
}
