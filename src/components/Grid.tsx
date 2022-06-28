import React from 'react'
import styled from 'styled-components'
import { useContext , useState , useEffect} from 'react'
import { AppContext } from '../utils/context'
import { AppContextType, PlayersContextState } from '../@types/state';
import Icon from './Icon'

interface Props{
    grid:number;
}

const includedInMatrix = ( matrix:[number,number][][] , grid:number , val:number ):boolean => {
    for( let i=0 ; i<grid ; i++){
        for( let j=0 ; j<grid ; j++){
            if(matrix[i][j][1]===val){
                return true
            }
        }
    }
    return false
}

export default function Grid() {
    const { state, matrix, setMatrix, players, setPlayers } = useContext(AppContext) as AppContextType
    const [ pause, setPause ] = useState<boolean>(false)
    //const [ finished , setFinished ] = useState<boolean>(false)
    const [ empty, setEmpty ] = useState<boolean>(true)

    useEffect(()=>{
        setMatrix({
            ...matrix,
            temp:[-1,-1]
        })
    },[])

    const emptyToggle = () => {
        setEmpty(!empty)
    }

    const removeOranges = () =>{
        const matrixBuffer:[number,number][][] =  matrix.matrix;
        for(let i=0 ; i<state.grid ; i++){
            for(let j=0 ; j<state.grid ; j++){
                if(matrixBuffer[i][j][1]===1){
                    matrixBuffer[i][j][1]=0
                }
            }
        }
    }

    const toggleState = ( column:number , row:number )=>{
        if(matrix){
            const matrixBuffer:[number,number][][] =  matrix.matrix;
            const playersBuffer:PlayersContextState= players
            //////////////
            // 0:hide
            // 1:orange
            // -1:gris
            //////////////
            if(pause){
                console.log("unpaused")
                removeOranges()
                setPause(false)
                setMatrix({
                    matrix:matrixBuffer,
                    temp:[-1,-1]
                }) 
            }else if(matrix.matrix[column][row][1]===0){
                //no previous selection
                if(JSON.stringify(matrix.temp)==="[-1,-1]" && !includedInMatrix(matrix.matrix, state.grid,1)){
                    matrixBuffer[column][row][1]=1
                    setMatrix({
                        matrix:matrix.matrix,
                        temp:[column,row]
                    })              
                //with previous selection 
                }else{
                    if(matrix.matrix[column][row][0]===matrix.matrix[matrix.temp[0]][matrix.temp[1]][0]){
                        //same value
                        // -> -1
                        matrixBuffer[column][row][1]=-1
                        matrixBuffer[matrix.temp[0]][matrix.temp[1]][1]=-1
                        setMatrix({
                            matrix:matrixBuffer,
                            temp:[-1,-1]
                        }) 
                        // -> points ++
                        playersBuffer.points[playersBuffer.turn]++
                        setPlayers(playersBuffer)
                        
                    }else{
                        //not the same value
                        //flip the coin
                        matrixBuffer[column][row][1]=1
                        const temp=matrix.temp
                        setMatrix({
                            matrix:matrixBuffer,
                            temp:temp
                        })
                        //pause 
                        setPause(true)
                        //perdu -> next Player ! 
                        console.log("turn ",players.turn , "playersNumber",state.playersNumber)
                        setPlayers({
                            ...players,
                            turn: players.turn < state.playersNumber-1 ? players.turn+1 : 0
                        }) 
                    }                
                }
                //1 player !
                if(state.playersNumber===1){
                    setPlayers({
                        ...players,
                        points:[players.points[0]+1,0,0,0]
                    })
                }
            console.log(matrix.matrix[column][row][1])
            console.log(matrix.temp)
            }
            if(!includedInMatrix(matrix.matrix,state.grid,0) && !includedInMatrix(matrix.matrix,state.grid,0)){
                setPlayers({
                    ...players,
                    finished:true
                })
            }
        }
    }

    return (
        <div>
            {players.finished ? <div>FINISHED !!!</div> : <></>}
            <div className={state.grid==4 ? "grid griddiv griddiv__template4" : "grid griddiv griddiv__template6"} onClick={()=>emptyToggle()}>
                {'matrix' in matrix && matrix.matrix.map((column,columnIndex)=>{
                    return (
                        column.map((row,rowIndex)=>{
                            return(
                                <div key={`${columnIndex}-${rowIndex}`} 
                                    className={ (matrix.matrix[columnIndex][rowIndex][1]===0 && "numberDefaultCSS hiddenNumber") 
                                        || (matrix.matrix[columnIndex][rowIndex][1]===-1 && "numberDefaultCSS discoveredNumber") 
                                        || "numberDefaultCSS waitingNumber" }
                                    onClick={(el)=>toggleState( columnIndex,rowIndex )}>
                                    <div 
                                        style={{display:"flex"}}>{state.theme ? row[0] : 
                                        <Icon iconNumber={matrix.matrix[columnIndex][rowIndex][0]}/>  }
                                    </div>
                                </div>
                            )
                        })
                    )
                })}
            </div>
        </div>        
    )
}
