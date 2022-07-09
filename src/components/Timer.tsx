import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { AppContext } from '../utils/context'
import { AppContextType } from '../@types/state'

const Timer = (props:any) => {
    const { players , setPlayers } = useContext(AppContext) as AppContextType
    const { initialMinute = 0 , initialSeconds = 0 } = props;
    const [ minutes, setMinutes ] = useState( initialMinute );
    const [ seconds, setSeconds ] =  useState( initialSeconds );

    useEffect(()=>{
        if( !players.finished ){
            if(players.restarted){
                setPlayers({
                    ...players,
                    time:[0,0],
                    restarted:false
                })
                setMinutes(0)
                setSeconds(0)
            }else{
                let myInterval = setInterval( () => {
                    setSeconds( seconds + 1);
                    if ( seconds === 59 ) {
                        setMinutes( minutes + 1);
                        setSeconds( 0 );
                    }
                    setPlayers({
                        ...players,
                        time:[ minutes , seconds ]
                    })
                }, 1000)
                return ()=> {
                    clearInterval( myInterval );
                  };
            }
        }
        
    });

    return (
        <div className="time">
        { minutes === 0 && seconds === 0
            ? null
            : <p > { minutes }:{ seconds < 10 ?  `0${ seconds }` : seconds }</p> 
        }
        </div>
    )
}

export default Timer;