<template>
	<view>
		<cu-custom bgColor="bg-gradual-green">
			<view slot="content">会员中心</view>
		</cu-custom>
		<scroll-view scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"  @refresherrefresh="onRefresherrefresh" 
			:refresher-threshold="100" @refresherrestore="onRestore" @refresherabort="onAbort" :style="{'height':'calc(100vh - '+CustomBar+ 'px)'}">
			<!--头部信息-->
			<view class="user-info relative">
				<view class="text-white text-center padding-top padding-bottom-sm">
					<view><text class="total-num text-xxl">{{userInfo.AB30Count}}</text></view>
					<view><text class="total-num-desc text-df">免单30天总单量</text></view>
				</view>
				<view class="flex text-white text-center account text-sm">
					<view class="flex-sub">
						<view class="text-plain fr margin-right-xs padding-xs">账户余额：<text>{{userInfo.FAccountBalance}}</text></view>
					</view>
					<view class="flex-sub">
						<view class="text-plain fl margin-left-xs padding-xs">积分：<text>0</text></view>
						<view class="tips fl margin-xs text-center text-sm">100积分=1元</view>
					</view>
				</view>
		
				<view class="per-bill-img absolute"></view>
			</view>
			<!--邀请信息-->
			<view class="invit-info padding-left-xl relative">
				<view class="con-per-username text-bold text-xl margin-tb-xs">用户名：<text class="lbl_UserName">{{userInfo.FUserName}}</text></view>
				<view class="con-per-invide text-bold margin-top-xs">邀请码：<text class="lbl_InviteCode">{{userInfo.FInvitationCode}}</text></view>
				
			</view>
			<!--订单-->
			<view class="card-info bg-white margin-sm margin-top">
				<view class="row-1 relative padding-tb-sm padding-left-xs">
					<text :class="['margin-xs', {'active text-bold': orderType == 1}]" @click="setOrderType(1)">限量免单任务</text>
					<text :class="['margin-left-xs', {'active text-bold':orderType == 2}]" @click="setOrderType(2)">熊抢购任务</text>
				</view>
				<view class="row-2 grid col-4 text-center padding-tb-sm">
					<view class="order-state" @click="switchTab(2)">
						<view class="padding-top-xs"><text class="li-icon iconfont icon-moban " style="color:#d17575"></text></view>
						<view class="padding-tb-xs">已申请</view>
						<view class="padding-bottom-xs">15</view>
					</view>
					<view class="order-state" v-if="orderType==1" @click="switchTab(3)">
						<view class="padding-top-xs"><text class="li-icon iconfont icon-tijiao " style="color:#509de8"></text></view>
						<view class="padding-tb-xs">已提交</view>
						<view class="padding-bottom-xs">16</view>
					</view>
					<view class="order-state" @click="switchTab(4)">
						<view class="padding-top-xs"><text class="li-icon iconfont icon-shenhe2 " style="color:#ecb071"></text></view>
						<view class="padding-tb-xs">待审核</view>
						<view class="padding-bottom-xs">17</view>
					</view>
					<view class="order-state" @click="switchTab(5)">
						<view class="padding-top-xs"><text class="li-icon iconfont icon-wancheng " style="color:#e9769f"></text></view>
						<view class="padding-tb-xs">已完成</view>
						<view class="padding-bottom-xs">18</view>
					</view>
				</view>
			</view>
			<!--邀请人数-->
			<view class="my-fans-info flex text-center padding-lr-sm margin-tb-lg">
				<view class="item bg-white margin-left-sm margin-right-xs flex-sub cus-shadow padding-tb-sm">
					<view class="text-lg">推荐人数</view>
					<view class="text-red padding-tb-xs margin-top-sm text-lg">2</view>
				</view>
				<view class="item bg-white margin-left-xs margin-right-sm flex-sub cus-shadow padding-tb-sm">
					<view class="text-lg">免单总数</view>
					<view class="text-red padding-tb-xs margin-top-sm text-lg">15</view>
				</view>
			</view>
		
			<!--九宫格-->
			<view class="grid col-3 text-center bg-white margin-tb-lg margin-lr-sm">
				<view class="setting-item">
					<navigator url="/pages/userCenter/recommendFriend/recommendFriend" hover-class="none">	
						<view><text class="li-icon iconfont icon-fenxiang pink text-white"></text></view>
						<view>分析给好友</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/refundRecord/refundRecord" hover-class="none">	
						<view><text class="li-icon iconfont icon-baozhengjin1 green text-white"></text></view>
						<view>定制金返款</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/reservationRecord/reservationRecord" hover-class="none">
						<view><text class="li-icon iconfont icon-yuding blue"></text></view>
						<view>预定任务</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/realNameAuthentica/realNameAuthentica" hover-class="none">
						<view><text class="li-icon iconfont icon-shimingrenzheng red"></text></view>
						<view>实名认证</view>
					</navigator>	
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/cardBind/cardBind" hover-class="none">
						<view><text class="li-icon iconfont icon-yinxingqia orange "></text></view>
						<view>银行卡绑定</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/financeCenter/financeCenter?type=1" hover-class="none">
						<view><text class="li-icon iconfont icon-tixianfc blue"></text></view>
						<view>提现记录</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/withDrawCash/withDrawCash" hover-class="none">
						<view><text class="li-icon iconfont icon-tixian blue"></text></view>
						<view>账户提现</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/financeCenter/financeCenter?type=2" hover-class="none">
						<view><text class="li-icon iconfont icon-caiwu yellow"></text></view>
						<view>财务中心</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/baseUserInfo/baseUserInfo" hover-class="none">
						<view><text class="li-icon iconfont icon-iconfontgerenzhongxin green"></text></view>
						<view>基本资料</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/newUserStrategy/newUserStrategy" hover-class="none">
						<view><text class="li-icon iconfont icon-bangzhu purple"></text></view>
						<view>新手攻略</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/touSu/touSu" hover-class="none">
						<view><text class="li-icon iconfont icon-iconfontgerenzhongxin pink"></text></view>
						<view>投诉与建议</view>
					</navigator>
				</view>
				<view class="setting-item">
					<navigator url="/pages/userCenter/changePwd/changePwd" hover-class="none">
						<view><text class="li-icon iconfont icon-xiugaimima2 black"></text></view>
						<view>修改密码</view>
					</navigator>
				</view>
		
			</view>
		
			<!--意见反馈-->
			<view class="suggestion-bk bg-white text-center margin-tb margin-lr-sm shadow">
				<view class="flex ">
					<view class="flex-sub padding-xl relative">
						<navigator url="/pages/userCenter/feedBack/feedBack" hover-class="none">
							<text class="item line">意见反馈</text>
						</navigator>
					</view>	
					<view class="flex-sub padding-xl">
						<navigator url="/pages/userCenter/updateDescription/updateDescription" hover-class="none">
							<text class="item">更新说明</text>
						</navigator>
					</view>
				</view>
			</view>
			<view class="padding-sm flex flex-direction">
				<button class="cu-btn bg-gradual-green margin-tb-sm lg" @click="logout">退出登录</button>
			</view>
			<!--适配底部导航栏-->
			<view class='cu-tabbar-height'></view>
		</scroll-view>

	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				userInfo: {
					AB30Count: 20,
					FAccountBalance: 188.6,
					FUserName: "18598271043",
					FInvitationCode: "14983716"
				},
				orderType: 1,
				triggered: false,
				_freshing: false,
			};
		},
		// #ifdef MP-QQ
		onPullDownRefresh() {
			//console.log('onPullDownRefresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
				uni.showToast({
				  title: '刷新成功',
				})
			}, 1000);
		},
		// #endif
		methods:{
			//设置订单类型
			setOrderType(otype=1) {
				this.orderType = otype
			},
			//跳转到相应订单
			switchTab(state) {    
				//app.globalData.tabBar = "order"
				//console.log("e", e.currentTarget.dataset.state)       
				//this.triggerEvent('trigerTabChange', {PageCur: "order", state: state}) 
				this.setCurrOrderState(state)
				uni.switchTab({
					url:"/pages/order/index/index"
				})
			},
			//下拉刷新操作
			onRefresherrefresh(e){
				//console.log(e)
				if (this._freshing) return
				this._freshing = true
				
				if (!this.triggered){//界面下拉触发，triggered可能不是true，要设为true  
					this.triggered = true;
				}
					
				setTimeout(() => {
					this.triggered = false
					this._freshing = false
					uni.showToast({
					  title: '刷新成功',
					})
					
				}, 1000)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			},
			//退出
			logout (e) {    
				uni.reLaunch({
					url: '/pages/index/login/login',
				})
			},
			...mapMutations({
				"setCurrOrderState":"setCurrOrderState"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.user-info {
	    height: 180rpx;
	    background: linear-gradient(90deg, #eb3c3c, #ff7459);
	    z-index: 10;
	}
	.user-info .account{
	    position: relative;
	    z-index: 10;
	}
	.account .text-plain{
	    width: 70%;
	    border: 1rpx solid #eee;
	    border-radius: 10rpx;
	}
	.account .tips{
	    width: 70%;
	}
	.user-info::after {
	    position: absolute;
	    left: 0;
	    right: 0;
	    bottom: -110rpx;
	    z-index: 1;
	    content: ' ';
	    height: 134rpx;
	    border-radius: 0 0 50% 50%;
	    background: linear-gradient(90deg, #eb3c3c, #ff7459);
	}
	.user-info .per-bill-img{
	    width: 108rpx;
	    height: 108rpx;
	    border-radius: 50%;
	    background-color: #F1F1F1;
	    left: 50%;
	    bottom: -164rpx;
	    z-index: 12;
	    transform: translateX(-54rpx);
	}
	.invit-info{
	    z-index: 12;
	    margin-top: 160rpx;
	}
	.invit-info .con-per-username{
	    color: #80c7c7;
	}
	.invit-info .con-per-invide {
	    color: #fd3c3c;
	}
	.card-info{
	    border-radius: 10rpx;
		box-shadow: 0 1rpx 6rpx rgba(26, 26, 26, 0.2);
	}
	.card-info .row-1 {
	    border-bottom: 2rpx solid #ddd;
	}
	.card-info .row-1 .active{
	   color: #fd3c3c;
	}
	.my-fans-info .item{
	    border-radius: 12rpx;
	}
	.my-fans-info .cus-shadow{
		box-shadow: 0 1rpx 6rpx rgba(26, 26, 26, 0.2);
	} 

	.pink{
	    background: linear-gradient(to right,#f0785d,#e35e40);
	}
	.purple{
	    background: linear-gradient(to right,#edb2f8,#df93ed);
	}
	.blue{
	    background: linear-gradient(to right,#509de8,#006fd9);
	}
	.red{
	    background: linear-gradient(to right,#d17575,#a93d3d) ;  
	}
	.orange{
	    background: linear-gradient(to right,#ecb071,#fa8103);
	}
	.black{
	    background: linear-gradient(to right,#9be8e6,#16ccec) ;
	}
	.green{
	    background: linear-gradient(to right,#a3e4a6,#06c00e);
	}
	.yellow{
	    background: linear-gradient(to right,#db916f,#d36331);
	}
	.grid{
	    border-radius: 20rpx;
	}
	.grid .setting-item{
	    position: relative;
	    padding-top: 40rpx;
		padding-bottom: 40rpx;
	}
	.grid .setting-item::after{
	    position: absolute;
	    box-sizing: border-box;
	    content: " ";
	    pointer-events: none;
	    top: -50%;
	    right: -50%;
	    bottom: -50%;
	    left: -50%;
	    border: 4rpx solid #ebedf0;
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    z-index: 1;
	}
	.grid .setting-item .li-icon{
	    position: relative;
	    height: 60rpx;
	    line-height: 60rpx;
	    width: 60rpx;
	    border-radius: 10rpx;
	    color: #fff;
	    font-weight: 900;
	    display: inline-block;
	    margin-bottom: 12rpx;
	}
	.suggestion-bk{
	    border-radius: 10rpx;
	}
	.suggestion-bk .item.line::after{
	    content: "";
	    height: 50%;
	    width: 0;
	    border: 2rpx solid #666;
	    position: absolute;
	    right: 0;
	    top: 25%;
	    transform: scaleX(.5);
	}
</style>
