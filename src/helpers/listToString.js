import React from "react"
import '../App.css';
// returns a comma-separated list of things
function listToString(list, listName) {

    return(
        list.length > 0 ? 
        listName + ": " + list.join(", ") :
        null 
    )
}


export default listToString