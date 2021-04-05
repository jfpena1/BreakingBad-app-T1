import React, { useState, useEffect } from "react"
import SelectSeasonEpisodes from "../helpers/selectSeasonEpisodes.js"
import EpisodeList from "./EpisodeList.js"

const apiGeneralUrl = "https://tarea-1-breaking-bad.herokuapp.com/api/"
//recibe el nombre de la serie, y el numero de season

function Season(props) {
    const [episodes, setEpisodes] = useState([])
    const [isReady, setIsReady] = useState(false)
    const title = "Episodios de Temporada " + props.season + " de " + props.series

    useEffect(() => {
        let querySeries = props.series.split(" ").join("+")
        let urlEpisodes = apiGeneralUrl + "episodes?series=" + querySeries
        function fetchAndSetEpisodes() {
            try {
                fetch(urlEpisodes)
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                let seasonEpisodes = SelectSeasonEpisodes(resList, props.season)
                console.log(seasonEpisodes)
                console.log(props.series)
                setEpisodes(seasonEpisodes)
                setIsReady(true)
                })  
            } catch (Error) {
                console.log("Error al hacer fetch de los episodios")
                console.log(Error)
            }
        }

        fetchAndSetEpisodes()
    }, [])


    return(
        <div>
            <h4>{!isReady ?  "Cargando episodios...": title }</h4>
            <EpisodeList series={props.series} episodes={episodes} />
        </div>
    )
}

export default Season