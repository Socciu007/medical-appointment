import { lazy } from 'react'

// const HomePage = lazy(() => import('../pages/HomePage'))
const PatientManager = lazy(() => import('../pages/PatientManager'))
const PatientReception = lazy(() => import('../pages/PatientReception'))

export const routes = [
  {
    path: '/',
    page: PatientReception
  },
  {
    path: '/patient',
    page: PatientManager
  },
  {
    path: '/patient-reception',
    page: PatientReception
  }
]