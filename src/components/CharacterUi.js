import React from "react"
import List from "./List"
import QuoteList from "./QuoteList"
import listToString from "../helpers/listToString.js"
import '../App.css'


function CharacterUi(props) {
    const title = "Datos del Personaje"
    const seasonsBbTitle = "Temporadas de Breaking Bad en las que aparece: "
    const seasonsBcsTitle = "Temporadas de Better Call Saul en las que aparece: "
    return( 
        <div>
            <div> 
                <img className="characterPhoto" src={props.img} />
            </div>
            <div>
                <div className="characterInfo">
                        <h4> {title} </h4>
                        <ul>
                            <li>
                                Nombre: {props.name} 
                            </li>
                            <br/>
                            <li>
                                Status: {props.status} 
                            </li>
                            <br/>
                            <li>
                                Sobrenombre: {props.nickname} 
                            </li>
                            <br/>
                            <li>
                                Actuado por: {props.portrayed} 
                            </li>
                            <br/>
                            <li>
                                Series en las que aparece: {props.category} 
                            </li>
                            <h4>{seasonsBbTitle}</h4>
                            {props.bbAppearances.length > 0 ?
                            <li>
                                <List list={props.bbAppearances} 
                                seriesName="Breaking Bad"
                                listType="seasons"
                                />
                            </li>:
                            <p>Ninguna</p>
                            }
                            <h4>{seasonsBcsTitle}</h4>
                            {props.bcsAppearances.length > 0 ?
                            <li>
                                <List list={props.bcsAppearances} 
                                seriesName="Better Call Saul"
                                listType="seasons"
                                />
                            </li>:
                            <p>Ninguna</p>
                            }
                            <br />
                            <li>
                                {listToString(props.occupations, "Trabajos")}
                            </li>
                        </ul>
                </div>
                <div className="characterQuotes">
                    <QuoteList list={props.quotes} />
                </div>
            </div>
        </div>
    )
}

export default CharacterUi