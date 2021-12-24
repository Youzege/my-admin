<template>
	<div>
		<div class="logo-container">
			<el-avatar
				size="44"
				shape="square"
				src="http://nimg.ws.126.net/?url=http://dingyue.ws.126.net/2021/0410/e0c0cd5cj00qrbv4e001md200jg00jgg00960096.jpg&thumbnail=650x2147483647&quality=80&type=jpg"
			/>
			<h1 class="logo-title" v-if="$store.getters.sidebarOpened">my-admin</h1>
		</div>
		<el-scrollbar>
			<sidebar-menu></sidebar-menu>
		</el-scrollbar>
	</div>
</template>

<script setup>
	import {} from 'vue'
	import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang='scss' scoped>
	.logo-container {
		height: 44px;
		padding: 10px 0 22px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.logo-title {
			margin-left: 10px;
			color: #fff;
			font-weight: 600;
			line-height: 50px;
			font-size: 16px;
			white-space: nowrap;
		}
	}
</style>
