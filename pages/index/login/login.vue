<template>
	<view class="page-login vh100 bg-white">
		<cu-custom bgColor="bg-gradual-orange">
			<view slot="content">登录</view>
		</cu-custom>
		
		<view class="response">
			<view class="text-center">
				<image src="/static/img/logo.png" mode="widthFix" class="logo"></image>
			</view>
			<view class="text-input">
				<input type="text" class="input-field" placeholder="请输入账号" maxlength="11" :value="form.phone"></input>
			</view>
			<view class="text-input">
				<input type="password" class="input-field" placeholder="请输入密码" :value="form.password"></input>
			</view>
			<view class="text-input clean">
				<navigator hover-class='none' url="/pages/index/register/register" class="fl">注册</navigator>
				<navigator hover-class='none' url="/pages/index/forget/forget" class="fr">忘记密码</navigator>
			</view>
	
			<view class="text-input padding-top">
				<button class="cu-btn bg-orange margin-tb-sm lg response shadow" @click="toHome">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form:{
				phone:"18598271043",
				password:"123456"
			}
		};
	},
	methods:{
		toHome(){
			uni.switchTab({
				url:"/pages/home/index/index"
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.page-login{
		.logo {
			width: 56%;
			max-height: 150rpx;
			margin: 120rpx auto 80rpx;
		}
		
		.text-input {
			width: 80%;
			margin: 0 auto 40rpx;
		}
		.text-input .input-field {
			height: 88rpx;
			border-radius: 12rpx;
			background-color: #fff;
			-webkit-appearance: none;
			border: 2rpx solid #ccc;
			padding-left: 30rpx;
		}
	}
</style>
