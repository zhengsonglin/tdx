<template>
	<view class="vh100 bg-white nav">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">实名认证</view>
		</cu-custom>
	   
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">真实姓名</view>
				<input placeholder="请输入真实姓名"></input>
			</view>
			<radio-group class="block">
				<view class="cu-form-group justify-start border-top">
					<view class="title">性别</view>
					<view>
						<radio class="radio margin-right-xs" value="0" checked="true" ></radio>男
						<radio class="radio margin-left margin-right-xs" value="1" ></radio>女
					</view>
				</view>
			</radio-group>
			 <view class="cu-form-group border-top">
				<view class="title">年龄</view>
				<input placeholder="请输入年龄"></input>
			</view>
			 <view class="cu-form-group">
				<view class="title">淘宝会员名</view>
				<input placeholder="请输入淘宝会员名"></input>
			</view>
			<view class="cu-bar border-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/{{needImgNum}}
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item, index) in imgList" :key="index" @click="ViewImage(item)">
						<image :src='item' mode='aspectFill'></image>
						<view class="cu-tag bg-red" @click.stop="DelImg(index)">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length < needImgNum">
						<text class="cuIcon-cameraadd"></text>
					</view>
				</view>
			</view>
		   
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-gradual-green margin-tb-sm lg">提交认证申请</button>
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
			}
		},
		methods: {
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
			ViewImage(url) {
				uni.previewImage({
					urls: this.imgList,
					current: url
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
							this.imgList = this.imgList
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.border-top{
	    border-top: 1rpx solid #eee;
	}
	.cu-form-group .title{
	    width: 200rpx;
	}
</style>
