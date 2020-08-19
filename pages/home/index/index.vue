<template>
	<view class="vh100">
		<!--自定义导航栏-->
		<cu-custom bgColor="bg-gradual-green">
			<view slot="content">首页</view>
		</cu-custom>
		
		<!--搜索条-->
		<view class="cu-bar search header fixed" :style="{top:CustomBar+'px','background-color':searchBgColor}">
			<view class="search-form round padding-right-sm padding-left-xs" :style="{'background-color': inputBgColor,color: inputColor}">
				<text class="cuIcon-search" style="font-size: 14px;"></text>
				<input type="text" placeholder="请输入搜索关键词" confirm-type="search" :value="searchKey" :placeholder-style="inputPlaceholderColor" @input="onInputChange" @confirm="onSearch"></input>
				<text class="cuIcon-roundclosefill text-xsl" v-show="searchKey.length" @click="onCleanSearchKey" style="font-size: 16px;"></text>
			</view>
		</view>
		
		<scroll-view scroll-y="true"  @scroll="onContentScroll"  :refresher-triggered="triggered"  @scrolltolower="onScrollBottom" 
			refresher-enabled="true" @refresherrefresh="onRefresherrefresh" :style="{'height':'calc(100vh - '+CustomBar+ 'px)'}">
			
		
			<!--swiper轮播图 -->
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval" :duration="swiper.duration"
					:style="{'height': swiper.height}">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<view class="swiper-item h100">
							<image :src="item"  class="w100 h100"></image> <!-- mode="widthFix"-->
						</view>
					</swiper-item>
				</swiper>
			</view>
			
			<!--nav导航栏-->
			<view class="bg-white margin-lr-sm margin-top-sm tabNav">
				<view class="flex">
					<view class="flex-sub padding-tb-xs">
						<navigator url="/pages/home/sortProduct/sortProduct" hover-class="none">
							<image src="/static/img/nav-1.png" mode="aspectFit" class="response block pic"></image>
						</navigator>
					</view>
					<view class="flex-sub padding-tb-xs">
						<navigator url="/pages/home/skillProduct/skillProduct" hover-class="none">
							<image src="/static/img/nav-2.png" mode="aspectFit" class="response block pic"></image>
						</navigator>
					</view>
				</view>
			</view>
		
			<!--广告，公告-->
			<view class="margin-sm text-sm advertising">
				<advertising :datas="advertisingList" :userLeftSlot="true">
					<view slot="title">
						<view class="adv-title padding-left-sm " style="height:34px;line-height:34px;">商城头条
							<text class="cuIcon-notification lg text-gray"></text>
						</view>
					</view>
				</advertising>
			</view>
		
			<!--商品列表-->
			<view class="product-item-wrap">
				<view class="flex bg-white padding-sm margin-sm" v-for="(item, index) in prodctArray" :key="index">
					<view class="l-item">
						<image :src="item.img" mode="widthFix" :lazy-load="true" class="response" style="height: auto"></image>
					</view>
					<view class="r-item flex-sub padding-left-sm flex flex-direction justify-around width0">
						<view class="text-black text-cut">{{item.title}}</view>
						<view><text class="cu-tag bg-red light" v-if="item.is_img==1">需晒图</text></view>
						<view>
							垫付：<text class="text-red text-bold text-lg">￥{{item.price}}</text>
							<view class="cu-btn bg-red fr sm margin-right-xs" @click="toDetal(item)">马上抢</view>
						</view>
						<view class="text-orange text-sm">截止日期：{{item.endTime}}</view>
						<view class="progress">
							<view class="cu-progress radius striped active">
		    					<view class="bg-red" :style="{width: percent(item.order_count/item.task_count)}">{{percent(item.order_count/item.task_count)}}</view>
							</view>
						</view>
					</view>
				</view>
				<view :class="['cu-load', isLoadingMore?'loading':'over']"></view>
			</view>
			
			<!--适配底部导航栏
			<view class='cu-tabbar-height'></view>
			-->
		</scroll-view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import advertising from '../../component/advertising.vue';
	import util from "static/js/util.js"
	export default {
		data() {
			return {
				searchBgColor: "rgba(255,0,0,0.2)",
				inputColor: "rgba(255,255,255,1)",
				inputPlaceholderColor: "color:rgba(255,255,255,1)",
				searchKey: "",
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 1000,
					height: "200px"
				},
				swiperList: [
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
					'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
				],
				prodctArray:[],
				isLoadingMore: true,
				triggered: false,
				_freshing: false
			}
		},
		components:{advertising},
		computed:{
			...mapState([
				'advertisingList',
				'products'
			])
		},
		methods: {
			onInputChange(){},
			//清空搜索关键词
			onCleanSearchKey() {
				this.searchKey = ""
			},
			onSearch(){},
			
			onContentScroll(e){
				//console.log(e)
				var scrollTop = e.detail.scrollTop,
					c = 255,
					swiperHeight = Number(this.swiper.height.replace("px", "")),
					ratio = parseFloat((scrollTop / swiperHeight).toFixed(2)),
					ratio = ratio > 1 ? 1 : ratio,
					c = parseInt(255 * (1 - ratio));
				if (ratio < 0.2) {
					ratio = 0.2;
				} else if (ratio > 0.9) {
					ratio = 0.9;
				}
				//console.log(scrollTop, ratio, c)
				//console.log(c)
				
				this.searchBgColor = "rgba(255,0,0, " + ratio + ")";
				this.inputBgColor = "rgba(255,255,255, " + ratio + ")";
				this.inputColor = "rgba(" + c + ", " + c + ", " + c + ", 1)";
				this.inputPlaceholderColor = "color:rgba(" + c + ", " + c + ", " + c + ", 1)";
			},
			//滚动到底部时
			onScrollBottom(e){
				let random = this.products.slice(0,this.products.length), 
					addData = util.getRandomFromArray(random, 10, false)
			
				if(this.isLoadingMore){
					let newDatas = this.prodctArray.concat(addData), newDatasLen = newDatas.length, maxCount = 100
				  
					setTimeout(()=>{
							this.prodctArray = newDatasLen>=maxCount?newDatas.slice(0,maxCount):newDatas,
							this.isLoadingMore =  !(newDatasLen>=maxCount)
	
					},1500)
					
				}
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
					this.triggered = false,
					this._freshing = false
					uni.showToast({
					  title: '刷新成功',
					})
				}, 1000)
			},
			toDetal(item){
				//console.log(e.currentTarget.dataset.item)
				uni.navigateTo({
					url: '/pages/home/productDetail/productDetail?item='+JSON.stringify(item),
				})
			}
		},
		mounted() {
			//console.log(this.advertisingList)
			this.prodctArray = [...this.products]
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
	}
</script>

<style scoped lang="scss">
	
	.swiper-item {
		display: block;
		text-align: center;
	}

	.tabNav .pic{
	    height: 152rpx;
	}
	.advertising{
	    overflow: hidden;
	    border-radius: 20rpx;
	}
	.product-item-wrap .l-item{
		width: 222rpx;
		height: 218rpx;
	}
</style>
