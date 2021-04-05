import React from "react"
import List from "./List"

function Episode(props) {

    const title = " Datos del Episodio:"
    const charactersTitle = "Personajes del capitulo:"
    return(
        <div>
            <div>
                    <h1> {props.data.series} </h1>
                    <h2> {props.data.title } </h2>
            </div>   
            <div className="characterInfo">
                <h3>{title}</h3> <br/>
                <ul>
                    <li>
                        Temporada: {props.data.season} 
                    </li>
                    <br/>
                    <li>
                        Fecha Lanzamiento: {
                        props.data.air_date.slice(0,9)
                        }
                    </li>
                    <br/>
                    <h4>{charactersTitle}</h4>              
                    <li>
                        <List list={props.data.characters} 
                        seriesName={props.data.series}
                        listType="characters"
                        />
                    </li>
                </ul>  
            </div>
        </div>
    )
}

export default Episode