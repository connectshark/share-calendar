import { createRouter, createWebHistory } from 'vue-router/auto'
const history = createWebHistory()

const router = createRouter({
  history,
  scrollBehavior () {
    return {
      top: 0
    }
  }
})
export default router