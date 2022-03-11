import React from 'react'

interface MenuButtonProps{
    displayMenuState:boolean;
    setDisplayMenuState:(state:boolean)=>void;
}

export default function MenuButton(props:MenuButtonProps){
    const DisplayMenuFunction = () => {
        props.setDisplayMenuState(true)
    }
    return (
        <div>
            <div className="Menu__buttons__MenuButton button primaryButton" onClick={()=>DisplayMenuFunction()}>Menu</div>
        </div>
    )
}
