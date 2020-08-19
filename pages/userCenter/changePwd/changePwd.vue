<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">修改密码</view>
		</cu-custom>
	
		<view class="container_title text-center text-red text-lg relative margin-sm">修改登录密码<text class="iconfont icon-icon-dsj absolute"></text></view>
	
		<form>
			<view class="cu-form-group">
				<view class="title">原始密码</view>
				<input placeholder="请输入原始密码"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">新登录密码</view>
				<input placeholder="请输入新登录密码"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input placeholder="请再次确认密码"></input>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-gradual-green margin-tb-sm lg">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container_title{
	    height: 92rpx;
	    line-height: 92rpx;
	    border-bottom: 1px solid red;
	}
	.container_title .icon-icon-dsj{
	    width: 68rpx;
	    left: 0;
	    right: 0;
	    margin: auto;
	    bottom: -40rpx;
	    font-size: 44rpx !important;
	}
	.cu-form-group .title{
	    width: 180rpx;
	}
</style>
