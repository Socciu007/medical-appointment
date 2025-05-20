import axiosInstance from './axios'

export interface AppointmentData {
  employee: string;
  phone: string;
  time: string;
  source: string;
  referral: string;
  mxh: string;
  name: string;
  age: number;
  gender: string;
  email: string;
  type: string;
  address: string;
  addressHC: string;
  timeAppointment: string;
  status: string;
  note: string;
  services: ServiceData[];
}

export interface ServiceData {
  serviceGroup: string;
  serviceName: string;
  doctor: string;
}

const appointmentService = {
  // Create new appointment
  createAppointment: (data: AppointmentData) => {
    return axiosInstance.post('/appointments', data)
  },

  // Get all appointments
  getAppointments: (params?: unknown) => {
    return axiosInstance.get('/appointments', { params })
  },

  // Get appointment by id
  getAppointmentById: (id: string) => {
    return axiosInstance.get(`/appointments/${id}`)
  },

  // Update appointment
  updateAppointment: (id: string, data: Partial<AppointmentData>) => {
    return axiosInstance.put(`/appointments/${id}`, data)
  },

  // Delete appointment
  deleteAppointment: (id: string) => {
    return axiosInstance.delete(`/appointments/${id}`)
  }
}

export default appointmentService