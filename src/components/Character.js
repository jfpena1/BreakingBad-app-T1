import React, { useState, useEffect } from "react"
import SeasonList from "./SeasonList"
import '../App.css';

/* 
 name, occupation (array), img, status, nickname, bbAppearances, 
bcsAppearences, portrayed, category
*/

function Character(props) {

    const [name, setName] = useState("")
    const [ocuppations, setOccupations] = useState([])
    const [img, setImg] = useState("")
    const [status, setStatus] = useState("")
    const [nickname, setNickname] = useState("")
    const [bbAppearances, setBbAppearances] = useState([])
    const [bcsAppearances, setBcsAppearances] = useState([])
    const [portrayed, setPortrayed] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        let queryName = props.name.split(" ").join("+")
        let urlCharacter = "https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=" + 
        queryName
        console.log(urlCharacter)
        try {
            fetch(urlCharacter)
            .then(resRaw =>  resRaw.json())
            .then( resList => {
                let res = resList[0]
                setName(res.name)
                setOccupations(res.occupation)
                setImg(res.img)
                setStatus(res.status)
                setNickname(res.nickname)
                setBbAppearances(res.appearance)
                setBcsAppearances(res.better_call_saul_appearance)
                setPortrayed(res.portrayed)
                setCategory(res.category)
            })

        } catch (Error) {
            console.log(Error)
        }
    }, [])

    // returns a comma-separated list of things
    function listToString(list, listName) {

        return(
            list.length > 0 ? 
            listName + ": " + list.join(", ") :
            null 
        )
    }


    return(
        <div className="App">
            <header className="App-header">
                <p>
                Character Component!
                </p>
            </header>
            <div> 
                <img className="characterPhoto" src={img} />
            </div>
            <div className="characterInfo">
                <ul>
                    <li>
                        Nombre: {name} 
                    </li>
                    <br/>
                    <li>
                        Status: {status} 
                    </li>
                    <br/>
                    <li>
                        Sobrenombre: {nickname} 
                    </li>
                    <br/>
                    <li>
                        Actuado por: {portrayed} 
                    </li>
                    <br/>
                    <li>
                        Series en las que aparece: {category} 
                    </li>
                    
                    {bbAppearances.length > 0 ?
                    <li>
                        <SeasonList seasons={bbAppearances} 
                        seriesName="Breaking Bad"
                        />
                    </li>:
                    null
                    }
                    
                    {bcsAppearances.length > 0 ?
                    <li>
                        <SeasonList seasons={bcsAppearances} 
                        seriesName="Better Call Saul"
                        />
                    </li>:
                    null
                    }
                    <br />
                    <li>
                        {listToString(ocuppations, "Trabajos")}
                    </li>
                    <br/>
                </ul>
            </div>
        </div>
    )

    }

export default Character
