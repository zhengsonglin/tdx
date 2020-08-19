<template>
	<view class="row-advertising">
		<view class="bg-white flex">
	        
			<!-- 左边标题部分-->
			<view class="left-title" v-if="!userLeftSlot && title.length">
				<text class="adv-title" >{{title}}{{datas.length}}</text>
			</view>
			<view class="left-title" v-else-if="userLeftSlot">
				<slot name="title"></slot>
			</view>
	        <!-- 右边内容部分-->
			<view :class="[(userLeftSlot || title.length)?'right-content':'response']">
				<view class="adv-content" v-if="datas.length">
					<swiper class="mySwiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="autoplayTime" :circular="circular" :vertical="vertical">
						<swiper-item v-for="(item, index) in datas" :key="index">
							<text class="padding-left-sm">{{item.text}}</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
	
		</view>
	
	</view>
</template>

<script>
	export default{
		name:"",
		props:{
			title: {
				type:String
			},
			datas: {
				type: Array,
				default: ()=>[]
			},
			isAutoplay: {
				type: Boolean,
				default: true
			},
			autoplayTime: {
				type: Number,
				default: 3000,
			},
			userLeftSlot: {
				type: Boolean,
				default: false
			},
			userRightSlot: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				circular: true,
				vertical: true,
				autoplay: true
			}
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style>
	.left-title{
	    flex-basis: 25%;
	}
	.right-content{
	    flex-basis: 75%;
	}
	.mySwiper, .adv-title{
	    height: 34px;
	    line-height: 34px;
	}
</style>
