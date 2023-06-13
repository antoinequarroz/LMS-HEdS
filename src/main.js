import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import './assets/js/functions.js'
import './assets/vendor/font-awesome/css/all.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/tiny-slider/tiny-slider.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/choices/css/choices.min.css'
import './assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/vendor/tiny-slider/tiny-slider.js'
import './assets/vendor/glightbox/js/glightbox.min.js'
import './assets/vendor/choices/js/choices.min.js'
import './assets/js/functions.js'


createApp(App).use(router).mount('#app')
