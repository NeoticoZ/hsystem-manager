import React, { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '../../components/Button'
import { Sidebar } from '../../components/Sidebar'

import { api } from '../../services/api'

import { Container, EditPageContent } from './styles'

const EditPage: React.FC = () => {
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  const handleUpdateIndexer = async (e: FormEvent) => {
    e.preventDefault()

    const hasSymbol = symbol ? symbol : ''
    const hasName = name ? name : ''

    await api
      .patch(`/indexadores/${params.indexerId}`, {
        simbolo: hasSymbol,
        nome: hasName
      })
      .then(response => {
        toast.success(response.data.message)
        navigate('/search')
      })
  }

  const handleDeleteIndexer = async (e: FormEvent) => {
    e.preventDefault()

    await api.delete(`/indexadores/${params.indexerId}`).then(response => {
      toast.success(response.data.message)
      navigate('/search')
    })
  }

  return (
    <Container>
      <Sidebar search />

      <EditPageContent>
        <h1>Editar indexador [id: {params.indexerId}]</h1>

        <form onSubmit={handleUpdateIndexer}>
          <div>
            <label htmlFor="symbol">Novo símbolo</label>
            <input
              id="symbol"
              type="text"
              onChange={event => setSymbol(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name">Novo nome</label>
            <input
              id="name"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className="buttons">
            <button className="removeButton" onClick={handleDeleteIndexer}>
              Remover
            </button>

            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </EditPageContent>
    </Container>
  )
}

export default EditPage
