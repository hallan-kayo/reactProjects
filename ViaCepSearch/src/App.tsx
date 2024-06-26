import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setCep] = useState("")

  const [responseCep, setResponseCep] = useState("")

  const chamarAPI = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      console.log(response.data)
      setResponseCep(response.data)

    })
  }

  return (
    <>
      <div className={"topbar"}></div>
      <div className={"root"}>
        <div className={"container"}>
          <div>
            <h3 className={"title"}>BUSCADOR DE CEPS</h3>
          </div>
          <div>
            <label>
              <p>CEP</p>
              <input
              className={"inputcep"}
                placeholder='Digite o CEP'
                onChange={(e) => setCep(e.target.value)}
              />
            </label>
          </div>
          <div className={"result"}>
            <label>
              <p>Logradouro</p>
              <input type="text" value={responseCep.logradouro} disabled/>
            </label>
            <label>
              <p>Bairro</p>
              <input type="text" value={responseCep.bairro} disabled/>
            </label>
            <label>
              <p>Cidade</p>
              <input type="text" value={responseCep.localidade} disabled />
            </label>
            <label>
              <p>UF</p>
              <input type="text" value={responseCep.uf} disabled/>
            </label>
            <label>
              <p>DDD</p>
              <input type="text" value={responseCep.ddd} disabled/>
            </label>
          </div>
          <button
          onClick={()=> chamarAPI()}>Buscar</button>
        </div>
      </div>
    </>
  )
}

export default App
