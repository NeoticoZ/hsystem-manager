import { Link } from 'react-router-dom'

import {
  Container,
  Logo,
  HomeIcon,
  IndexersSection,
  LogoIcon,
  SearchIcon,
  RegisterNewIcon
} from './styles'

interface SidebarProps {
  home?: boolean
  register?: boolean
  search?: boolean
  update?: boolean
}

export function Sidebar({ home, register, search }: SidebarProps) {
  return (
    <Container>
      <Logo>
        <LogoIcon />

        <div>
          HSystem <span>Manager</span>
        </div>
      </Logo>

      <Link to="/" className={home ? 'home active' : 'home'}>
        <HomeIcon />
        <span>Início</span>
      </Link>

      <IndexersSection>
        <span>Indexadores</span>

        <div>
          <Link to="/register" className={register ? 'active' : ''}>
            <RegisterNewIcon />
            <span>Cadastrar</span>
          </Link>

          <Link to="/search" className={search ? 'active' : ''}>
            <SearchIcon />
            <span>Consultar</span>
          </Link>
        </div>
      </IndexersSection>
    </Container>
  )
}
