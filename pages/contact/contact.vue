<template>
	<!-- 联系我们 -->
	<view class="contact">
		<image class="img" src="../../static/timg.jpg" mode=""></image>
		<view class="info">
			<view class="" @click="phone">
				联系电话: 020-86967060 (点击拨打)
			</view>
			<view>联系地址: 广东省广州市花都区建设北路68号105铺 联想专卖店(花都旗舰店)</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" :scale="scale">

		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 经度
				latitude: 23.391398,
				// 纬度
				longitude: 113.211291,
				// 缩放级别，取值范围为5-18
				scale: 16,
				covers: [{
					latitude: 23.391398,
					longitude: 113.211291,
					iconPath: '../../static/u=2909596518,1735769769&fm=26&gp=0.jpg',
					width: 60,
					height: 60
				}, {
					latitude: 23.391398,
					longitude: 113.211291,
					iconPath: '../../static/u=2909596518,1735769769&fm=26&gp=0.jpg',
					width: 60,
					height: 60
				}]

			}
		},
		methods: {
			phone() {
				// 拨打电话。
				uni.makePhoneCall({
					phoneNumber: '020-86967060' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}

		.info {
			padding: 10rpx 20rpx;
			font-size: 30rpx;

			view {
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
