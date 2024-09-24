import { createRouter, createWebHistory } from 'vue-router'
import ProfileConteiner from '../components/ProfileConteiner.vue'
import ExperienceConteiner from '@/components/ExperienceConteiner.vue'
import ProjectsConteiner from '@/components/ProjectsConteiner.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProfileConteiner
  },
  {
    path: '/experiencias',
    name: 'experience',
    component: ExperienceConteiner
  },
  {
    path: '/projetos',
    name: 'projects',
    component: ProjectsConteiner
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
