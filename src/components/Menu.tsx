import React from 'react'
import { useState } from 'react'
import RestartButton from './Buttons/RestartButton'
import NewGameButton from './Buttons/NewGameButton'
import MenuButton from './Buttons/MenuButton'
import DisplayMenu from './DisplayMenu'

export default function Menu() {
    const [ displayMenuState, setDisplayMenuState ] = useState<boolean>(false)
    return (
        
        <div className="Menu">
            { displayMenuState && <DisplayMenu setDisplayMenuState={setDisplayMenuState}/>}
            <h1 className="Menu__memory">memory</h1>
            <div className="Menu__buttons">
                <RestartButton/>
                <NewGameButton/>
                <MenuButton displayMenuState={displayMenuState} setDisplayMenuState={setDisplayMenuState}/>
            </div>
        </div>
    )
}
