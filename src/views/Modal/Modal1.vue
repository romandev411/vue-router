<template>
	<Overlay @click="click">
		<div class="modal">
			<button @click="click">close</button>
			<h2>Modal 1</h2>
		</div>
	</Overlay>
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
	.modal-wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
	}

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 300px;
		height: 200px;
		padding: 10px;
		background: #fff;
	}
</style>
