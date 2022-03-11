import React from 'react'
import RestartButton from './Buttons/RestartButton'
import NewGameButton from './Buttons/NewGameButton'
import ResumeGameButton from './Buttons/ResumeGameButton'

interface DisplayMenuProp{
    setDisplayMenuState:(state:boolean)=>void;
}

export default function DisplayMenu(props:DisplayMenuProp) {
    return (
        <>
            <div className="DisplayMenu__background"></div>
            <div className="DisplayMenu__menu">
                <RestartButton setDisplayMenuState={props.setDisplayMenuState}/>
                <NewGameButton/>
                <ResumeGameButton setDisplayMenuState={props.setDisplayMenuState}/>
            </div>
        </>
    )
}
