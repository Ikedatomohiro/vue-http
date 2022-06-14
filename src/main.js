import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 
  "https://firestore.googleapis.com/v1/projects/vue-http-cca0e/databases/(default)/documents";
// axios.defaults.headers.common['Authorization'] = "fdafa";
// axios.defaults.headers.get["Accept"] = "application/json"

createApp(App).mount('#app')
