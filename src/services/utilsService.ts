import axiosInstance from './axios'

const utilsService = {
  getPriorityTypes: () => {
    return axiosInstance.get('/priority-types')
  },
  searchDistrict: (name: string) => {
    return axiosInstance.get(`/administrative-divisions/search?name=${name}`)
  }
}

export default utilsService
