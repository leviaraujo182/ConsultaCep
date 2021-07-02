import React from 'react';
import './App.css';
import { Card, CardHeader, CardContent, TextField, Divider, Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Card className="card_content">
        <div className="content_header">
          <label className="txtconsulte">CONSULTE O SEU CEP!</label>
          <TextField label="CEP" className="txtfield"/>
          <Button variant="outlined" className="btnsearch">Pesquisar</Button>
        </div>
        <div className="content_bottom">
            Nenhum registro encontrado
        </div>

      </Card>
    </div>
  );
}

export default App;
