<template>
	<view class="news_detail">
		<!-- 咨询详情页 -->
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间: {{detail.add_time | formatDate}}</text>
			<text>浏览次数: {{detail.click}}</text>
		</view>
		<view class="content">
			<!--文本乱码 支付宝小程序 nodes 属性只支持使用 Array 类型。 -->
			 <rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		// 监听页面加载
		onLoad(options) {
			// 接收咨询列表的id
			this.id = options.id
			this.getNewsDetail()
		},
		methods: {
			// 获取资讯详情的数据
			async getNewsDetail() {
				const res = await this.$myRequest({
					url: "/api/getnew/" + this.id
				})
				// console.log(res)
				this.detail = res.data.message[0];
			},
		}
	}
</script>

<style lang="scss">
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			width: 710rpx;
			text-align: center;
			display: block;
			margin: 20rpx 0;
			font-size:40rpx;
			font-weight: bold;
		}
		.info{
			display: flex;
			// 水平两边对齐
			justify-content: space-between;
		}
	}
</style>
