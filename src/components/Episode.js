import React, { useState, useEffect } from "react"
import List from "./List"
import EpisodeUi from "./EpisodeUi"
const apiGeneralUrl = "https://tarea-1-breaking-bad.herokuapp.com/api/"

function Episode({match}) {
    const [episode, setEpisode] = useState({})
    const [isReady, setIsReady] = useState(false)
    const {params} = match

    useEffect(() => {
        let urlEpisode = apiGeneralUrl + "episodes/" + params.episodeId
        function fetchEpisode() {
            try {
                fetch(urlEpisode)
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                setEpisode(resList[0])
                setIsReady(true)
                })  
            } catch (Error) {
                console.log("Error al hacer fetch del episodio ", params.episodeId)
                console.log(Error)
            }
        }
        fetchEpisode()
    }, [])

    return(
        <div>
            {isReady? <EpisodeUi episode={episode} /> :
            <h2>Cargando capítulo...</h2>}
        </div>
    )
}

export default Episode