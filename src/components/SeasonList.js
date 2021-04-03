import React from "react"

function SeasonList(props) {
    const title = "Temporadas de " + props.seriesName +
    " en las que aparece"

    return (
        <div>
            <p> {title} </p>
            <ul>
            {props.seasons.map((value, index) => {
                return (
                        <li key={index} >
                            <a>Temporada {value}
                            </a>
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default SeasonList