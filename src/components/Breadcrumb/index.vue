<template>
	<el-breadcrumb class="breadcrumb" separator="/">
		<el-breadcrumb-item
			v-for="(item, index) in breadcrumbData"
			:key="item.path"
		>
			<!-- 不可点击面包屑 -->
			<span class="no-redirect" v-if="index === breadcrumbData.length - 1">{{
				item.meta.title
			}}</span>
			<!-- 可点击面包屑 -->
			<a
				v-else
				class="redirect"
				:size="linkHoverColor"
				@click.prevent="onLinkClick(item)"
			>
				{{ item.meta.title }}
			</a>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script setup>
	import { ref, watch } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { useStore } from 'vuex'

	// 处理点击事件
	const router = useRouter()
	const onLinkClick = (item) => {
		router.push(item.path)
	}

	const route = useRoute()
	// 生成数组数据
	const breadcrumbData = ref([])
	const getBreadcrumbData = () => {
		breadcrumbData.value = route.matched.filter(
			(item) => item.meta && item.meta.title
		)
	}
	// 监听路由
	watch(
		route,
		() => {
			getBreadcrumbData()
		},
		{
			immediate: true
		}
	)

	// 主题色替换变量
	const store = useStore()
	const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang='scss' scoped>
	.breadcrumb {
		display: inline-block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		::v-deep .no-redirect {
			color: #97a8be;
			cursor: text;
		}
		.redirect {
			color: #666;
			font-weight: 600;
		}
		.redirect:hover {
			// 将来需要进行主题色替换
			color: v-bind(linkHoverColor);
		}
	}
</style>
