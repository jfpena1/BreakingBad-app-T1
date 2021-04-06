import React from "react"
import '../index.css';
import {Link} from "react-router-dom"

function EpisodeList(props) {
    return (
        <div className="episodeInfo">
            <ul>
            {props.episodes.map((episodeInfo, index) => {
                return (
                        <h4 className="seasonLi" key={index} >
                            <Link style={{
                                color: "whitesmoke", 
                                textDecoration:"none"}}
                                to={`/episode/${episodeInfo.episode_id}`}
                            >
                            <a>Ep.{episodeInfo.episode} : {episodeInfo.title}</a>
                            </Link>
                            
                        </h4>
                )
            })}
            </ul>
        </div>
    )
}

export default EpisodeList