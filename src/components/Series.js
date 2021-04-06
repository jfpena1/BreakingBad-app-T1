import React, { useState, useEffect } from "react"
import _ from 'lodash'
import determineNumberOfSeasons 
from "../helpers/determineNumberOfSeasons"
import List from "./List.js"

function Series(props) {
    const [seasons, setSeasonNumber] = useState([])

    useEffect(() => {
        let queryName = props.seriesName.split(" ").join("+")
        let urlQuery = "https://tarea-1-breaking-bad.herokuapp.com/api/episodes?category=" 
            + queryName
        let fetchSeasonsData = () => {
            try {  
                fetch(urlQuery) 
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                    let maxSeason = determineNumberOfSeasons(resList) + 1
                    setSeasonNumber(_.range(1,maxSeason))
                })
            }
            catch (Error) {
                console.log("Error al hacer fetch de las temporadas de ", queryName)
                console.log(Error)
            }
        }  
        fetchSeasonsData()
    }, [])

    return(
        <div className="episodeInfo">
            <List list={seasons} 
            seriesName={props.seriesName}
            listType="seasons"
            />
        </div>
    )
}

export default Series