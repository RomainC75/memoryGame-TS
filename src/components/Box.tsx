import React from 'react'

interface BoxInfos{
    name:string;
    nameMin?:string;
    value?:string;
    turn?:boolean;
    children?:any;
    triangle?:boolean;
}

export default function Box(props:BoxInfos) {
    return (
        <div className={props.turn ? "Box yellowBox" : "Box"}>
            {props.triangle && <div className="Box__triangle"></div>}
            {props.nameMin && <div className="Box__leftValMin">{props.nameMin}</div>}
            <div className="Box__leftVal">{props.name}</div>
            <div className="Box__rightVal">{props.value ? props.value : props.children}</div>
            {props.triangle && <div className="Box__currentTurn">CURRENT TURN</div>}
            
        </div>
    )
}
