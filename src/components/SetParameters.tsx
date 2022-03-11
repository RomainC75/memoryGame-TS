import React from 'react'
import { useContext , useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../utils/context'
import Matrix from '../models/matrix'
import { AppContextState, AppContextType } from '../@types/state';

export default function SetParameters() {
  const navigate = useNavigate()

  const { state , setState, matrix, setMatrix, players, setPlayers} = useContext(AppContext) as AppContextType
  const [ themeState , setThemeState ] = useState(state.theme)
  const [ playersNumberState , setPlayersNumberState ] = useState(state.playersNumber)
  const [ sizeState , setSizeState ] = useState(state.grid)

  const changeTheme = (val:boolean) => {
    setThemeState(val)
    state.theme=val
  }

  const changePlayersNumber = (num:number) => {
    setPlayersNumberState(num)
    state.playersNumber=num
  }

  const changeGridSize = (num:number)=>{
    setSizeState(num)
    setState({
      grid: num,
      theme: state.theme,
      userName: state.userName,
      playersNumber: state.playersNumber
    })
    console.log(state)
  }

  const startGame = ()=>{
    const matrixObj= new Matrix(state.grid)
    setMatrix({
      matrix:matrixObj.getRandomGrid(),
      temp:[-1,-1]
    })
    setPlayers({
      ...players,
      points:[0,0,0,0],
      finished:false
    })
    console.log("reset date !")
    navigate('/game/')
  }

  return (
    <div className="setParameters">

      <div className="setParameters__sub">

        <h1>memory</h1>
        <div className="paramWin">
          <div className="paramWin__inner">

            <div className="paramWin__section">
              <div className="paramWin__section__title">
                <p className="paramWin__section__title__p">Select Theme</p>
              </div>
              <div className="paramWin__section__buttons">
                <div className={"paramWin__section__buttons__button button buttonBig"+(themeState===true ? " button--active" : "")} onClick={()=>changeTheme(true)}>
                  Numbers
                </div>
                <div className={"paramWin__section__buttons__button button buttonBig"+(themeState===false ? " button--active" : "")} onClick={()=>changeTheme(false)}>
                  Icons
                </div>
              </div>
            </div>
            
            <div className="paramWin__section">
              <div className="paramWin__section__title">
                <p className="paramWin__section__title__p">Numbers of Players</p>
              </div>
              <div className="paramWin__section__buttons">
                <div className={"paramWin__section__buttons__button little button buttonLittle"+(playersNumberState===1 ? " button--active" : "")} onClick={()=>changePlayersNumber(1)}>
                  1
                </div>
                <div className={"paramWin__section__buttons__button little button buttonLittle"+(playersNumberState===2 ? " button--active" : "")} onClick={()=>changePlayersNumber(2)}>
                  2
                </div>
                <div className={"paramWin__section__buttons__button little button buttonLittle"+(playersNumberState===3 ? " button--active" : "")} onClick={()=>changePlayersNumber(3)}>
                  3
                </div>
                <div className={"paramWin__section__buttons__button little button buttonLittle"+(playersNumberState===4 ? " button--active" : "")} onClick={()=>changePlayersNumber(4)}>
                  4
                </div>
              </div>
            </div>

            <div className="paramWin__section">
              <div className="paramWin__section__title">
                <p className="paramWin__section__title__p">Grid Size</p>
              </div>
              <div className="paramWin__section__buttons">
                <div className={"paramWin__section__buttons__button button buttonBig"+(sizeState===4 ? " button--active" : "")} onClick={()=>changeGridSize(4)}>
                  4X4
                </div>
                <div className={"paramWin__section__buttons__button button buttonBig"+(sizeState===6 ? " button--active" : "")} onClick={()=>changeGridSize(6)}>
                  6X6
                </div>
              </div>
            </div>

            <div className="paramWin__section">
              <div className="paramWin__section__buttons">
                <div className="paramWin__section__buttons__buttons button startButton" onClick={()=>startGame()}>Start Game</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
