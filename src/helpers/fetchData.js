
import React from "react"

// uso de api con limit y offset:     /api/characters?limit=10&offset=10
export default function fetchData(url) {
    console.log("URL " + url + " RECIBIDA!")
    let promises = []
    for (let o = 0; o <= 500; o+=10) {
    promises.push(fetch(`${url}limit=10&offset=${o}`))
    console.log(`${url}limit=10&offset=${o}`)
    }
    Promise.all(promises)
    .then(response => {
        console.log(response)
        return response
    })
}
