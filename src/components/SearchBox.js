import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link, useHistory} from "react-router-dom";
import { useEffect, useState } from 'react';
// Obtenido de https://material-ui.com/es/components/autocomplete/#search-input

export default function SearchBox() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [error, setError] = React.useState(null);
  const loading = open && options.length === 0;
  
  const apiGeneralUrl =
    "https://tarea-1-breaking-bad.herokuapp.com/api/characters?offset=";
  const history = useHistory();

  const handleChange = (event, newValue) => {
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

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      let characterUrl
      for (let off = 0; off<500; off+=10) {
        characterUrl = apiGeneralUrl + String(off)
        try {
          const response = await fetch(characterUrl);
          const characters = await response.json();
          if (active) {
            setOptions( prevOptions => {
              let newOptions = prevOptions
              newOptions.push(...Object.keys(characters).
                map((key) => characters[key]))
              return (newOptions)
            })
            console.log(options)
          }
          if (characters.length < 10) {break}
        } catch (Error) {
          console.log("Error al hacer fetch de characters")
          console.log(Error)
          setError(Error)
        } 
        
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
      
    }
  }, [open]);

  React.useEffect(() => {
        if (error) {
            setTimeout(() => {
              setError(null)  
            }, 3000)
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
        style={{ 
          width: 400 ,
          float:"right",
          marginRight: "5%"
        }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);

        }}
        getOptionSelected={(option, value) => 
          option.name === value.name}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
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
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress 
                size={20} />
                ) : null}
                {
                params.InputProps.endAdornment}
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