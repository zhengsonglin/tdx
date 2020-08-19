<template>
	<view class="vh100 bg-white nav">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">预定任务</view>
		</cu-custom>
		
		<view class="flex text-center bg-white nav solid-bottom">
			<view :class="['cu-item flex-sub',  {'text-orange cur':1==TabCur}]"  @click="tabSelect(1)">
				已预订商品
			</view>
			<view :class="['cu-item flex-sub',  {'text-orange cur':2==TabCur}]"  @click="tabSelect(2)">
				预订商品记录
			</view>
		</view>
		<view class="tab-content">
			<view class="row-tb bg-white text-center text-black">
				<view class="row-line-data flex  padding-tb text-bold">
					<view class="date">预定日期</view><view class="detail">商品详情</view>
					<view class="handle">操作</view>
				</view>
			</view>
			<view class="row-tb row-data text-center text-sm text-black">
				<view class="row-line-data flex padding-tb" v-for="(item, index) in list" :key="index">
					<view class="date">{{item.time}}</view>
					<view class="detail">{{item.fName}}</view>
					<view class="handle"><button class="cu-btn bg-red sm">删除</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 1,
				list:[],
				list2:[
					{time:"2020-04-28", fID:"2", fName:"数据线"},
					{time:"2020-04-23", fID:"1", fName:"抽纸"},
					{time:"2020-04-16", fID:"3", fName:"搅蛋器"}
				]
			};
		},
		methods:{
			tabSelect(id) {
				this.TabCur = id,
				this.list = id==1?this.list2:[]
			},
		},
		mounted() {
			this.list = [...this.list2]
		}
	}
</script>

<style lang="scss" scoped>
	.tab-content .row-tb .row-line-data{border-bottom: 2rpx solid #ddd;}
	.tab-content .flex .date, .tab-content .flex .handle{width: 30%;}
	.tab-content .flex .detail{width: 40%;}
</style>
