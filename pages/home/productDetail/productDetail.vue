<template>
	<view class="vh100 bg-white product-detail">
		<view class='cu-custom'>
			<view class="cu-bar fixed bg-shadeTop" :style="{height:CustomBar+'px', paddingTop:StatusBar+'px'}">
				<!-- 小程序环境，qq、微信、百度、头条等 -->
				<!-- #ifdef MP -->
				<navigator class='action' open-type="navigateBack" delta="1" hover-class="none">
					<text class='cuIcon-back'></text> 返回
				</navigator>
				<!-- #endif -->
				
				<!-- 非小程序环境 -->
				<!-- #ifndef MP -->
				<text class='cuIcon-back margin-left-sm' style="font-size: 30rpx;letter-spacing: 2px;" @click="BackPage"> 返回</text> 
				<!-- #endif -->
				<view class='content' :style='{top:StatusBar+"px"}'>{{productInfo.title}}</view>
			</view>
		</view>
		
		<view class="bg-white">
			<!-- https://image.weilanwl.com/img/4x3-1.jpg  style="height: 640rpx;"-->
			<image :src="productInfo.img" mode='widthFix' class="response" ></image>
		</view>
		
		<view class="bg-white">
			<view class="solids-bottom padding-left padding-tb-xs">
				<text class="text-black text-bold text-xl">{{productInfo.title}}</text>
			</view>
			<view class="solids-bottom padding-left text-sm">
				<!-- 活动金额介绍 -->
				<view class="padding-top-xs">
					<text>任务金额：</text><text class="text-red margin-right">{{productInfo.price}}元</text>
					<text class="margin-left">返款金额：</text><text class="text-red">{{productInfo.price}}元</text>
				</view>
				<view>
					<text>商品价值：</text><text class="text-red margin-right">{{productInfo.price}}元</text>
					<text class="margin-left">剩余份数：</text><text class="text-red">{{productInfo.order_count}}/{{productInfo.task_count}}</text>
				</view>
				<view class="padding-tb-sm text-red">
					<text style="border: 2rpx solid red;padding: 6rpx 10rpx;border-radius: 10rpx;">截止日期：2020-06-30 23:59:59</text>
				</view>
			</view>
			<!-- 保证金 -->
			<view class="padding-left padding-tb-xs text-sm">商家已存入保证金999.00元平台担保返款</view>
		</view>
		
		<!-- 任务流程 -->
		<view class="bg-white padding-lr padding-tb-sm text-df margin-top-sm">
			<view class="text-lg"><text class="cuIcon-text lg text-red margin-right-xs"></text>任务流程</view>
			<view class="margin-tb-xs">1、点击“立即领取”,获取免单资格</view>
			<view class="margin-bottom-xs">2、点击"开始任务"，按照任务提示，以<text class="price">{{productInfo.price}}</text>元价格去指定平台购买</view>
			<view class="margin-bottom-xs">3、复制宝贝链接，点击验证通过之后，填写订单号，并提交任务。</view>
			<view class="margin-bottom-xs">4、卖家发货→收到快递后到淘宝确认收货→给予五星好评并上传好评截图到平台→等待卖家确认。</view>
			<view class="">5、卖家确认无误后，平台返款<text class="price">{{productInfo.price}}</text>元到您的账户中供您提现</view>
		</view>
		<!-- 注意事项 -->
		<view class="bg-white padding-lr padding-tb-sm margin-top-sm text-df">
			<view class="text-lg"> <text class="iconfont icon-zhuyi-yin text-red margin-right-xs"></text>注意事项</view>
			<view class="margin-bottom-xs">1、与商家旺旺聊天时禁止提及<text class="text-red">“淘大熊 、试客、试单、刷单”</text>等信息，否则取消平台任务合作机会！</view>
			<view class="margin-bottom-xs">2、禁止使用<text class="text-red">信用卡、花呗、淘金币、集分宝、优惠券、红包、天猫积分</text>等淘宝商家使用的官方优惠渠道</view>
			<view class="margin-bottom-xs">3、禁止通过<text class="text-red">淘客网、返利网、一淘</text>等返现返利链接下单！</view>
			<view>以上由于买家违规下单所产生的费用，由买家承担。淘大熊有权冻结其帐号，限制提现操作，IP列入黑名单。</view>
		</view>
		
		<!-- 温馨提示 -->
		<view class="bg-white padding-lr padding-tb-sm margin-top-sm text-df">
			<view class="text-lg"><text class="iconfont icon-xiaolian text-red margin-right-xs"></text>温馨提示</view>
			<view>1、用户获取免单资格后，请根据时间提示<text>及时下单并提交订单号。</text></view>
			<view>2、若因未按时提交任务信息而被系统取消任务资格，平台概不负责！</view>
		</view>
		
		<!--适配底部导航栏-->
		<view class='cu-tabbar-height bg-white'></view>
		
		<view class="cu-bar bg-white tabbar border shop foot">
			<view class="action" bindtap="showCustomerDialog">
				<view class="cuIcon-service text-green">
					<view class="cu-tag badge"></view>
				</view>
				客服
			</view>
			<view class="action">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				购物车
			</view>
			<!-- <view class="bg-orange submit">加入购物车</view> -->
			<view class="bg-orange submit">立即领取</view>
		</view>
		
		<!-- 查看商家备注,  catchtouchmove阻止冒泡而导致背景滑动-->
		<view :class="['cu-modal', {'show':showDialog}]" @touchmove.prevent>
		    <view class="cu-dialog">
		        <view class="cu-bar bg-orange justify-end">
		            <view class="content">客服信息</view>
		            <view class="action" @click="hideCustomerDialog">
		                <text class="cuIcon-close text-white"></text>
		            </view>
		        </view>
		        <view class="bg-white text-center padding padding-xl">
		            <view class="margin-tb-xs">注：如有疑问，请及时联系平台客服</view>	
		        </view>
		        <view class="cu-bar bg-white">
		            <view class="action margin-0 flex-sub  solid-left text-orange" @click="hideCustomerDialog">知道了</view>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				productInfo:{},
				showDialog: false
			};
		},
		methods:{
			BackPage(){
				uni.navigateBack({
					delta: 1
				});
			},
			//显示客服弹窗
			showCustomerDialog(){
				this.showDialog = true
			},
			//隐藏客服弹窗
			hideCustomerDialog(){
				this.showDialog = false
			},
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			//console.log(options.item)
			this.productInfo = JSON.parse(options.item)
		},
	}
</script>

<style lang="scss" scoped>
	.product-detail{
		line-height: 44rpx;
	}
</style>
