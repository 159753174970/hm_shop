<template>
	<view class="">
		<view class="index container">
			<!-- 商品内容 -->
			<view class="detriment">
				<view class="productItem" v-for="(item, index) in detriment">
					<!-- 单选 -->
					<checkbox-group class="check" @change="changeitem(item)"><checkbox value="item" :checked="item.flag"></checkbox></checkbox-group>
					<!-- 左侧图片 -->
					<div class="left"><image :src="item.src"></image></div>
					<!-- 右侧商品介绍 -->
					<div class="message">
						<!-- 商品名称 -->
						<view class="bigTitle">{{ item.bigTitle }}</view>
						<!-- 商品价格 -->
						<text>￥{{item.currentPrice}}</text>
						<!-- <orginPrice :currentPrice="item.currentPrice" :originalPrice="item.originalPrice"></orginPrice> -->
						<!-- 限购10件 -->
						<!-- <view class="littleTitle text-else-color">{{ item.littleTitle }}</view> -->
						<!-- 商品数量加减 -->
						<view class="shoppingNumber">
							<label class="minute" @click="btn_minute(index)">-</label>
							<input class="input" v-model="item.num" />
							<label class="add" @click="btn_add(index)">+</label>
						</view>
					</div>
					<!-- 删除商品按钮 -->
					<view class="deletebtn" @click="del(item, index)"><image src="../../static/icon/home-active.png" mode=""></image></view>
				</view>
			</view>
			<!-- 底部导航 -->
			<view class="footer">
				<checkbox-group>
					<checkbox />
					全选
				</checkbox-group>
				<view class="settlement">
					<view class="sum">
						合计:
						<view class="money">￥5555</view>
					</view>
					<button class="btn">结算</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// import orginPrice from '../../components/orginPrice/orginPrice.vue';
export default {
	data() {
		return {
			// 购物车数据
			detriment: [
				{
					src: '../../static/4.png',
					bigTitle: '华为畅享205G4GB+128GB 全网通版（亮黑色）',
					currentPrice: '2999',
					originalPrice: '3699',
					// littleTitle: '限购20件',
					num: 1,
					flag: false
				},
				{
					src: '../../static/5.png',
					bigTitle: ' 荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 全网通 6GB+128GB（幻夜黑）',
					currentPrice: '1200',
					originalPrice: '1500',
					// littleTitle: '限购20件',
					num: 1,
					flag: false
				},
				{
					src: '../../static/8.png',
					bigTitle: 'HUAWEI P40 Pro 5G 全网通 8GB+128GB（零度白）',
					currentPrice: '1000',
					originalPrice: '1500',
					// littleTitle: '限购20件',
					num: 1,
					flag: false
				},
				{
					src: '../../static/4.png',
					bigTitle: '华为畅享20 5G 4GB+128GB 全网通版（亮黑色）',
					currentPrice: '1800',
					originalPrice: '2000',
					// littleTitle: '限购20件',
					num: 1,
					flag: false
				},
				{
					src: '../../static/8.png',
					bigTitle: 'HUAWEI P40 Pro 5G 全网通 8GB+128GB（零度白）',
					currentPrice: '2000',
					originalPrice: '2300',
					littleTitle: '限购20件',
					num: 1,
					flag: false
				},
				{
					src: '../../static/5.png',
					bigTitle: ' 荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 全网通 6GB+128GB（幻夜黑）',
					currentPrice: '2300',
					originalPrice: '2500',
					littleTitle: '限购20件',
					num: 1,
					flag: false
				}
			],
			// components: {
			// 	orginPrice
			// }
		};
	}
};
</script>
<style lang="scss">
/* 整体内容 */
.index {
	width: 100%;
	margin-bottom: 40rpx;
	.detriment {
		width: 100%;
		display: flex; /*弹性盒子*/
		justify-content: space-between; /*两端对齐，子元素之间有间隙*/
		flex-flow: row wrap; /*子元素溢出父容器时换行*/
		padding: 20upx;
		box-sizing: border-box;
		.productItem {
			display: flex; /*弹性盒子*/
			width: 100%;
			margin-bottom: 40rpx;
			.left {
				// margin-left: 50upx;
				image {
					width: 250upx;
					height: 250upx;
					margin: 0 auto;
				}
			}
			/* 单选 */
			.check {
				width: 50upx;
				height: 50upx;
				margin-top: 90upx;
			}
			/* 右侧介绍 */
			.message {
				  flex: 1;
				.bigTitle {
					line-height: 40rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-all;
				}
				text{
					font-size: 14rpx;
					color: #ca141d;
					font-weight: bold;
					display: inline-block;
					margin: 20rpx 0 20rpx 0;
				}
				// .littleTitle {
				// 	font-weight: bold;
				// }
				/* 数量加减 */
				.shoppingNumber {
					width: 250upx;
					height: 60upx;
					display: flex; /*弹性盒子*/
					justify-content: space-between; /*两端对齐，子元素之间有间隙*/
					border: 1px solid #929292;
					input {
						text-align: center;
					}
				}
				/* 减去商品数量 */
				.minute {
					width: 80upx;
					text-align: center;
					line-height: 58upx;
					font-size: 18px;
					border-right: 1px solid #929292;
				}
				/*文本框*/
				.input {
					width: 80upx;
					text-align: center;
				}
				/* 添加商品数量 */
				.add {
					width: 80upx;
					border-left: 1px solid #929292;
					line-height: 58upx;
					text-align: center;
					font-size: 18px;
				}
			}
			/* 删除按钮 */
			.deletebtn image {
				width: 35upx;
				height: 35upx;
				margin-top: 90upx;
				margin-left: 30upx;
			}
		}
	}
}

.footer {
	width: 92%;
	padding: 0 4%;
	background-color: #fbfbfb;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30rpx;
	position: fixed;
	bottom: 100rpx;
	z-index: 5;
	// border-top: 1px solid #c0c0c0;
	.settlement {
		width: 80%;
		display: flex;
		justify-content: flex-end;
		justify-content: space-between;
		align-items: center;
		.sum {
			width: 45%;
			font-size: 28rpx;
			margin-right: 60rpx;
			margin-left: 20rpx;
			display: flex;
			text-align: center;
			.money {
				font-weight: 600;
			}
		}
		.btn {
			// width: 120rpx;
			// height: 50rpx;
			// background-color: $shop-color;
			// border-radius: 25rpx;
			// padding: 0 30rpx;
			// color: #fff;
			// display: flex;
			// justify-content: center;
			// align-items: center;
			// font-family: PingFang-SC-Medium;
			// font-size: 26rpx;
			// font-weight: normal;
			// font-stretch: normal;
			// letter-spacing: 0.5rpx;
			// color: #fffdff;
			// line-height: 50rpx;
			width: 250rpx;
			background-color: $shop-color;
			color: white;
			line-height: 80rpx;
			text-align: center;
			border-radius: 40rpx;
			height: 80rpx;
		}
	}
}
</style>
