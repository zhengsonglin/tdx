<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">商品分类</view>
		</cu-custom>
	
		<view class="VerticalBox" :style="{'height':'calc(100vh - '+ CustomBar+'px)'}">
			<!-- 左边scroll -->
			<scroll-view class="VerticalNav nav h100" scroll-y="true" scroll-with-animation="true" :scroll-top="VerticalNavTop" 
				>
				<view :class="['cu-item text-lg', {'text-green cur':item.id==TabCur}]" v-for="(item,index) in category" :key="item.id" @click="tabSelect(item)">
					{{item.short_name}}
				</view>
			</scroll-view>
			<!-- 右边scroll -->
			<scroll-view class="VerticalMain flex-sub h100" scroll-y="true" scroll-with-animation="true" :scroll-into-view="'main-'+MainCur" @scroll="VerticalMain">
				<view class="padding-lr-xs" v-for="(item, index) in categoryList" :key="item.long_name" :id="'main-'+item.id">
					<!-- 标题 -->
					<view class='cu-bar solid-bottom bg-white'>
						<view class='action text-bold text-lg text-green'>
							<text class='cuIcon-title'></text>{{item.short_name}} </view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item padding-tb-sm padding-left-xs" v-for="(sItem, sIndex) in item.products" :key="sItem.pa_id">
							<view class="left-item" :style="{'background-image': 'url('+sItem.img+')'}"></view>
							<view class="right-item flex-sub flex flex-direction justify-around padding-left-sm width0">
								<view class="text-lg text-pink text-cut">{{sItem.title}}</view>
								<view class="padding-tb-xs">
									<text class="cu-tag bg-blue light">需晒图</text>					
								</view>
								
								<view class="">垫付 <text class="text-red">￥{{sItem.price}}</text>
									<view class="cu-btn bg-red fr sm margin-right-xs" @click.stop="toDetal(sItem)">马上抢</view>
								</view>
								<view class="progress">
									<view class="cu-progress radius striped active">
										<view class="bg-red" :style="{width: percent(sItem.order_count/sItem.task_count)}">{{percent(sItem.order_count/sItem.task_count)}}</view>
									</view>
								</view>
							</view>
						</view>
					
					</view>
	
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 19,
				MainCur: 19,
				VerticalNavTop: 0,
				list: [],
				categoryList:[
					//{"id":0,"short_name":"全部","long_name":"全部商品"},
			
				],
				load: true
			};
		},
		computed:{
			...mapState([
				'category'
			])
		},
		methods:{
			tabSelect(item) {
			    this.TabCur = item.id,
			    this.MainCur = item.id,
			    this.VerticalNavTop = (item.id - 1) * 50
			},
			VerticalMain(e){
			    let that = this;
			    let category = this.categoryList;
			    let tabHeight = 0;
			    if (this.load) {
			        category.forEach((item, i)=>{
			            let view = uni.createSelectorQuery().select("#main-" + item.id);
			            view.fields({
			                size: true
			            }, data => {
			                item.top = tabHeight;
			                tabHeight = tabHeight + data.height;
			                item.bottom = tabHeight;
			            }).exec();
			        })
					that.load = false,
					that.categoryList = category
			    }
			    let scrollTop = e.detail.scrollTop + 20;
			    category.forEach((item, i)=>{
			        if (scrollTop > item.top && scrollTop < item.bottom) {
						that.VerticalNavTop = (item.id - 1) * 50,
						that.TabCur = item.id
			            return false
			        }
			    })
			},
			toDetal(item){
			    uni.navigateTo({
					url: '/pages/home/productDetail/productDetail?item='+JSON.stringify(item),
			    })
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
		},
		onReady() {
			uni.hideLoading()
		},
		mounted() {
		 	//console.log(this.advertisingList)
		 	this.categoryList = [...this.category]
		}   
	}
</script>

<style lang="scss" scoped>
.VerticalBox{
    display: flex;
}

.VerticalNav.nav {
    width: 160rpx;
    white-space: initial;
  }
  
  .VerticalNav.nav .cu-item {
    width: 100%;
    text-align: center;
    background-color: #fff;
    margin: 0;
    border: none;
    height: 100rpx;
    line-height: 100rpx;
    position: relative;
  }
  .VerticalNav.nav .cu-item.cur {
    /* background-color: #f1f1f1; */
    border-bottom: 1px solid var(--green);
  }
  .VerticalNav.nav .cu-item.cur::after {
    content: "";
    width: 8rpx;
    height: 30rpx;
    border-radius: 10rpx 0 0 10rpx;
    position: absolute;
    background-color: currentColor;
    top: 0;
    right: 0rpx;
    bottom: 0;
    margin: auto;
  }

  .VerticalMain{
    background-color: #f1f1f1;
    width: 0;
  }
  .VerticalMain .cu-list .cu-item{
      height: auto;
      border-bottom: 1px dashed #999;
  }
  .VerticalMain .cu-list .cu-item:first-child{
      padding-top: 0;
  }
  .VerticalMain .cu-list .cu-item .left-item{
    width: 200rpx;
    height: 200rpx;
    background-position: center center;
    background-size: cover;
  }
  .VerticalMain .cu-list .cu-item .right-item{
    height: 200rpx;
}
</style>
