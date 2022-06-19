import { createRouter, createWebHistory } from 'vue-router'

import TodoList from '../components/TodoList'
import Notification from '../components/Notification'
import NotFound from '../components/NotFound'

const routes = [
  { path: '/', component: TodoList },
  { path: '/noti', component: Notification },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
