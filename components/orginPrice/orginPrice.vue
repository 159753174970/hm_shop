<template>
	<view class="price">
		<view class="current" :class="isCurrentBold?'font-bold':''">
			<view class="text-primary-color font-mini">
				￥
			</view>
			{{currentPrice}}
		</view>
		<view class="original" v-if="originalPrice">
			<view class="text-else-color">
				￥
			</view>
			{{originalPrice}}
		</view>
	</view>
</template>

<script>
	export default {
		// props:["currentPrice","originalPrice"],
		props:{
			currentPrice:String,
			originalPrice:String,
			isCurrentBold:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.price{
		display: flex; /*弹性盒子*/
		align-self:flex-end;
		.current {
			display: flex; /*弹性盒子*/
			margin-right: 10upx;
			color: $shop-color;
			font-size: 28rpx;
		}
		.original {
			display: flex; /*弹性盒子*/
			margin-right: 10upx;
			color: #428bca;
			font-size: 28rpx;
		}
	}

</style>