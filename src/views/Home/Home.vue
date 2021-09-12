<template>
	<div>
		<h1>Home</h1>

		<p>
			<router-link to="#modal1">Open modal</router-link>
		</p>
	</div>
</template>

<script>
	import Layout from '~/components/Layout/Layout'

	export default {
		components: {
			Layout,
		},
		data() {
			return {
				selected: '1',
			}
		}
	}
</script>
