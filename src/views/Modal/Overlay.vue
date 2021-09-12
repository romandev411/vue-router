<template>
	<div class="overlay" @click.self="click">
		<slot></slot>
	</div>
</template>

<script>
	import Overlay from '~/views/Modal/Overlay';

	export default {
		components: {
			Overlay,
		},
		methods: {
			click() {
				this.$emit('click');
			},
		},
	}
</script>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
	}
</style>
