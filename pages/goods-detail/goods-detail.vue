<template>
	<!-- 商品详情页 -->
	<view class="goods_detail">
		<swiper indicator-dots circular :autoplay="autoplay" :interval="interval">
			<swiper-item v-for="(item, index) in swiPers" :key="index"><image :src="item.src" mode=""></image></swiper-item>
		</swiper>
		<!-- 商品详情页数据 -->
		<view class="box1">
			<view class="price">
				<text>￥{{ info.sell_price }}</text>
				<text>￥{{ info.market_price }}</text>
			</view>
			<view class="goods_name">{{ info.title }}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货好:{{ info.goods_no }}</view>
			<view>库存:{{ info.stock_quantity }}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="txt">详细介绍:</view>
			<view class="content"><rich-text :nodes="content"></rich-text></view>
		</view>
		<!-- GoodsNav 商品导航 -->
		<view class="goods_nav"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view>
	</view>
</template>

<script>
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
export default {
	data() {
		return {
			id: 0,
			swiPers: [],
			// 是否自动轮播
			autoplay: true,
			// 轮播切换时长
			interval: 2000,
			// 商品详情页数据
			info: {},
			// 获取详细商品数据
			content: '',
			//GoodsNav 商品导航数据
			options: [
				// 动态修改
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: 'red'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		};
	},
	// 监听页面加载
	onLoad(options) {
		// 接收咨询列表的id
		(this.id = options.id), this.getSwipers(), this.getDetailInfo(), this.getDetailContent();
	},
	// 注册商品导航组件
	components: {
		uniGoodsNav
	},
	methods: {
		// 获取轮播图的数据
		async getSwipers() {
			const res = await this.$myRequest({
				url: '/api/getthumimages/' + this.id
			});
			// console.log(res)
			this.swiPers = res.data.message;
		},
		// 获取商品详情页数据
		async getDetailInfo() {
			const res = await this.$myRequest({
				url: '/api/goods/getinfo/' + this.id
			});
			// console.log(res)
			this.info = res.data.message[0];
		},
		// 获取详细介绍
		async getDetailContent() {
			const res = await this.$myRequest({
				url: '/api/goods/getdesc/' + this.id
			});
			console.log(res);
			this.content = res.data.message[0].content;
		},
		// 商品导航事件
		onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			});
		},
		buttonClick(e) {
			console.log(e);
			this.options[2].info++;
		}
	}
};
</script>

<style lang="scss">
.goods_detail {
	swiper {
		height: 700rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box1 {
		padding: 10rpx;

		.price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;

			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				// 中划线
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}

		.goods_name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}

	.box2 {
		padding: 0 10rpx;
		font-size: 32rpx;
		line-height: 68rpx;
	}

	.box3 {
		padding-bottom: 50rpx;
		.txt {
			font-size: 30rpx;
			padding-left: 10rpx;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}

		.content {
			padding: 10rpx;
			font-size: 28rpx;
			color: #333333;
			line-height: 50rpx;
		}
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}

.line {
	height: 6rpx;
	width: 750rpx;
	background-color: #eeee;
}
</style>
