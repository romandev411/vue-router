<template>
  <div class="app" id="app">
	  <Layout>
		  <router-view/>
	  </Layout>
  </div>
</template>

<script>
	import Layout from '~/components/Layout/Layout'

	export default {
		components: {
			Layout,
		},
		data() {
			return {}
		}
	}
</script>
