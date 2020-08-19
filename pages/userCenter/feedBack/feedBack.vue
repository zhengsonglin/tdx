<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">意见反馈</view>
		</cu-custom>
		<view class="content ">
			<view class="empty text-center padding-top-xl">
				<view class="no-pic margin-top" style="display: inline-block">
					<image src="/static/img/empty-image-default.png" mode="widthFix"></image>
				</view>
				<view class="text-gray">呜呜~啥也没有</view>
			</view>
	
			<view class="absolute" style="bottom: 100rpx; right: 40rpx;">
				<navigator url="/pages/userCenter/addFeedBack/addFeedBack" hover-class="none">
					<text class="cuIcon-roundadd lg text-orange" style="font-size: 66rpx;"></text>
				</navigator>
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
