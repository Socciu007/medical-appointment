import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage'))
const PatientManager = lazy(() => import('../pages/PatientManager'))

export const routes = [
  {
    path: '/',
    page: HomePage
  },
  {
    path: '/patient',
    page: PatientManager
  }
]