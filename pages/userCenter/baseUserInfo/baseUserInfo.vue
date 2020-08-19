<template>
	<view class="vh100 bg-white">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<view slot="backText">返回</view>
			<view slot="content">个人基本信息</view>
		</cu-custom>
		
		<view class="cu-list menu sm-border">
			<view class="cu-item">
				<view class="content"><text>注册时间</text></view>
				<view class="action"><text>2020-04-07 19:15:50</text></view>
			</view>
			<view class="cu-item">
				<view class="content"><text>用户名</text></view>
				<view class="action"><text>18598271043</text></view>
			</view>
			<view class="cu-item arrow">
				<view class="custome response">
					<text class="absolute">性别</text>
					<picker @change="pickerChange" :value="sexIndex" :range="sexArray" class="response text-right" data-picktype="sex">
						<text class="picker">{{sexIndex?sexArray[sexIndex]:'请选择性别'}}</text>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow" @click="showInputModal(1)">
				<view class="content"><text>年龄</text></view>
				<view class="action"><text>{{age?age:'请输入您的年龄'}}</text></view>
			</view>
			<view class="cu-item arrow" @click="showInputModal(2)">
				<view class="content"><text>QQ号码</text></view>
				<view class="action"><text>{{qq?qq:'请输入您的QQ'}}</text></view>
			</view>
			<view class="cu-item arrow" @click="showInputModal(3)">
				<view class="content"><text>我的邮箱</text></view>
				<view class="action"><text>{{email?email:'请输入您的邮箱'}}</text></view>
			</view>
			<view class="cu-item arrow">
				<view class="custome response">
					<text class="absolute">婚姻状况</text>
					<picker @change="pickerChange" :value="marryIndex" :range="marryArray" class="response text-right"   data-picktype="marry">
						<text class="picker">{{marryIndex?marryArray[marryIndex]:'请选择婚姻状况'}}</text>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="custome response">
					<text class="absolute">教育程度</text>
					<picker @change="pickerChange" :value="eduIndex" :range="eduArray" class="response text-right" data-picktype="edu">
						<text class="picker">{{eduIndex?eduArray[eduIndex]:'请选择教育程度'}}</text>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="custome response">
					<text class="absolute">所属人群</text>
					<picker @change="pickerChange" :value="jobIndex" :range="jobArray" class="response text-right" data-picktype="job">
						<text class="picker">{{jobIndex?jobArray[jobIndex]:'请选择所属人群'}}</text>
					</picker>
				</view>
			</view>
			<view class="cu-item arrow">
				<view class="custome response">
					<text class="absolute">地址选择</text>
					<picker mode="region" @change="RegionChange" :value="region" :custom-item="customItem">
						<view class="picker text-right">
							{{region[0]}}，{{region[1]}}，{{region[2]}}
						</view>
					</picker>
				</view>
			</view>
		</view>	
		
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-gradual-green margin-tb-sm lg">提交</button>
		</view>
		
		<view :class="['cu-modal', {'show':inputDialog.show}]">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">{{inputDialog.type==1?'请输入您的年龄':(inputDialog.type==2?'请输入您的QQ':'请输入您的邮箱')}}</view>
					<view class="action" @click="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl bg-white">
					<view class="text-left">
						<input :maxlength="inputDialog.type==1?3:20" @input="onKeyInput" :value="inputDialog.inputValue" class="model-input"/>
					</view>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-green solid-right" @click="cancleAgeModal">取消</view>
					<view class="action margin-0 flex-sub  solid-left" @click="confirmAgeModal">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sexArray: ['男', '女'],
				sexIndex: null,
				age: null,
				qq: null,
				email: null,
				inputDialog: {
					show: false,
					type: "1",   //1年龄，2QQ，3邮箱
					inputValue: ""
				},
				marryIndex: null,
				marryArray: ['已婚', '未婚'], 
				eduIndex: null,
				eduArray: ['初中', '高中', '中专', '大专', '本科', '研究生', '博士'],
				jobIndex: null,
				jobArray: ['宝妈', '全职太太', '上班', '房产', '事业单位', '医疗单位', '白领', '自主经营'],
				region: ['广东省', '广州市', '海珠区'],
				
			};
		},
		methods:{
			//选择性别、婚姻状况、教育程度、所属人群
			pickerChange(e){
				console.log(e)
				let {picktype} = e.currentTarget.dataset;
				let value = e.detail.value
				if(picktype== "sex"){
					this.sexIndex = value
				}else if(picktype== "marry"){
					this.marryIndex = value
				}else if(picktype== "edu"){
					this.eduIndex = value
				}else if(picktype== "job"){
					this.jobIndex = value
				}
			},
			showInputModal(type){
				let lastValue = type==1?this.age:(type==2?this.qq:this.email)
				this.inputDialog.type = type
				this.inputDialog.show = true
				this.inputDialog.inputValue = lastValue
			},
			//model弹窗input值
			onKeyInput(event) {
				this.inputDialog.inputValue = event.target.value
			},
			cancleAgeModal(){
				this.inputDialog.show = false
			},
			confirmAgeModal(){
				let {type, inputValue}  = this.inputDialog
				if(type=='1'){
					this.age = inputValue
				}else if(type=='2'){
					this.qq = inputValue
				}else if(type=='3'){
					this.email = inputValue
				}
				console.log(type, inputValue)
				this.inputDialog.show = false
			},
			RegionChange(e) {
				this.region = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	.cu-list.menu>.cu-item {
		min-height: 90rpx;
		border-bottom: 1rpx solid rgba(0,0,0,.1);
	}
	.model-input{
		height:80rpx;line-height:80rpx;border:2rpx solid #ddd;border-radius:8rpx;padding-left:20rpx;
	}
</style>
