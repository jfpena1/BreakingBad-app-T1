import React from "react"
import '../index.css';

// debe recibir: nombre season, episodios : {...}]
function EpisodeList(props) {
    return (
        <div>
            <ul>
            {props.episodes.map((episodeInfo, index) => {
                return (
                        <li className="seasonLi" key={index} >
                            <a>Ep.{episodeInfo.episode} : {episodeInfo.title}</a>
                        </li>
                )
            })}
            </ul>
        </div>
    )
}

export default EpisodeList