import React, { useState } from 'react';
import './App.css';
import { Card, TextField, Button } from '@material-ui/core'
import { consultarCep } from 'correios-brasil'

import CardData from './components/CardData'

interface cepData {
  cep: number
  city: string
}

function App() {

  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [dd, setDD] = useState('')


  function ConsultaCep(){
    consultarCep(cep).then((response:any)=>{
      const obj:any = Object.values(response)
      setCity(obj[4])
      setUf(obj[5])
      setDD(obj[8])

    })

  }

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
    const pesq = event.target.value
    setCep(pesq)
  }

  return (
    <div className="App">
      <Card className="card_content">
        <div className="content_header">
          <label className="txtconsulte">CONSULTE O SEU CEP!</label>
          <TextField label="CEP" className="txtfield" value={cep} onChange={inputHandler}/>
          <Button variant="outlined" className="btnsearch" onClick={ConsultaCep}>Pesquisar</Button>
        </div>
        <div className="content_bottom">
           {city.length > 0 ? "Dados encontrados" : "Nenhum registro encontrado"}
        </div>

      </Card>
    </div>
  );
}

export default App;
