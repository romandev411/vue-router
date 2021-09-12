<template>
	<div class="layout">
		<nav>
			<router-link class="nav-link" to="/">Home</router-link>
			<router-link class="nav-link" to="/about">About</router-link>
		</nav>

		<slot></slot>

		<Modal1 v-if="IsOpen" @click="closeModal"/>
	</div>
</template>

<script>
	import Layout from '~/components/Layout/Layout';
	import Modal1 from '~/views/Modal/Modal1';

	export default {
		components: {
			Layout,
			Modal1,
		},
		data() {
			return {
				IsOpen: false,
			}
		},
		methods: {
			isModalRoute() {
				const hashRoute = this.$route.hash.split('?')[0];

				hashRoute === '#modal1' ? this.IsOpen = true: this.IsOpen = false;
			},
			closeModal() {
				this.IsOpen = false;
				this.$router.push({ hash: '' });
			},
		},
		mounted() {
			this.isModalRoute();
		},
		watch: {
			$route() {
				this.isModalRoute();
			},
		},
	}
</script>

<style>
	.layout {
		max-width: 900px;
		margin: 0 auto;
		font-family: Arial, sans-serif;
	}

	.nav-link {
		display: inline-block;
		padding: 10px 20px;
		border: 1px solid;
	}
</style>
