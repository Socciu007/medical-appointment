import axiosInstance from './axios'

const utilsService = {
  getPriorityTypes: () => {
    return axiosInstance.get('/priority-types')
  },
  searchDistrict: (name: string) => {
    return axiosInstance.get(`/administrative-divisions/search?name=${name}`)
  },
  getDoctors: () => {
    return axiosInstance.get('/doctors')
  },
  getServices: () => {
    return axiosInstance.get('/services')
  },
  getResources: () => {
    return axiosInstance.get('/resources-types')
  },
  getResourceUsers: () => {
    return axiosInstance.get('/resources-types/user')
  },
  getResourceSocials: () => {
    return axiosInstance.get('/resources-types/social')
  }
}

export default utilsService
