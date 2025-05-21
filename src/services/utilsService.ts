import axiosInstance from './axios'

const utilsService = {
  getPriorityTypes: () => {
    return axiosInstance.get('/priority-types')
  }
}

export default utilsService
