<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-orange" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">找回密码</view>
		</cu-custom>
	
	
		<view class="response forget-form">
			<view class="text-input">
				<input type="text" class="input-field" placeholder="请输入手机号码" maxlength="11" :value="form.phone" @input="updateValue" data-type="phone"></input>
			</view>
			<view class="text-input flex align-center justify-between">
				<input placeholder="请输入验证码" class="flex-sub margin-right-lg input-field" :value="form.mCode" @input="updateValue" data-type="mCode"></input>
				<button class="cu-btn bg-orange shadow text-sm validCode" @click="getMessageCode" :disabled="validCode.isDisabled" type="">{{validCode.btnText}}</button>
			</view>
			<view class="text-input">
				<input type="password" class="input-field" placeholder="请输入新密码" maxlength="16" :value="form.pwd" @input="updateValue" data-type="pwd"></input>
			</view>
			<view class="text-input">
				<input type="password" class="input-field" placeholder="请确认新密码" maxlength="16" :value="form.repwd" @input="updateValue" data-type="repwd"></input>
			</view>
	
			<view class="text-input padding-top">
				<button class="cu-btn bg-orange margin-tb-sm lg response shadow" @click="doSubmit">提交密码</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					phone: "18598271043",
					mCode: "889933",
					pwd: "123456",
					repwd: "123456",
				},
				validCode: {
					btnText: "获取验证码",
					isDisabled: false
				}
			};
		},
		methods:{
			updateValue(){},
			//获取验证码
			getMessageCode (e) {
				if (util.checkMobilePhone(this.form.phone)) {
					let nums = 20, timer;
					this.validCode = {
						btnText: nums + "秒后重新获取",
						isDisabled: true
					}
				 
					timer = setInterval(()=>{
						nums--;
						if (nums > 0) {
							this.validCode.btnText = nums + "秒后重新获取"
						} else {
							clearInterval(timer); //清除js定时器
							this.validCode = {
								btnText: "获取验证码",
								isDisabled: false
							}
						}
						
					},1000)
				} else {
					uni.showToast({
						title: '请输入正确手机号',
						icon: 'none',
						duration: 2000
					})
				}
			},
			//注册
			doSubmit: function(){
				uni.showLoading({
					title: '请稍等...',
				})
				setTimeout(function () {
					uni.hideLoading();
					uni.showToast({
						title: '重置成功',
						icon: 'none',
						duration: 500,
						success: function(){
							setTimeout(function () {
								uni.navigateBack({
								complete: (res) => {},
								})
							}, 500)
						}
					})
				}, 2000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.forget-form{
	  padding-top: 100rpx;
	}
	.text-input {
	  width: 80%;
	  margin: 0 auto 40rpx;
	}
	.text-input .input-field {
	  height: 88rpx;
	  border-radius: 12rpx;
	  background-color: #fff;
	  -webkit-appearance: none;
	  border: 2rpx solid #ccc;
	  padding-left: 30rpx;
	}
	.text-input .validCode{
	  width: 240rpx;
	}
</style>
