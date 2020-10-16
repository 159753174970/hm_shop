<template>
	<view>
		<view style="padding-top:260rpx;">
			<view style="height:80px;">
				<view class="login-input"  :class="{active:distinguish==true}">
					<image src="../../static/yx-login/user.png"></image>
					<input type="text" placeholder="请输入当前账号" v-model="From.UserName" placeholder-style="color:#fff"/>
					<image src="../../static/yx-login/delete.png" v-if="From.UserName" @click="From.UserName=null" class="delete"></image>
				</view>
				<text class="tips" v-show="distinguish">{{UserNametips}}</text>
			</view>
			
			<view style="height:80px;">
			<view class="login-input"  :class="{active:distinguish==true}">
				<image src="../../static/yx-login/password.png"></image>
				<input type="password" placeholder="请输入当前密码" v-model="From.PassWord" placeholder-style="color:#fff" v-if="SwiTch"/>
				<input type="text" placeholder="请输入您要注册的密码" placeholder-style="color:#fff" v-model="From.PassWord" v-else/>
				<image src="../../static/yx-login/delete.png" v-if="From.PassWord" @click="From.PassWord=null" class="delete" style="padding-right:10px;width:22px;"></image>
				<image src="../../static/yx-login/yanjing.png" class="switch" @click="Switch()"></image>
			</view>
			<text class="tips" v-show="distinguish">{{PassWordtips}}</text>
			</view>
		</view>
		<view class="login-button">
			<radio :checked="checked" @click="clickchecked" style="transform:scale(0.9)">记住密码</radio>
			<text class="register" @click="Jump">暂无账号点击注册</text>
			<button @click="login">点击登录</button>
		</view>
	</view>
</template>

<script>
	/* 本图标全部使用阿里图标,图标目录static yx-login */
	export default {
		data() {
			return {
				From:{
					UserName:'', //账号
					PassWord:'', //密码
				},
				checked:false, //单选框
				distinguish:false,
				UserNametips:'',
				PassWordtips:'',
				SwiTch:true
			}
		},
		// 读取本地存储密码及账号
		onShow() {
		  	uni.getStorage({
		  		key:'UserInfo',
				success:(e)=>{
					this.From.UserName = e.data.UserName  
					this.From.PassWord = e.data.PassWord
				}
		  	})
		},
		methods: {
			/* 
			登录逻辑部分
			 */
			login(){
				var that = this
				if(that.From.UserName && that.From.PassWord){
					if(that.From.UserName =="admin" && that.From.PassWord == "123"){
						/* 验证成功跳转目标页面 */
						// uni.reLaunch({
						// 	url:''
						// })
					}else{
						that.UserNametips = "账号错误请重新填写"
						that.PassWordtips = "密码错误请重新填写"
					    that.distinguish = true	
					}
				}else{
					that.UserNametips = "账号不能为空"
					that.PassWordtips = "密码不能为空"
					that.distinguish = true
				}
				
			},
			/* 记住密码用户第二次进入页面直接填充 */
			clickchecked(){
				var that = this
				this.checked =!this.checked
				if(that.checked == true){
					if(that.From.UserName && that.From.PassWord){
						uni.setStorage({
							key:'UserInfo',
							data:that.From
						})
					}	
				}
			},
			Delete(){
				this.From.UserName = ""
			},
			Delete2(){
				this.From.PassWord = ""
			},
			Jump(){
				uni.navigateTo({
					url:'../register/register'
				})
			},
			Switch(){
				this.SwiTch = !this.SwiTch
			}
		}
	}
</script>

<style lang="less">
	/* 背景图设置 */
	page{
		width:100%;
		height:100%;
		background-image: url(../../static/yx-login/timg.jpg);
		background-repeat: no-repeat;
		background-size:100% 100%;
		}
	.login-input{
		width:85%;
		height:63px;
		margin:0px auto;
		border-bottom:1px solid rgb(255,255,255);
		display: flex;
		input{
			width:91%;
			border: none;
			height:40px;
			color: rgb(255,255,255);
			padding-left:15px;
			padding-right:15px;
			font-size:14px;
			margin-top:25px;
			outline: none;
			-webkit-appearance: none; /*去除系统默认的样式*/
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/
		}
		image{
			width:23px;
			height:20px;
			margin-top:35px;
			
		}
		.delete{
			width:20px;
			height:20px;
			margin-left:-20px;
		}
		.switch{
			width:23px;
			height:14px;
			padding-top:3px;
		}
	}
	.login-button{
		width:85%;
		margin:0px auto;
		button{
			width:100%;
			font-size:15px;
			height:40px;
			color: rgb(255,255,255);
			background-color: rgb(78,110,242);
			margin-top:16px;
		}
		radio{
			font-size:14px;
			color:rgb(255,255,255);
		}
		.register{
			font-size:12px;
			color: rgb(255,255,255);
			float: right;
			padding-top:10px;
			text-decoration: underline;
		}
	}
	.active{
		color:rgb(245,8,8);
		border-bottom:1px solid rgb(245,8,8);
	}
	.tips{
	   	color:rgb(245,8,8);
		font-size:12px;
		display: initial;
		float: right;
		padding-right:30px;
	}
</style>
