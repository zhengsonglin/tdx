<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">定制金返款</view>
		</cu-custom>
	
		<view class="container_title text-center text-red text-lg relative margin-sm">定制金返款记录<text class="iconfont icon-icon-dsj absolute"></text></view>
		<view class="data-list padding-lr-sm">
			<view class="row-tb row-title float-wraper">
				<view class="normal time">时间</view><view class="normal order">订单号</view>
				<view class="normal record">记录</view><view class="normal price">金额</view><view class="normal state">状态</view>
			</view>
			<view class="row-tb row-data">
				<view class="row-line-data float-wraper" v-for="(item, index) in list" :key="index">
					<view class="normal time">{{item.time}}</view><view class="normal order">{{item.order}}</view>
					<view class="normal record">{{item.record}}</view><view class="normal price">{{item.price}}</view><view class="normal state text-red">{{item.state}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{time:"2020-04-28", order:"958593120881417922", record:"定制金返款", price:"1.00", state:"已返款"},
					{time:"2020-04-23", order:"958593120881417923", record:"定制金返款", price:"1.00", state:"已返款"},
					{time:"2020-04-16", order:"958593120881417924", record:"定制金返款", price:"1.00", state:"已返款"}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.scrollPage .container_title{
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
	.data-list{overflow: hidden;}
	.data-list .row-title{overflow: hidden;height: 88rpx;line-height: 88rpx;border-bottom: 2rpx solid #ddd;}
	.data-list .row-tb .row-line-data{overflow: hidden;line-height: 44rpx;border-bottom: 2rpx solid #ddd;padding:10rpx 0;display: flex;align-items: center;}
	.data-list .float-wraper .normal{float: left;text-align: center;word-wrap: break-word;font-size: 24rpx;}
	.data-list .float-wraper.row-title .normal{font-weight: bold;}
	.data-list .row-tb .time{width: 19%;}
	.data-list .row-tb .order{width: 26%;padding: 0 2%;}
	.data-list .row-tb .record{width: 20%;}
	.data-list .row-tb .price{width: 16%;}
	.data-list .row-tb .state{width: 18%;font-size: 32rpx;}
</style>
