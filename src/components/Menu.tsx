import React from 'react'
import Restart from './Buttons/Restart'
import NewGame from './Buttons/NewGame'


export default function Menu() {
    return (
        <div className="Menu">
            <div>memory</div>
            <div className="Menu__buttons">
                <Restart/>
                <NewGame/>
            </div>
        </div>
    )
}
