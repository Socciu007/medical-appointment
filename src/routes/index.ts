import { lazy } from 'react'

// const HomePage = lazy(() => import('../pages/HomePage'))
const PatientManager = lazy(() => import('../pages/PatientManager'))
const PatientReception = lazy(() => import('../pages/PatientReception'))
const AppointmentManager = lazy(() => import('../pages/AppointmentManager'))
const AddAppointment = lazy(() => import('../pages/AddAppointment'))
const ExaminePatient = lazy(() => import('../pages/ExaminePatient'))
const ProtocolConfig = lazy(() => import('../pages/ProtocolConfig'))
const ProtocolManager = lazy(() => import('../pages/ProtocolManager'))
const FeeManager = lazy(() => import('../pages/FeeManager'))
const PriceManager = lazy(() => import('../pages/PriceManager'))
const AddPrice = lazy(() => import('../pages/AddPrice'))
const PatientInformation = lazy(() => import('../pages/PatientInfomation'))
export const routes = [
  {
    path: '/',
    page: PatientReception
  },
  {
    path: '/patients',
    page: PatientManager
  },
  {
    path: '/patient-reception',
    page: PatientReception
  },
  {
    path: '/appointment',
    page: AppointmentManager
  },
  {
    path: '/add-appointment',
    page: AddAppointment
  },
  {
    path: '/examine',
    page: ExaminePatient
  },
  {
    path: '/protocol',
    page: ProtocolConfig
  },
  {
    path: '/protocols',
    page: ProtocolManager
  },
  {
    path: '/fee',
    page: FeeManager
  },
  {
    path: '/price',
    page: PriceManager
  },
  {
    path: '/add-price',
    page: AddPrice
  },
  {
    path: '/patients/:id',
    page: PatientInformation
  }
]