import React, { useState, useEffect } from "react"
import SelectSeasonEpisodes from "../helpers/selectSeasonEpisodes.js"
import EpisodeList from "./EpisodeList.js"

const apiGeneralUrl = "https://tarea-1-breaking-bad.herokuapp.com/api/"
//recibe el nombre de la serie, y el numero de season
// match.params
function Season({match}) {
    const {params} = match
    const [episodes, setEpisodes] = useState([])
    const [isReady, setIsReady] = useState(false)
    const title = "Episodios de Temporada " + params.season + " de " + 
        params.series.split("+").join(" ")
    const imgUrl = (params.series === "Breaking+Bad"?
    "https://i.pinimg.com/736x/39/9d/71/399d7189faab2601b0e2dd60a143207e.jpg":
    "https://vistapointe.net/images/better-call-saul-wallpaper-2.jpg")

    useEffect(() => {
        let urlEpisodes = apiGeneralUrl + "episodes?series=" + params.series
        function fetchAndSetEpisodes() {
            try {
                fetch(urlEpisodes)
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                let seasonEpisodes = SelectSeasonEpisodes(resList, params.season)
                setEpisodes(seasonEpisodes)
                setIsReady(true)
                })  
            } catch (Error) {
                console.log("Error al hacer fetch de los episodios")
                console.log(Error)
            }
        }

        fetchAndSetEpisodes()
    }, [params])

    return(
        <div>
            <br/>
            <h2 style={{color: "white"}}>
                {title}
            </h2> 
            <br/>
            <div>
                <img style={{maxWidth: "500px"}} 
                    src={imgUrl} 
                    alt={imgUrl}
                />
                {!isReady ?  <h4>Cargando episodios...</h4>: 
                <EpisodeList series={params.series} episodes={episodes} />
                }
          </div>      
        </div>
    )
}

export default Season