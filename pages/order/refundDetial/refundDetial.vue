<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">申请售后</view>
		</cu-custom>
		<view class="flex padding-sm">
			<view class="l-img flex-sub">
				<image :src="item.url" mode="widthFix" class="response"></image>
			</view>
			<view class="flex flex-twice text-df flex-direction justify-around padding-left-sm r-content">
				<view><text>{{item.title}}</text></view>
				<view class=" ">订单号:<text class="margin-left-xs">{{item.orderNo}}</text></view>
				<view class=" ">总价:<text class="margin-left-xs text-orange">{{item.price}}</text></view>
				<view class=" ">实拍:<text class="margin-left-xs text-pink">{{item.actPrice}}</text></view>
				<view class="">买家旺旺:<text class="margin-left-xs text-blue">zold845517008</text></view>
			</view>
		</view>
		<view class="cu-form-group">
			<view class="section__title">申请原因:</view>
			<picker @change="pickerChange" :value="index" :range="reasonArray">
				<view class="picker margin-left" style="text-align: left;">{{index?reasonArray[index]:'请选择申请原因'}}</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">真实姓名:</view>
			<input placeholder="请输入真实姓名" class=""></input>
		</view>
		<view class="cu-bar border-top">
			<view class="action">
				图片上传:
			</view>
			<view class="action">
				{{imgList.length}}/{{needImgNum}}
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item, index) in imgList" :key="index" @click="ViewImage(imgList, index)">
					<image :src='imgList[index]' mode='aspectFill'></image>
					<view class="cu-tag bg-red" @click.stop="DelImg(index)">
						<text class="cuIcon-close"></text>
					</view>
				</view>
				<view class="solids" @click="ChooseImage" v-if="imgList.length < needImgNum">
					<text class="cuIcon-cameraadd"></text>
				</view>
			</view>
		</view>
	
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-gradual-green margin-tb-sm lg">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {},
				reasonArray: ['原因一', '原因二'],
				index: null,
				imgList: [],
				needImgNum: 4
			};
		},
		methods:{
			pickerChange: function (e) {
				console.log(e)
				this.index = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: this.needImgNum - this.imgList.length, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(imgList, index) {
				uni.previewImage({
					urls: this.imgList,
					current: imgList[index]
				});
			},
			DelImg(index) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(index, 1);
							
						}
					}
				})
			},
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			let item = JSON.parse(options.item)
			console.log(item)
			this.item = item,
			this.imgList = [item.url]
		}
	}
</script>

<style lang="scss">

</style>
