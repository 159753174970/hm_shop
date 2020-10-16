<template>
	<view class="btn">
		<button size="mini" @click="login">登录</button>
		<button size="mini">注册</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		    login(){
		        uni.navigateTo({
		            url:"../login/login"
		        })
		    }
		},
};
</script>

<style lang="scss">
.btn {
	text-align: center;
}
</style>
