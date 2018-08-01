import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import AddPost from '@/components/AddPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/add',
      name: 'addpost',
      component: AddPost
    },
    {
      path: '/posts/:id/edit',
      name: 'editpost',
      component: EditPost
    }
  ]
})
