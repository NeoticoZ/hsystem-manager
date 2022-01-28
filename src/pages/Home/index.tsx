import { Sidebar } from '../../components/Sidebar'

import { Container, HomeContent, CheckedIcon } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar home />

      <HomeContent>
        <h1>Funcionalidades implementadas</h1>
        <ul>
          <li>
            <CheckedIcon /> Consulta de indexadores
          </li>
          <li>
            <CheckedIcon />
            Cadastro de novos indexadores
          </li>
          <li>
            <CheckedIcon />
            Atualização de indexadores
          </li>
          <li>
            <CheckedIcon />
            Remoção de indexadores
          </li>
        </ul>
      </HomeContent>
    </Container>
  )
}

export default Home
