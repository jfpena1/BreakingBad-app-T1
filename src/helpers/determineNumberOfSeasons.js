const determineNumberOfSeasons = (episodeList) => {
    let seasons = episodeList.map(e =>{
        return parseInt(e.season, 10)
    })
    let uniqueSeasons = [... new Set(seasons)]
    let maxSeason = Math.max(...uniqueSeasons)
    return maxSeason
}

export default determineNumberOfSeasons