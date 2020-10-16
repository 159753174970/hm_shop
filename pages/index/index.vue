<template>
	<view class="home">
		<!-- 轮播图 -->
		<!-- 是否显示面板指示点 -->
		<!-- 是否采用衔接滑动，即播放到末尾后重新回到开头 -->
		<!-- 自动轮播 -->
		<!-- 轮播切换时长 -->
		<swiper indicator-dots circular :autoplay="autoplay" :interval="interval">
			<swiper-item v-for="item in swiPers" :key="item.id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :key="item.id" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swiPers: [],
				// 是否自动轮播
				autoplay: true,
				// 轮播切换时长
				interval:2000,
				goods: [],
				navs: [{
						id: 1,
						icon: 'iconfont icon-ziyuan',
						title: '手机超市',
						path: '/pages/goods/goods'
					},
					{
						id: 2,
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						id: 3,
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						id: 4,
						icon: 'iconfont icon-tupian',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		// 监听页面加载
		onLoad() {
			this.getSwipers(),
			this.getHotGoods()
		},
		components: {
			// 注册动态组件
			"goods-list": goodsList
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: "/api/getlunbo"
				})
				// console.log(res)
				this.swiPers = res.data.message;
				// 发送网络请求
				// uni.request({
				// 	url: "http://localhost:8082/api/getlunbo",
				// 	// 开发者服务器接口地址
				// 	success: res => {
				// 		console.log(res.data);
				// 		if (res.data.status !== 0) {
				// 			return uni.showToast({
				// 				// 显示消息提示框。
				// 				title: '获取数据失败'
				// 			});
				// 		}
				// 		this.swiPers = res.data.message;
				// 	}
				// })
			},
			// // 获取商品列表数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=1"
				})
				// console.log(res)
				this.goods = res.data.message;
			},
			// 导航点击跳转函数
			navItemClick(url) {
				//在起始页面跳转到test.vue页面并传递参数
				uni.navigateTo({
					url
				});
			},
			// 点击跳转到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				});
			}
		}
	}
</script>

<style lang="scss">
	// 轮播图
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%
			}
		}
	}

	// 导航
	.nav {
		display: flex;

		.nav_item {
			width: 25%;
			text-align: center;

			view {
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 60rpx;
				margin: 10rpx auto;
				line-height: 120rpx;
				color: #e8e4e4;
				font-size: 50rpx;
			}

			.icon-tupian {
				font-size: 45rpx;
			}

			text {
				font-size: 30rpx;
			}
		}
	}

	// 商品区域
	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 20rpx;

		.tit {
			height: 100rpx;
			line-height: 100rpx;
			color: $shop-color;
			text-align: center;
			// 文字间距
			letter-spacing: 40rpx;
			background-color: #fff;
			margin: 7rpx 0;
		}
	}
</style>
