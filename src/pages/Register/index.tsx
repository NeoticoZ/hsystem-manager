import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { CustomButton } from '../../components/Button/styles'
import { Sidebar } from '../../components/Sidebar'

import { api } from '../../services/api'

import { Container, RegisterContent } from './styles'

const Register: React.FC = () => {
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')

  const handleCreateNewIndexer = async (e: FormEvent) => {
    e.preventDefault()

    await api
      .post('/indexadores', {
        simbolo: symbol,
        nome: name
      })
      .then(response => toast.success(response.data.message))
      .catch(err => toast.error(err.response.data.errors.errorMessage))

    setSymbol('')
    setName('')
  }

  return (
    <Container>
      <Sidebar register />

      <RegisterContent>
        <h1>Cadastrar novo indexador</h1>

        <form onSubmit={handleCreateNewIndexer}>
          <div>
            <label htmlFor="symbol">Símbolo</label>
            <input
              id="symbol"
              type="text"
              value={symbol}
              onChange={event => setSymbol(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </div>

          <CustomButton type="submit">Enviar</CustomButton>
        </form>
      </RegisterContent>
    </Container>
  )
}

export default Register
