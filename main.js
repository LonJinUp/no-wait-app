import App from './App'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import LoginHeader from '@/components/LoginHeader'
import {toast, navGoto, callPhone, amountConversion} from '@/utils/utils'

Vue.component('FooterBox',Footer)
Vue.component('Logo',Logo)
Vue.component('LoginHeader',LoginHeader)

Vue.prototype.$toast = toast
Vue.prototype.$navGoto = navGoto
Vue.prototype.$callPhone = callPhone
Vue.prototype.$amountConversion = amountConversion


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif