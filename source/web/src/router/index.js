import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IotaGate from '@/components/IotaGate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/iotatest',
      name: 'IotaGate',
      component: IotaGate
    }
  ]
})
