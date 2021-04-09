import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link, useHistory} from "react-router-dom";
import { useEffect, useState } from 'react';
// Obtenido de https://material-ui.com/es/components/autocomplete/#search-input

export default function SearchBox() {
  // const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [searchText, SetSearhText] = React.useState("");
  // const loading = open && options.length === 0;
  
  const apiGeneralUrl =
    "https://tarea-1-breaking-bad.herokuapp.com/api/characters?name=";
  const history = useHistory();

  const handleSelection = (event, newValue) => {
    // console.log(event.target)
    console.log(newValue.name)
    let name = newValue.name
    if (name !== "") {
      setOptions([]);
      let nameQuery = name.split(" ").join("+")
      history.push("/character/"+nameQuery);
      window.location.reload()
    }
  };

  const handleTextChange = ({target}) => {
    let newText = target.value
    console.log(newText)
    SetSearhText(newText)
  }

  React.useEffect(() => {
    let active = true;

    if (searchText === "") {
      setOptions([])
      return undefined;
    }

    (async () => {
      let characterUrl
      let nameQuery = searchText.split(" ").join("+")
      for (let off = 0; off<500; off+=10) {
        characterUrl = apiGeneralUrl + nameQuery + "&offset=" + String(off)
        try {
          const response = await fetch(characterUrl);
          const characters = await response.json();
          
          if (active) {
            setOptions( () => {
              let newOptions = []
              newOptions.push(...Object.keys(characters).
                map((key) => characters[key]))
              return (newOptions)
            })
          }
          if (characters.length < 10) {break}

        } catch (Error) {
          console.log("Error al hacer fetch de characters")
          if (String(Error).includes("429 Too Many Requests")) {
            setError("Error: demasiadas requests, reintenta en 24 hrs")
          }
          else {
            setError(Error)
          }
        }    
      }
    })();

    return () => {
      active = false;
    };
  }, [searchText]);

  React.useEffect(() => {
    if (error) {
        setTimeout(() => {
          setError(null)  
        }, 3500)
    }
  } , [error]) 
 
  return (
   
    <div>
      {error? 
      <p2 style={{
        color:"red",
        float:"right"}}>
        {String(error)}
      </p2>:
      <Autocomplete
        id="asynchronous-demo"
        clearOnEscape
        options={options}
        style={{ 
          width: 400 ,
          float:"right",
          marginRight: "5%"
        }}
        getOptionSelected={(option, value) => 
          option.name === value.name}
        onChange={handleSelection}
        getOptionLabel={(option) => option.name}
        // loading={loading}
        autoComplete={false}
        renderInput={(params) => (
        <TextField
          {...params}
          placeholder={"Busca un Personaje"}
          style={{
          backgroundColor: "whitesmoke",
          color:"white",
          borderColor: "whitesmoke"}}
          variant="outlined"
          required={true}
          onChange={handleTextChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                { params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        >
        </TextField>
        
        )}
      />
      }
    </div>
  );
}