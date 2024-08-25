import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//primevue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'

const app = createApp(App)

app.use(router).use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('PrimevueMenubar', Menubar)
app.component('PrimevueAvatar', Avatar)

app.mount('#app')
