<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">上传好评截图</view>
		</cu-custom>
	
		<form>
			<view class="cu-form-group">
				<view class="title">买家旺旺:</view>
				<input placeholder="请输入买家旺旺" class="" value="zold845517008"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">订单号:</view>
				<input placeholder="请输入订单号" class="" value="990306145158417922"></input>
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
				<button class="cu-btn bg-gradual-green margin-tb-sm lg">提交好评截图</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				needImgNum: 4
			};
		},
		methods:{
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
			var item = JSON.parse(options.item)
			this.imgList = [item.url]
		},
	}
</script>

<style lang="scss">

</style>
