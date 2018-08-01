import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://seanistar.me:9018`
  })
}
