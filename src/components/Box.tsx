import React from 'react'

interface BoxInfos{
    name:string;
    value?:string;
    turn?:boolean;
    children?:any;
    triangle?:boolean;
}

export default function Box(props:BoxInfos) {
    return (
        <div className={props.turn ? "Box yellowBox" : "Box"}>
            {props.triangle && <div className="Box__triangle"></div>}
            <div className="Box__leftVal">{props.name}</div>
            <div className="Box__rightVal">{props.value ? props.value : props.children}</div>
        </div>
    )
}
