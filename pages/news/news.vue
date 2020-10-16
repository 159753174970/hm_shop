<template>
	<view class="news">
		<!-- 资讯列表 -->
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
			newsList:[]
			}
		},
		// 监听页面加载
		onLoad() {
			this.getNews()
		},
		// 注册组件
		components:{"news-item":newsItem},
		methods: {
			// 获取资讯列表的数据
			async getNews() {
				const res = await this.$myRequest({
					url: "/api/getnewslist"
				})
				// console.log(res)
				this.newsList = res.data.message;
			},
			// 点击跳转到详情页
			goDetail(id){
				//在起始页面跳转到test.vue页面并传递参数id
				uni.navigateTo({
				    url: '/pages/news-detail/news-detail?id='+ id
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
