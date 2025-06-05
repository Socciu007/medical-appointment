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
    return axiosInstance.get('/resources-type')
  },
  getResourceUsers: () => {
    return axiosInstance.get('/resources-type/user')
  },
  getResourceSocials: () => {
    return axiosInstance.get('/resources-type/resource-social')
  }
}

export default utilsService
