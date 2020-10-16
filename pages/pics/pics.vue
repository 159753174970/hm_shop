<template>
	<!-- 分类列表 -->
	<view class="pics">
		<!-- scroll-y允许纵向滚动 -->
		<!-- 左侧导航 -->
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" v-for="(item,index) in cates" 
			:key="item.id" 
			:class="active===index ? 'active':''  "
			>{{item.title}}</view>
		</scroll-view>
		<!-- 右侧内容 -->
		<scroll-view class="rigth" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<!--  -->
				<image :src="item.img_url" @click="previewImg(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length ===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		// 监听页面加载
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			// 发申请去获取数据
			async getPicsCate() {
				const res = await this.$myRequest({
					url: "/api/getimgcategory"
				})
				// console.log(res)
				this.cates = res.data.message;
				// 页面进来直接调二级数据
				this.leftClickHandle(0, this.cates[0].id)
			},
			// 点击高亮，获取右侧数据
			async leftClickHandle(index, id) {
				this.active = index
				// console.log(index)
				const res = await this.$myRequest({
					url: "/api/getimages/" + id
				})
				// console.log(res)
				this.secondData = res.data.message;
			},
			// 点击图片预览
			previewImg(current) {
				// 遍历数据里面的图片出来
				const urls = this.secondData.map(item => {
					return item.img_url
				})
				// 预览图片。
				uni.previewImage({
					// 为当前显示图片的链接/索引值
					// indicator: 'number',
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			overflow: hidden;

			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background: $shop-color;
				color: #fff;
			}
		}

		// 隐藏滚动条
		::-webkit-scrollbar {
			width: 0;
			height: 0;
			color: transparent;
		}

		.rigth {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			overflow: hidden;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 10rpx;
				}

				text: {
					font-size: 30rpx;
					line-height: 60rpx;
				}

			}
		}
	}
</style>
