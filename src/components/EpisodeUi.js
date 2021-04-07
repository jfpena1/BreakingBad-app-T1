import React from "react"
import List from "./List"

export default function EpisodeUi(props) {
    const{episode} = props
    const title = " Datos del Episodio:"
    const charactersTitle = "Personajes del capitulo:"
    return(
        <div>
            <div>
                    <h1 style={{color: "lightgrey"}}> {episode.series} </h1>
                    <h2 style={{color: "white"}}> Episode: {episode.title } </h2>  
            <br/>
            <div className="episodeInfo" style={{float: "left"}} >
                <h3>{title}</h3> 
                <hr color="black"/><br/>
                <ul>
                    <p8 style={{color:"white"}} >
                        Temporada: {episode.season} 
                    </p8>
                    <br/>
                    <p8 style={{color:"white"}}>
                        Fecha Lanzamiento: {
                        episode.air_date.slice(0,9)
                        }
                    </p8>
                    <br/>
                    <h4>{charactersTitle}</h4>          
                    <List list={episode.characters} 
                    seriesName={episode.series}
                    listType="characters"
                    />
                </ul>
            </div>
            </div>
        </div>
    )
}