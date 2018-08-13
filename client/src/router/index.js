import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import AddPost from '@/components/AddPost'
import EditPost from '@/components/EditPost'
import Topics from '@/components/Topics'
import Authors from '@/components/Authors'
import TopicPage from '@/components/TopicPage'
import AddTopic from '@/components/AddTopic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Authors
    },
    {
      path: '/add-topic',
      name: 'add-topic',
      component: AddTopic
    },
    {
      path: '/topic-page/:id',
      name: 'topic-page',
      props: true,
      component: TopicPage
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics,
      children: []
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors
    },
    {
      path: '/posts',
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
