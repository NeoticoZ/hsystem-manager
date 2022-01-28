import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { toast } from 'react-toastify'

import { CustomButton } from '../../components/Button/styles'
import { Sidebar } from '../../components/Sidebar'

import { api } from '../../services/api'

import {
  Container,
  EditIcon,
  RightArrowIcon,
  LeftArrowIcon,
  SearchContent,
  TableOfIndexers,
  PaginationButtons
} from './styles'

interface ResultsData {
  id: number
  nome: string
  simbolo: string
  dataCadastro: string
  dataAlteracao: string | null
}

const Search: React.FC = () => {
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize] = useState(2)
  const [totalCount, setTotalCount] = useState(0)
  const [orderByDescending, setOrderByDescending] = useState(false)
  const [searchResults, setSearchResults] = useState<ResultsData[]>([])

  // Change checkbox input state
  const handleOnChange = () => {
    setOrderByDescending(!orderByDescending)
  }

  const handleSearchIndexers = async (e: FormEvent) => {
    e.preventDefault()

    await api
      .get(
        `/indexadores?nome=${name}&simbolo=${symbol}&orderByDescending=${orderByDescending}&page=${page}&size=${pageSize}`
      )
      .then(response => {
        if (response.data.data.length === 0) {
          toast.error('Nenhum resultado encontrado')

          setPage(1)
          setTotalCount(0)
          setSearchResults([])

          return
        }

        const indexerData = response.data.data.map((data: ResultsData) => {
          return {
            id: data.id,
            nome: data.nome,
            dataCadastro: format(new Date(data.dataCadastro), 'dd MMM yyyy', {
              locale: ptBR
            }),
            dataAlteracao: data.dataAlteracao,
            simbolo: data.simbolo
          }
        })

        const total = response.headers['x-total-count']

        setSearchResults([...indexerData])

        setTotalCount(parseInt(total))
      })
  }

  const handleGoToNextPage = async () => {
    const nextPage = page + 1
    const verifyIfNextPageIsValid = nextPage <= totalCount ? nextPage : page

    await api
      .get(
        `/indexadores?nome=${name}&simbolo=${symbol}&orderByDescending=${orderByDescending}&page=${verifyIfNextPageIsValid}&size=${pageSize}`
      )
      .then(response => {
        const indexerData = response.data.data.map((data: ResultsData) => {
          return {
            id: data.id,
            nome: data.nome,
            dataCadastro: format(new Date(data.dataCadastro), 'dd MMM yyyy', {
              locale: ptBR
            }),
            dataAlteracao: data.dataAlteracao,
            simbolo: data.simbolo
          }
        })

        setSearchResults([...indexerData])

        setPage(verifyIfNextPageIsValid)
      })
  }

  const handleGoToPreviousPage = async () => {
    const nextPage = page - 1
    const verifyIfPreviousPageIsValid = nextPage > 0 ? nextPage : page

    await api
      .get(
        `/indexadores?nome=${name}&simbolo=${symbol}&orderByDescending=${orderByDescending}&page=${verifyIfPreviousPageIsValid}&size=${pageSize}`
      )
      .then(response => {
        const indexerData = response.data.data.map((data: ResultsData) => {
          return {
            id: data.id,
            nome: data.nome,
            dataCadastro: format(new Date(data.dataCadastro), 'dd MMM yyyy', {
              locale: ptBR
            }),
            dataAlteracao: data.dataAlteracao,
            simbolo: data.simbolo
          }
        })

        setSearchResults([...indexerData])

        setPage(verifyIfPreviousPageIsValid)
      })
  }

  return (
    <Container>
      <Sidebar search />

      <SearchContent>
        <h1>Consultar indexadores</h1>

        <form onSubmit={handleSearchIndexers}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="symbol">Símbolo</label>
            <input
              id="symbol"
              type="text"
              onChange={event => setSymbol(event.target.value)}
            />
          </div>

          <div className="check">
            <input
              id="descending"
              type="checkbox"
              checked={orderByDescending}
              onChange={handleOnChange}
            />
            <label htmlFor="descending">Ordem decrescente</label>
          </div>
          <CustomButton type="submit">Consultar</CustomButton>
        </form>

        <TableOfIndexers>
          <thead>
            {searchResults.length > 0 && (
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Símbolo</th>
                <th colSpan={2}>Data</th>
              </tr>
            )}
          </thead>
          <tbody>
            {searchResults.map(result => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.nome}</td>
                <td>{result.simbolo}</td>
                <td>{result.dataCadastro}</td>
                <td>
                  <Link to={`/edit/${result.id}`}>
                    <EditIcon />
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </TableOfIndexers>

        <PaginationButtons>
          {page - 1 > 0 && (
            <button onClick={handleGoToPreviousPage}>
              <LeftArrowIcon />
              Anterior
            </button>
          )}

          {page < totalCount / pageSize && (
            <button className="nextButton" onClick={handleGoToNextPage}>
              Próximo
              <RightArrowIcon />
            </button>
          )}
        </PaginationButtons>
      </SearchContent>
    </Container>
  )
}

export default Search
