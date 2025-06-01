import axiosInstance from './axios'

const appointmentService = {
  getAppointments: async () => {
    const response = await axiosInstance.get('/appointments')
    return response
  }
}

export default appointmentService