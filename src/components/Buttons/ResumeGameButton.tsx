import React from 'react'

interface ResumeGameProps{
    setDisplayMenuState:(state:boolean)=>void;
}

export default function ResumeGameButton(props:ResumeGameProps) {
    const closeMenu = () => {
        props.setDisplayMenuState(false)
    }
    return (
        <div>
            <div className="button secondaryButton" onClick={()=>closeMenu()}>Resume Game</div>
        </div>
    )
}
