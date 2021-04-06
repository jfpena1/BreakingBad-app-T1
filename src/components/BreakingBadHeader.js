import React from "react"
import '../BreakingBad.css'
import {Link} from "react-router-dom"
// Obtenido de https://codepen.io/NateGriffin/pen/alEqg

function BreakingBadHeader() {
    return(
        <div>
            <p>
                <span class="seasonNum">T1</span>
                <span class="B br">Br</span>eaking
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
        </div>
    )
}

export default BreakingBadHeader