import React, { useState, useEffect } from "react"
import fetchData from "../helpers/fetchData.js"
import determineNumberOfSeasons 
from "../helpers/determineNumberOfSeasons"
import SelectSeasonEpisodes from "../helpers/selectSeasonEpisodes.js"
import EpisodeList from "./EpisodeList.js"



function Home() {
    const [bbSeasons, setBbseasons] = useState([])
    const [bcsSeasons, setBcsSeasons] = useState([])

    useEffect(() => {
        let urlQuery = "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?category=Breaking+Bad&"
        const fetchEpisodes = async () => {
            try {
                let responses = fetchData(urlQuery)
                let nSeasons =  determineNumberOfSeasons
                console.log(nSeasons)
            } catch (Error) {
                console.log("Error al hacer fetch de las series y sus temporadas")
                console.log(Error)
            }
        }
            
        fetchEpisodes()
    }, [])


    return(
        <div>
            <h3>hola</h3>
        </div>
    )
}

export default Home