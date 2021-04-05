export default function SelectSeasonEpisodes(allEpisodesJson, season) {
    let seasonEpisodes = allEpisodesJson.filter(e => e.season === season)
    return seasonEpisodes
}