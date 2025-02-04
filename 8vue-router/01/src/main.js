import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router' //폴더까지만

const app = createApp(App);
app.use(router);
app.mount('#app');
