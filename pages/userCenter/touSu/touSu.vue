<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">投诉建议</view>
		</cu-custom>
		<view class="cu-list menu sm-border">
			<view class="cu-item">
				<view>投诉QQ：</view>
				<view class="content padding-tb-xs">
					<text class="text-black cell-title">3023591435</text>
				</view>
			</view>
			<view class="cu-item">
				<view>工作时间：</view>
				<view class="content padding-tb-xs">
					<text class="text-black cell-title">工作日：09:00-18:00</text>
					<view>周六：10:00-18:00  ( 法定节假日除外 )</view>
				</view>
			</view>
			 <view class="cu-item">
				<view>投诉邮箱：</view>
				<view class="content padding-tb-xs">
					<text class="text-black cell-title">tousu@taodaxiong.com</text>
				</view>
			</view>
		</view>
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

</style>
