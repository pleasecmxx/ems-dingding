import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/common.css';

// import myaxios from './uitls/myaxios'
import axios from './uitls/axios'

Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
