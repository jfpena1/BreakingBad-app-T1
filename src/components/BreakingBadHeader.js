import React from "react"
import '../BreakingBad.css'
import SearchBox from "./SearchBox"
import {Link} from "react-router-dom"
// Obtenido de https://codepen.io/NateGriffin/pen/alEqg

function BreakingBadHeader() {
    return(
        <div>
            <SearchBox/>
            <p>
                <span class="seasonNum">T1</span>
                <span style={{marginLeft: "1%"}} class="B br">Br</span>eaking
                <span class="episodeNum">IIC3103</span> 
                <span class="B">AP</span>I  
            </p> <br/> 
            <Link to="/"> 
                    <h3 
                        style={
                            {color:"whitesmoke", 
                            textDecoration:"none"
                            }
                        }>
                        Home
                    </h3>
            </Link>
        <hr/>   
        </div>
    )
}

export default BreakingBadHeader