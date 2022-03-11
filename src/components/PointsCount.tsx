import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../utils/context'
import { AppContextType } from '../@types/state'

import PointsCountMono from './PointsCountMono'
import PointsCountMulti from './PointsCountMulti'

export default function PointsCount() {
    const { state } = useContext(AppContext) as AppContextType
    console.log("STATE : ",state)
    return (
        <div>
            {state.playersNumber===1 ? <PointsCountMono/> : <PointsCountMulti/>}
            
        </div>
    )
}
