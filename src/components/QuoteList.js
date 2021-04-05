import React from "react"
import '../index.css';

function QuoteList(props) {
    const title = "Citas Famosas"
    return (
        <div>
            <h4> {title} </h4>
            <ul>
                {props.list.map((value, index) => {
                    return (
                            <li key={index} >
                                <p1 className="quote">
                                    {value.quote}
                                </p1>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuoteList