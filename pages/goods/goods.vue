<template>
	<!-- 商品列表 -->
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<!-- 创建移除元素 -->
		<view class="isOver" v-if="flag">
			---数据加载完了---
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		// 页面生命周期
		// 监听页面加载
		onLoad() {
			this.getGoodsList()
		},
		// 上拉刷新，页面滚动到底部的事件
		onReachBottom() {
			// 页面触底++在调用改数据
			if (this.goods.length < this.pageindex * 10) {
				return this.flag = true;
			}
			this.pageindex++
			this.getGoodsList()
			// console.log('触底了')
		},
		// 调用后触发下拉刷新动画
		onPullDownRefresh() {
			console.log('下拉刷新');
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh();
				})
			}, 1000);
		},
		components: {
			// 注册动态组件
			"goods-list": goodsList
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=" + this.pageindex
				})
				// console.log(res)
				this.goods = [...this.goods, ...res.data.message];
				callBack && callBack();
			},
			// 点击跳转到商品详情页
			goGoodsDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				});
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;
	}

	.isOver {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
	}
</style>
