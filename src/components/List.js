import React from "react"
import '../index.css';
import {Link} from "react-router-dom"

function List(props) {
    let series = props.seriesName
    let linkText, path
    
    if (props.listType === "seasons") {
        linkText = "Temporada "
        path = "/" + series + "/season/"
    }
    else if (props.listType ==="characters") {
        linkText = null
        path = "/character/"
    }
    
    return (
        <ul>
            {props.list.map((value, index) => {
                return (
                    <li className="seasonLi" key={index} >
                        <Link className="seasonLi" to={`${path}${value}`}>
                            {linkText}{value}
                        </Link> 
                    </li>
                )
            })}
        </ul>   
    )
}

export default List

