<template>
	<div class="navbar">
		<div class="right-menu">
			<!-- 头像 -->
			<el-dropdown class="avatar-container" trigger="click">
				<div class="avatar-wrapper">
					<el-avatar
						shape="square"
						:size="40"
						:src="'http://nimg.ws.126.net/?url=http://dingyue.ws.126.net/2021/0410/e0c0cd5cj00qrbv4e001md200jg00jgg00960096.jpg&thumbnail=650x2147483647&quality=80&type=jpg'"
					></el-avatar>
					<i class="el-icon-s-tools"></i>
				</div>
				<template #dropdown>
					<el-dropdown-menu class="user-dropdown">
						<router-link to="/">
							<el-dropdown-item> 首页 </el-dropdown-item>
						</router-link>
						<a target="_blank" href="https://juejin.cn/user/4160992475616408">
							<el-dropdown-item>课程主页</el-dropdown-item>
						</a>
						<el-dropdown-item divided @click="logout">
							退出登录
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex'

	const store = useStore()
	const logout = () => {
		store.dispatch('user/logout')
	}
</script>

<style lang='scss' scoped>
	.navbar {
		height: 50px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

		.right-menu {
			display: flex;
			align-items: center;
			justify-content: right;
			padding-right: 16px;

			::v-deep .avatar-container {
				cursor: pointer;
				.avatar-wrapper {
					margin-top: 5px;
					position: relative;
					.el-avatar {
						--el-avatar-background-color: none;
						margin-right: 12px;
					}
				}
			}
		}
	}
</style>
