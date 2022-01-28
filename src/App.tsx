import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Routes } from './routes'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <Routes />

      <ToastContainer autoClose={3000} theme="colored" />

      <GlobalStyles />
    </>
  )
}

export default App
