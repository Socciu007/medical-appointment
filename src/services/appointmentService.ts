/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from './axios'

const appointmentService = {
  getAppointments: async () => {
    const response = await axiosInstance.get('/appointments')
    return response
  },
  createAppointment: async (data: any) => {
    const response = await axiosInstance.post('/appointments', data)
    return response
  }
}

export default appointmentService