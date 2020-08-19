<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">{{pageTitle}}</view>
		</cu-custom>
		
		<view class="container_title text-center text-red text-lg relative margin-sm">交易明细<text class="iconfont icon-icon-dsj absolute"></text></view>
	
		<view class="tab-content padding-lr-sm">
			<view class="row-tb row-title text-center text-black">
				<view class="row-line-data flex  padding-tb-sm text-bold">
					<view class="flex-sub time">时间</view><view class="flex-sub money">金额</view>
					<view class="flex-sub state">状态</view>
				</view>
			</view>
			<view class="row-tb row-data text-center text-sm text-black">
				<view class="row-line-data flex padding-tb-sm" v-for="(item, index) in list" :key="index">
					<view class="flex-sub time">
						<view>{{item.date}}</view><view>{{item.time}} {{item.day}}</view>
					</view>
					<view class="flex-sub money"><view>{{item.money}}(人民币)</view><view>银行卡提现</view></view>
					<view :class="['flex-sub state text-lg', item.state==0?'text-red':'text-green']">{{item.state==10?'已完成':'待打款'}}</view>
				</view>
			</view>
		</view>    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageTitle:"",
				list: [
					{date:"2020-06-10", time:'11:30:08', money: "200.5元", state:"0", day: "星期三"},
					{date:"2020-06-09", time:'13:19:37', money: "180.5元", state:"10", day: "星期二"},
					{date:"2020-06-08", time:'16:24:18', money: "120.5元", state:"10", day: "星期一"},
					{date:"2020-06-07", time:'19:30:03', money: "320.5元", state:"10", day: "星期六"}
				]
			};
		},
		onLoad(options){
			if(options.type){
				this.pageTitle = options.type=='1'?'提现记录':'财务中心'
				//console.log(options.type); //打印出上个页面传递的参数。
			}
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
	.row-tb .row-line-data{
	    border-bottom: 2rpx solid #ddd;
	}
	.row-tb .row-line-data{
	    line-height: 40rpx;
	}
	.row-data .row-line-data .state{line-height: 80rpx;}
</style>
