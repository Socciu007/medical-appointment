import axiosInstance from './axios'

export interface PatientData {
  code: string;
  full_name: string;
  date_of_birth: string;
  gender: number;
  phone_number: string;
  full_address: string;
  address: string;
  email: string;
  national_id: number;
  id_num: string;
  id_issue_date: string;
  id_issue_by: string;
  id_expired_date: string;
  ethnic_id: number;
  religion_id: number;
  career_id: number;
  work_place: string;
}

export interface RegisterData {
  patient_id: number,
  register_date: string;
  register_type: number;
  request_type: number,
  resource_visit: number,
  resource_user: number,
  is_insuarance: boolean,
  ins_id: number,
  reason: string,
  register_note: string,
  prioritize: boolean,
  priority_type: number,
}

export interface ServiceData {
  service_id: number,
  dept_service: number,
  is_pay_before: boolean,
  reg_num: string,
  patient_id: number,
  register_id: number
}

export interface ContactData {
  contact_name: string,
  year_of_birth: number,
  gender: number,
  relationship: string,
  contact_phone: string,
  work_place_address: string,
  contact_address: string,
}

export interface RegisterPatientData {
  patient: PatientData,
  register: RegisterData,
  services: ServiceData[],
  contact: ContactData
}

const patientRegisterService = {
  // Create new appointment
  createRegisterPatient: (data: RegisterPatientData) => {
    return axiosInstance.post('/registers/full-register', data)
  },

  // Get all register services
  getRegisterServices: (params?: unknown) => {
    return axiosInstance.get('/register-services', { params })
  },

  // Get all register services by filter
  getFilterRegisterServices: (params?: unknown) => {
    return axiosInstance.get('/register-services/filters', { params })
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

export default patientRegisterService