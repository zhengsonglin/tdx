<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">更新通知</view>
		</cu-custom>
		<view class="content ">
			<view class="empty text-center padding-top-xl">
				<view class="no-pic margin-top" style="display: inline-block">
					<image src="/static/img/empty-image-default.png" mode="widthFix"></image>
				</view>
				<view class="text-gray">暂无更新内容</view>
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
.content .no-pic{
    width: 320rpx;
    height: 320rpx;
}
</style>
