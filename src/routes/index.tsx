import { Routes as AppRoutes, Route } from 'react-router-dom'

import EditPage from '../pages/EditPage'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Search from '../pages/Search'

export const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
      <Route path="/edit/:indexerId" element={<EditPage />} />
    </AppRoutes>
  )
}
