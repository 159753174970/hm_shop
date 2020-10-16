<template>
	<!-- 商品列表 -->
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="naviGoods(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="price">
				<text>{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 数据传值
		props:['goods'],
		methods:{
			// 点击跳转商品详情页加上id
			naviGoods(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	// 商品列表
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		// 自动换行
		flex-wrap: wrap;
		// 靠边对齐平均分剩余的空间。
		justify-content: space-between;
	
		.goods_item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
	
			image {
				width: 80%;
				height: 300rpx;
				display: block;
				margin: 0 auto;
			}
	
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				// 选择器
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					// 中划线
					text-decoration: line-through;
				}
			}
	
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 10rpx;
			}
		}
	}
</style>
