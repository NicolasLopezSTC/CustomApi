/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mhw-db.com',
})

const useApi = () => {
  return { instance }
}

export default useApi
