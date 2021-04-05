import React, { useState, useEffect } from "react"
import fetchdata from "../helpers/fetchData.js"
import '../App.css';
import CharacterUi from "./CharacterUi.js"
/* 
 name, occupation (array), img, status, nickname, bbAppearances, 
bcsAppearences, portrayed, category
*/
const apiGeneralUrl = "https://tarea-1-breaking-bad.herokuapp.com/api/"

function Character(props) {

    const [name, setName] = useState("")
    const [occupations, setOccupations] = useState([])
    const [img, setImg] = useState("")
    const [status, setStatus] = useState("")
    const [nickname, setNickname] = useState("")
    const [bbAppearances, setBbAppearances] = useState([])
    const [bcsAppearances, setBcsAppearances] = useState([])
    const [portrayed, setPortrayed] = useState("")
    const [category, setCategory] = useState("")
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        let queryName = props.name.split(" ").join("+")
        let urlCharacter = apiGeneralUrl + "characters?name=" + queryName
        let urlQuotes = apiGeneralUrl + "quote?author=" + queryName
        console.log(urlCharacter)
        console.log(urlQuotes)

        function setCharacterData() {
            try {
                fetch(urlCharacter)
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                let characterRes = resList[0] 
                // setting character feautures
                setName(characterRes.name)
                setOccupations(characterRes.occupation)
                setImg(characterRes.img)
                setStatus(characterRes.status)
                setNickname(characterRes.nickname)
                setBbAppearances(characterRes.appearance)
                setBcsAppearances(characterRes.better_call_saul_appearance)
                setPortrayed(characterRes.portrayed)
                setCategory(characterRes.category)
                })
            } catch (Error) {
                console.log("Error al hacer fetch de datos del personaje")
                console.log(Error)
            }
        }

        function setCharacterQuotes() {
            try {
                fetch(urlQuotes)
                .then(resRaw =>  resRaw.json())
                .then(resList => {
                let quoteRes = resList
                setQuotes(quoteRes)
                })  
            } catch (Error) {
                console.log("Error al hacer fetch de quotes del personaje")
                console.log(Error)
            } 
        }

        setCharacterData()
        setCharacterQuotes()
    }, [])

    return(
        <div className="App">
            <header className="App-header">
                <p>
                    Character Component!
                </p>
            </header>
            <CharacterUi 
                name={name}
                img={img} 
                status={status}
                nickname={nickname} 
                portrayed={portrayed}
                category={category} 
                bbAppearances={bbAppearances}
                bcsAppearances={bcsAppearances} 
                occupations={occupations}
                quotes={quotes}
            />
        </div>
    )
    }

export default Character
