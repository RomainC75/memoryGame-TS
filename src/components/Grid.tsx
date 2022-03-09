import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useContext , useState , useEffect} from 'react'
import { AppContext } from '../utils/context'
import Matrix from '../models/matrix'
import { AppContextState,AppContextType } from '../@types/state';

interface Props{
    grid:number;
}
// interface styleObject{
//     [key:string]: any;
// }

export const Griddiv = styled.div`
    display: grid;
    grid-template: ${ (props:Props)=>props.grid===4 ? 'repeat(4,25%)/repeat(4,25%)' : 'repeat(6,16%)/repeat(6,16%)' };
    width: 572px;
    height: 572px;
`

const numberDefaultCSS:React.CSSProperties={
    width:'80%',
    height:'80%',
    borderRadius:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"44px",
    fontWeight:"900",
    cursor:"pointer"
};
const hiddenNumber:React.CSSProperties = {
    background:"#304859",
    color:"#304859",
};
const discoveredNumber:React.CSSProperties = {
    background:"#BCCED9",
    color:"white"
};
const waitingNumber:React.CSSProperties = {
    background:"#FDA214",
    color:"white"
};

export default function Grid() {
    const { state } = useContext(AppContext) as AppContextType

    const matrixObject = new Matrix(state.grid)
    const [ matrix , setMatrix ] = useState<[number,number][][] | undefined>(undefined)
    useEffect(()=>{
        setMatrix(state.matrix)
    },[])

    const toggleState = (column:number , row:number)=>{
        if(matrix){
            const matrixBuffer:[number,number][][] =  matrix;
            //matrixBuffer[column][row][1]= matrixBuffer[column][row][1]==1 ? 0 : 1;
            if(matrixBuffer[column][row][1]===0){
                matrixBuffer[column][row][1]=1
            }else if(matrixBuffer[column][row][1]===1){
                matrixBuffer[column][row][1]=-1
            }else if(matrixBuffer[column][row][1]===-1){
                matrixBuffer[column][row][1]=0
            }
            setMatrix(matrixBuffer)
            console.log(matrix[column][row][1])
            console.log(matrix)
            emptyToggle()
        }
    }

    const [ empty, setEmpty ] = useState(true)
    const emptyToggle = () => {
        setEmpty(!empty)
    }

    console.log(matrix)
    return (
        <div>
            <Griddiv className="grid" grid={state.grid} onClick={()=>emptyToggle()}>
                {matrix && matrix.map((column,columnIndex)=>{
                    return (
                        column.map((row,rowIndex)=>{
                            return(
                                <div key={`${columnIndex}-${rowIndex}`} style={ matrix[columnIndex][rowIndex][1]===0 && {...numberDefaultCSS,...hiddenNumber} || matrix[columnIndex][rowIndex][1]==-1 && {...numberDefaultCSS, ...discoveredNumber} || {...numberDefaultCSS, ...waitingNumber} }
                                    onClick={(el)=>toggleState( columnIndex,rowIndex )}>
                                    <div >{row[0]}</div>
                                </div>
                            )
                        })
                    )
                })}
            </Griddiv>
        </div>
        
    )
}
