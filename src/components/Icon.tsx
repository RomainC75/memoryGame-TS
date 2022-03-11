import React from 'react'
import { FaAndroid, FaBluetooth,FaDeskpro, FaEdgeLegacy, FaDiscord, FaAngular, FaGithub, FaPython, FaSass, FaRust, FaRebel, FaReact, FaSketch, FaStackOverflow, FaUnity, FaPhp, FaJs, FaFirefox, FaVuejs } from "react-icons/fa";

interface FASelect{
    iconNumber:number;
}

export default function Icon(props:FASelect) {
    switch(props.iconNumber){
        case 1:
            return (<FaAndroid/>)
        case 2:
            return (<FaBluetooth/>)
        case 3:
            return (<FaEdgeLegacy/>)
        case 4:
            return (<FaDiscord/>)
        case 5:
            return (<FaAngular/>)
        case 6:
            return (<FaGithub/>)
        case 7:
            return (<FaPython/>)
        case 8:
            return (<FaRebel/>)
        case 9:
            return (<FaReact/>)
        case 10:
            return (<FaRust/>)
        case 11:
            return (<FaSass/>)
        case 12:
            return (<FaSketch/>)
        case 13:
            return (<FaStackOverflow/>)
        case 14:
            return (<FaUnity/>)
        case 15:
            return (<FaPhp/>)
        case 16:
            return (<FaJs/>)
        case 17:
            return (<FaFirefox/>)
        case 18:
            return (<FaVuejs/>)
        default:
            return (<FaDeskpro/>)
    }
}
