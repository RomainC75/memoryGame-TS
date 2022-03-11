import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext , useState , useEffect} from 'react'
import { AppContext } from '../../utils/context'
import Matrix from '../../models/matrix'
import { AppContextState,AppContextType, PlayersContextState, MatrixContextType } from '../../@types/state';

export default function NewGame() {
    const { players , setPlayers } = useContext(AppContext) as AppContextType
    const navigate=useNavigate()
    const newGame = () => {
        setPlayers({
            ...players,
            turn:0,
            points:[0,0,0,0]
        })
        navigate('/')
    }
    return (
        <div>
            <div className="Menu__buttons__NewGame button secondaryButton" onClick={ ()=>newGame() }>New Game</div>
        </div>
    )
}
