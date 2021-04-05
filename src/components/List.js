import React from "react"
import '../index.css';

function List(props) {
    let title
    let linkText
    if (props.listType === "seasons") {
        linkText = "Temporada "
    }
    else if (props.listType ==="characters") {
        linkText = null
    }
    
    // si es un character hay que darle el nombre del character (value en el map)
    // si es una temporada, hay que darle la serie y el n° de season (index en el map)
    return (
        <div>
            <ul>
            {props.list.map((value, index) => {
                return (
                        <li className="seasonLi" key={index} >
                            <a>{linkText}{value}</a> 
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default List