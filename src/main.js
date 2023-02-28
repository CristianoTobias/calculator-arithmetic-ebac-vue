import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    data() {
      return {
        message: ''
      }
    }
  }

createApp(App).mount('#app')
