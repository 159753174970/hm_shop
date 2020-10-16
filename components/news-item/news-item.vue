<template>
	<view>
		<!-- 资讯列表 -->
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url" mode=""></image>
			<view class="rigth">
				<view class="txt">
					<view>{{item.title}}</view>
				</view>
				<view class="info">
					<text>发表时间: {{item.add_time | formatDate}}</text>
					<text>浏览次数: {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 数据传值/
		props: ['list'],
		// 过滤器(filters)时间
		filters: {
			formatDate(data) {
				// console.log(data)
				// 获取时间
				const nDate = new Date(data)
				// 取年  .toString().padStart(2,0)不满足两位数就加0
				const year = nDate.getFullYear()
				// 获取月
				const month = nDate.getMonth().toString().padStart(2, 0)
				// 获取日
				const day = nDate.getMonth().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		methods:{
			// 点击跳转咨询详情页加上id
			navigator(id) {
				// console.log('触发率')
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #C0C0C0;

		image {
			// width: 200rpx;
			// 最小宽
			min-width: 200rpx;
			// 最大宽
			max-width: 200rpx;
			height: 150rpx;
		}

		.rigth {
			margin-left: 15rpx;
			display: flex;
			// 主轴为垂直方向，起点在上沿。
			flex-direction: column;
			justify-content: space-between;

			.txt {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
