import Api from '@/services/Api'

export default {
  getTopics () {
    return Api().get('topic')
  },
  getTopicPage (id) {
    return Api().get(`topic/page/${id}`)
  },
  addTopicInfo (params) {
    return Api().put('topic/add', params)
  }
}
