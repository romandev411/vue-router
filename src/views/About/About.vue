<template>
	<div>
		<h1>About</h1>

		<div class="tabs">
			<router-link class="tabs__btn" to="tab1">Tab 1</router-link>
			<router-link class="tabs__btn" to="tab2">Tab 2</router-link>
			<router-link class="tabs__btn" to="tab3">Tab 3</router-link>
		</div>

		<div class="tabs-content">
			<router-view/>
		</div>
	</div>
</template>

<style>
	.tabs {
		display: flex;
	}

	.tabs__btn {
		border: 1px solid;
		padding: 20px 40px;
	}
</style>
