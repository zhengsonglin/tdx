<template>
	<view class="vh100">
		<cu-custom bgColor="bg-gradual-green">
			<view slot="content">任务中心</view>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav fixed" :style="{top:CustomBar+'px'}">
			<view class="flex text-center">
				<view :class="['cu-item flex-sub', {'text-orange cur':index==tabIndex}]" 
					v-for="(item, index) in navTabList" :key="item.state" @click="navTabSelect(item, index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>

		<scroll-view scroll-y="true" refresher-enabled="true" :refresher-triggered="triggered"  @refresherrefresh="onRefresherrefresh" 
			:refresher-threshold="45" @refresherrestore="onRestore" @refresherabort="onAbort" :style="{'height':'calc(100vh - '+ CustomBar +'px - 90rpx)', 'marginTop':'90rpx'}">
			<!-- <refresh-view id='refreshView' backgroundColor="#fff" bind:onRefresh="onPullDownRefresh" refreshHeight="100" bind:onPullState="_pullState" /> -->
			<view class="order-item bg-white margin-sm" v-for="(item, index) in datas" :key="item.id">
				
				<view class="tag-wrap flex justify-between text-white">
					<view class=""><text class="cu-tag bg-orange margin-right-sm">淘宝</text>{{item.shop_name}}</view>
					<view class=" ">任务状态:<text class="margin-left-sm text-df">{{item.stateText}}</text></view>
				</view>
				<view class="c-wrap flex">
					<view class="o-top-l padding-xs">
						<image :src="item.url" mode="widthFix" :lazy-load="true" style="width:100%;height:auto"></image>
					</view>
					<view class="o-top-r padding-xs text-sm flex-sub">
						<view class="text-df"><text>{{item.title}}</text></view>
						<view class="margin-top-xs ">订单号:<text class="margin-left-xs">{{item.orderNo}}</text></view>
						<view class="margin-top-xs ">总价:<text class="margin-left-xs text-orange">{{item.price}}</text></view>
						<view class="margin-top-xs ">实拍:<text class="margin-left-xs text-pink">{{item.actPrice}}</text></view>
						<view class="margin-top-xs">买家旺旺:<text class="margin-left-xs text-blue">zold845517008</text></view>
					</view>
				</view>
				<view class="o-bottom margin-top-sm">
					<view>
						<button class="cu-btn sm bg-red margin-left-sm" @click="showGoodsInfo(item)">商品信息</button>
						<button class="cu-btn sm bg-blue margin-left" @click="toRefundDetail(item)">申请售后</button>
						<button class="cu-btn sm bg-green margin-left" @click="uploadScreenShot(item)">查看好评截图</button>
						<button class="cu-btn sm bg-pink margin-left" @click="showRemarkModel(item)">查看商家备注</button>
					</view>
					<view class="flex text-sm justify-around padding-tb-xs">
						<text class="sub text-left">申请时间：{{item.create_time}}</text>
						<text class="sub text-right">完成时间：{{item.finish_time}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	
		<!--商品信息-->
		<view :class="['cu-modal', {'show':showProductDialog}]">
			<view class="cu-dialog">
				<view class="cu-bar bg-orange justify-end">
					<view class="content">{{productItem.shop_name}}</view>
					<view class="action" @click="hideProductDialog">
						<text class="cuIcon-close text-white"></text>
					</view>
				</view>
				<view class="bg-white text-left padding padding-top-xs text-pink">
					<view class="margin-tb-xs">店铺名：{{productItem.shop_name}}</view>
					<view>下单价：{{productItem.actPrice}}</view>
					<view class="margin-tb-xs">礼品：{{productItem.title}}</view>
					<view class="bg-img" style="max-height:600rpx;">
						<image :src="productItem.url" mode="aspectFit" ></image>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left text-orange" @click="hideProductDialog">我知道了</view>
				</view>
			</view>
		</view>
	
		<!-- 查看商家备注 -->
		<view :class="['cu-modal', {'show':showRemarkDialog}]">
			<view class="cu-dialog">
				<view class="cu-bar bg-orange justify-end">
					<view class="content">商家备注</view>
					<view class="action" @click="hideRemarkModel">
						<text class="cuIcon-close text-white"></text>
					</view>
				</view>
				<view class="bg-white text-center padding padding-xl">
					<view class="margin-tb-xs">
						暗号【1】，下单····-----氟美斯滤袋?133X1500mm【非常时期，部分区域不能及时发货，疫情解封后会及时处理，请谅解！！！】涉及运费问题请联系客服包邮
					</view>	
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left text-orange" @click="hideRemarkModel">知道了</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				tabIndex: 0,
				orders: [],
				navTabList: [
					{state:"1", name:"全部", num:1},
					{state:"2", name:"已领取", num:2},
					{state:"3", name:"已提交", num:3},
					{state:"4", name:"待审核", num:4},
					{state:"5", name:"已完成", num:5},   
				],
				datas:[],
				showProductDialog: false,
				productItem: {},
				showRemarkDialog: false,
				triggered: false,
				_freshing: false,
				isFirstLoad:false,	//是否是第一次加载数据
			}
		},
		computed:{
			...mapState({
				ordersList:'orders',
				currOrderState:'currOrderState'
			})
		},
		methods: {
			navTabSelect (item, id) {//item
				
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
			
				let orderDatas = []
				if(item.state==1){  //全部
					this.orders.forEach((sItem)=>{
						orderDatas.push(...sItem.data)
					})
				}else{
					orderDatas = this.orders.filter((sItem)=>sItem.state==item.state)[0].data
				}
		
				this.tabIndex = id,
				this.datas = orderDatas
	  
				setTimeout(()=> {
					uni.hideLoading()
				}, 800)      
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
			//显示商品信息
			showGoodsInfo(item){
				this.showProductDialog = true
				this.productItem = item
			},
			//隐藏商品信息
			hideProductDialog(){
				this.showProductDialog = false
				this.productItem = {}
			},
			//显示商家备注
			showRemarkModel(){
				this.showRemarkDialog = true
			},
			//隐藏商家备注
			hideRemarkModel(){
				this.showRemarkDialog = false
			},
			//申请售后
			toRefundDetail(item){
				uni.navigateTo({
				  url: '/pages/order/refundDetial/refundDetial?item='+JSON.stringify(item),
				})
			},
			uploadScreenShot(item){
				 uni.navigateTo({
				   url: '/pages/order/uploadScreenShot/uploadScreenShot?item='+JSON.stringify(item),
				 })
			},
			init(){
				uni.showLoading({ title: '加载中',mask: true })
				let orderDatas = [];
				
				if(this.tabIndex==0){
					this.orders.forEach((item)=>{
						orderDatas.push(...item.data)
					})
				}else{
					orderDatas = this.orders.filter((sItem)=>sItem.num==this.tabIndex+1)[0].data
				}
				
				this.datas = orderDatas
				setTimeout(function () {uni.hideLoading()}, 200) 
			},
			...mapMutations({
				"setCurrOrderState":"setCurrOrderState"
			})
		},
		mounted() {
			//console.log("mounted")
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
		//每次都会执行
		onShow(){
			//console.log("onShow")
			//获取 currOrderState对应的tabIndex
			if(this.currOrderState){
				this.navTabList.forEach((item,index)=>{
					if(item.state == this.currOrderState){
						this.tabIndex = item.num - 1
						this.setCurrOrderState(null)
					}
				})
				this.init()
				this.isFirstLoad = false
			}else if(this.isFirstLoad){
				this.init()
				this.isFirstLoad = false
			}
		},
		//只初始化加载一次
		onLoad(e) {
			this.orders = [...this.ordersList]
			this.isFirstLoad = true
		},
		
	}
</script>

<style lang="scss" scoped>
	.order-item .tag-wrap{
		padding: 8rpx 12rpx;
		background: #cdc0bf;
		font-size: 26rpx;
	}

	.order-item .o-top-l{
		width: 270rpx;
		height: 260rpx;
	}
	.order-item .o-top-r{
		width: 0;
		color: #333;
	}
</style>
