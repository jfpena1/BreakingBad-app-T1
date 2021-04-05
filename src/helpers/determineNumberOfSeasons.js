import Math from "math"

const determineNumberOfSeasons = (episodeList) => {
    let seasons = episodeList.map(e =>{
        return parseInt(e.season, 10)
    })
    let maxSeason = Math.max(seasons)
    return maxSeason
}

export default determineNumberOfSeasons