import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../utils/context'
import Matrix from '../../models/matrix'
import { AppContextType} from '../../@types/state';

interface RestartButtonProp{
    setDisplayMenuState?:(state:boolean)=>void;
}

export default function RestartButton(props:RestartButtonProp) {
    const { state, setMatrix, setPlayers } = useContext(AppContext) as AppContextType

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
        props.setDisplayMenuState && props.setDisplayMenuState(false)
    }

    return (
        <div className="Menu__buttons__RestartButton button primaryButton" onClick={ ()=>restart() }>Restart</div>
    )
}
