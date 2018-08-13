import axios from 'axios'

const target = process.env.NODE_ENV === 'development' ? 'http://localhost:9018' : `http://seanistar.me:9018`

export default() => {
  console.log()
  return axios.create({
    baseURL: target
  })
}
