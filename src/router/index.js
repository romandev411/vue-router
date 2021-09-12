import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home/Home'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '*',
		name: 'page404',
		component: () => import(/* webpackChunkName: "page404" */ '~/views/Page404/Page404'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '~/views/About/About'),
		children: [
			{
				path: '/tab1',
				alias: '/about',
				name: 'tab1',
				component: () => import(/* webpackChunkName: "tab1" */ '~/views/Tabs/Tabs1'),
			},
			{
				path: '/tab2',
				name: 'tab3',
				component: () => import(/* webpackChunkName: "tab2" */ '~/views/Tabs/Tabs2'),
			},
			{
				path: '/tab3',
				name: 'tab3',
				component: () => import(/* webpackChunkName: "tab2" */ '~/views/Tabs/Tabs3'),
			},
		],
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
