import React from 'react'
import Menu from './Menu'
import Grid from './Grid'
import PointsCount from './PointsCount'
import Finish from './Finish'
export default function Game() {
    return (
        <div>
           <Menu/>
           <Grid/> 
           <PointsCount/>
           <Finish/>
        </div>
    )
}
