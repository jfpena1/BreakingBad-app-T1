import React from "react"
import List from "./List"
import QuoteList from "./QuoteList"
import listToString from "../helpers/listToString.js"
import '../App.css'
import '../index.css'


function CharacterUi(props) {
    const title = "Datos del Personaje"
    const seasonsBbTitle = "Temporadas de Breaking Bad en las que aparece: "
    const seasonsBcsTitle = "Temporadas de Better Call Saul en las que aparece: "
    return( 
        <div>
            <div>
                <h2 style={{
                    color: "white",  
                    float: "left"}}> {props.name} </h2> 
            </div><br/><br/>
            <img  
                    style={{maxWidth: "450px", float: "left"}} 
                    className="characterPhoto" 
                    src={props.img} 
                />
            <div className="characterQuotes">
                <QuoteList list={props.quotes} />
            </div>
                <div className="characterInfo">
                        <h4> {title} </h4>
                        <ul>
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
                                {listToString(props.occupations, "Trabajos")}
                            </li>
                            <br/>
                            <h4>{seasonsBbTitle}</h4>
                            {props.bbAppearances.length > 0 ?
                            <li>
                                <List list={props.bbAppearances} 
                                seriesName="Breaking+Bad"
                                listType="seasons"
                                />
                            </li>:
                            <p6>Ninguna</p6>
                            }
                            <h4>{seasonsBcsTitle}</h4>
                            {props.bcsAppearances.length > 0 ?
                            <li>
                                <List list={props.bcsAppearances} 
                                seriesName="Better+Call+Saul"
                                listType="seasons"
                                />
                            </li>:
                            <p6>Ninguna</p6>
                            }
                            <br />
                        </ul>
                </div>
        </div>
    )
}

export default CharacterUi