import axiosInstance from './axios'

export interface PatientData {
  full_name: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  full_address: string;
  address: string;
  email: string;
  national_id: string;
  id_num: string;
  id_issue_date: string;
  id_issue_by: string;
  id_expired_date: string;
  ethnic_id: string;
  religion_id: string;
  career_id: string;
  work_place: string;
}

const appointmentService = {
  // Create new appointment
  createPatient: (data: PatientData) => {
    return axiosInstance.post('/patients', data)
  },

  // Get all appointments
  getPatients: (params?: unknown) => {
    return axiosInstance.get('/patients', { params })
  },

  // Get appointment by id
  getPatientById: (id: string) => {
    return axiosInstance.get(`/patients/${id}`)
  },

  // Update appointment
  updatePatient: (id: string, data: Partial<PatientData>) => {
    return axiosInstance.put(`/patients/${id}`, data)
  },

  // Delete appointment
  deletePatient: (id: string) => {
    return axiosInstance.delete(`/patients/${id}`)
  }
}

export default appointmentService