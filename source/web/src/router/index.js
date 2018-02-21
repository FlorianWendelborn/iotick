import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/Home'
import IotaGate from '@/components/IotaGate'
import StationsView from '@/components/StationsView'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView,
		},
		{
			path: '/iotatest',
			name: 'IotaGate',
			component: IotaGate,
		},
		{
			path: '/stations',
			name: 'Stations',
			component: StationsView,
		},
		{
			path: '*',
			redirect: '/',
		},
	],
})
