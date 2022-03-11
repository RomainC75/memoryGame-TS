import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../utils/context'
import { AppContextType } from '../../@types/state';

export default function NewGameButton() {
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
            <div className="Menu__buttons__NewGameButton button secondaryButton" onClick={ ()=>newGame() }>New Game</div>
        </div>
    )
}
