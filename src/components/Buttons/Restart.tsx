import React from 'react'
import { useContext , useState , useEffect} from 'react'
import { AppContext } from '../../utils/context'
import Matrix from '../../models/matrix'
import { AppContextType} from '../../@types/state';


export default function Restart() {
    const { state, matrix, setMatrix, players, setPlayers } = useContext(AppContext) as AppContextType

    const restart = () => {
        const matrixObj=new Matrix(state.grid)
        setMatrix({
            matrix:matrixObj.getRandomGrid(),
            temp:[-1,-1]
        })
        setPlayers({
            points:[0,0,0,0],
            turn:0,
            time:[0,0],
            finished:false,
            restarted:true
        })
    }

    return (
        <div className="Menu__buttons__Restart button primaryButton" onClick={ ()=>restart() }>Restart</div>
    )
}
