<template>
	<view class="vh100">
		<cu-custom bgColor="bg-gradual-green">
			<view slot="content">问题集</view>
		</cu-custom>
		<view class="content" :style="{'overflow':'auto','height': 'calc(100vh - '+ CustomBar + 'px)'}">
			<view class="section-1">
				<view class="bg-white padding-sm"><text class="text-black text-bold text-lg">注意事项</text></view>
				<view class="bg-white margin-sm padding-sm">
					1、下单禁止使用
					<text class="text-red">淘宝客</text>
					、
					<text class="text-red">拍立淘</text>
					、
					<text class="text-red">淘金币</text>
					、
					<text class="text-red">红包</text>
					、
					<text class="text-red">集分宝</text>
					、
					<text class="text-red">花呗</text>
					、
					<text class="text-red">信用卡</text>
					、
					<text class="text-red">代付</text>
					； 如用以上方式下单,产生的费用将由会员自行承担,拒不承担的,平台有权冻结账号并停止返款.
				</view>
				<view class="bg-white margin-sm padding-sm">
					2、只能使用实名认证的淘宝号下单，抢到任务尽快下单，2小时内订单号登记超时自动退单，每天
					<text class="text-red">0点</text>
					停止抢单
					<text class="text-red">0点</text>
					未提交的任务自动退单；
				</view>
				<view class="bg-white margin-sm padding-sm">
					3、免单活动的内容全部咨询淘大熊客服，商品、物流问题可以咨询商家；跟商家沟通时，不允许提及免单、好评返现等不相干问题；
				</view>
				<view class="bg-white margin-sm padding-sm">4、任意两人的收货地址，不得完全相同。任意两人的收货人姓名及电话不得相同；</view>
				<view class="bg-white margin-sm padding-sm">5、无特殊情况不要申请退款，如有问题需退款必须经淘大熊客服同意；</view>
				<view class="bg-white margin-sm padding-sm">
					6、打款银行支持：
					<text class="text-red">招商银行</text>
					、
					<text class="text-red">交通银行</text>
					、
					<text class="text-red">中国工商银行</text>
					、
					<text class="text-red">中国建设银行</text>
					、
					<text class="text-red">中国农业银行</text>
					、
					<text class="text-red">中国银行</text>
					；没有的亲们麻烦提前准备哦。
				</view>
				<view class="bg-white margin-sm padding-sm">
					<text class="cu-capsule">7、上传图片测试一：</text>
					<navigator hover-class="none" url="/pages/test/index" class="cu-capsule text-red">点击跳转图片测试</navigator>
				</view>
				<view class="bg-white margin-sm padding-sm">
					<text class="cu-capsule">8、上传图片测试二：</text>
					<navigator hover-class="none" url="/pages/test/index" class="cu-capsule text-red">点击跳转图片测试</navigator>
				</view>
				<view class="bg-white margin-sm padding-sm text-red">
					<text>PS:请大家严格按照任务流程下单，不得互相分享宝贝链接！发现分享宝贝链接者和商家反映不要求下单者，一经发现者，冻结账号！</text>
				</view>
			</view>
			<view class="section-2">
				<view class="bg-white margin-sm padding-sm text-center">
					<text class="text-red text-bold text-lg ">平台介绍</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view class="text-left">
						平台分有两个版块，
						<text class="text-red">限量免单和熊抢购</text>
						限量免单：粉丝 可以自由领取免单任务做单获得相应的产品奖励及积分奖励；熊抢购：是商家的真实商品哦，属于淘
						宝真实购买！可以使用积分抵扣，100积分抵扣1元，积分越多，抵扣越多，最高可抵扣到免费购买。
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm text-center">
					<text class="text-red text-bold text-lg ">限量免单问题集：</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：每天能做几单任务？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：30个自然日内可以抢
						<text class="text-red">15单，每天最多可以抢1单</text>
						，如果抢 满系统会提示下次抢单时间
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：怎么做单？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view class="flex  padding-bottom-sm ">
						<view class="text-sm padding-tb-xs">答：</view>
						<view class="flex-sub text-left">
							<view class="text-sm padding-tb-xs">1.首页领取任务</view>
							<view class="text-sm padding-tb-xs">2.下单提交订单号（先验证链接，核对任务金额下单）平台放单暂时分两种：</view>
							<view class="text-sm padding-tb-xs">
								①有关键词的，打开淘宝搜索关键词（严格按照任务要求流程下单） ，货比三家，找到对应的商品拍下； ②有淘口令的，复制打开淘宝弹出窗口领券下单。
							</view>
							<view class="text-sm padding-tb-xs">3.收到货之后确认收货后上传好评截图(评语必写）</view>
							<view class="text-sm padding-tb-xs">4.商家36小时内审核（超过36小时系统自动审核）</view>
							<view class="text-sm padding-tb-xs">5.审核成功后任务金额返还到余额里</view>
						</view>
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：需在多长时间内在平台提交订单号？？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：自领取任务后，
						<text class="text-red">2小时内需要再平台上提交淘宝订单号</text>
						，2小时后未提交，该任务自动撤销。
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：找不到商品怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：筛选宝贝价格区间，仍然找不到联系淘大熊客服。</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：找到产品链接价格不对怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：先验证链接，如链接验证失败说明找错产品，验证成功但是价格不对
						，只要不是运费原因，差额不大的可以先在淘宝付款，付款后按照任务金额提交到平台，提交后发订单号和付款截图给淘大熊客服，客服可以改成实付金额，按照这个金额返款。
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：是否可以使用花呗、信用卡下单？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：下单禁止使用
						<text class="text-red">淘宝客</text>
						、
						<text class="text-red">村淘</text>
						、
						<text class="text-red">淘金币</text>
						、
						<text class="text-red">红包</text>
						、
						<text class="text-red">集分宝</text>
						，
						<text class="text-red">花呗</text>
						，
						<text class="text-red">信用卡</text>
						，
						<text class="text-red">代付</text>
						； 如用以上方式下单,产生的费用将由会员自行承担,拒不承担的,平台有权冻结账号并停止返款
						<text class="text-red">（其中，使用花呗、信用卡产生的手续费为付款金额的1%）</text>
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：做任务时候能不能联系商家？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：可以在淘宝上和商家沟通，但是不能在沟通过程中涉及到做任务，礼品样式等敏感词语！这些是不能的！</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：用了错误的旺旺号怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：用错旺旺号有一定的可能导致商家发成真货，用错旺旺号一定要在第一时间联系淘大熊客服微信哈，如造成商家发成真货，粉丝需寄回真货并承担来回运费。</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：商家不发货怎么办?</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						<text class="text-red">联系淘大熊客服,发订单号跟物流截图</text>
						客服联系商家催发货。
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：下单后忘记提交订单号?</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：联系淘大熊客服,发订单号和淘宝订单截图,淘大熊客服确认是否发货 ，如造成商家发成真货，粉丝需寄回真货并承担来回运费。</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：收到的礼品有问题，怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：务必保留凭证后联系客服，不然可能无法处理，凭证包括
						<text class="text-red">礼品照片，快递面单（快递包裹上面白色的单子）和订单号。</text>
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：忘记评价截图了？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：我的淘宝我的评价,里面有。</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：好评截图上传错误怎么做？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：在会员中心待审核模块可以找到对应的任务，点击查看好评截图，重新修改为正确的截图。</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：确认收货后评价需要注意什么？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：所有任务都需要
						<text class="text-red">五星好评＋文字</text>
						。
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：定制评价如何处理？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：定制评价是指商家设定了文字和图片，需要特殊评价的，
						<text class="text-red">会有额外的1元奖励</text>
						，找到对应任务，点击下方的红字内容，里面有商家提供的文字和图片，必须评价商家规定的内容，没有按照规定的 ，
						<text class="text-red">作废定制评价。</text>
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：怎么绑定银行卡？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：会员中心绑定实名的银行卡(打款银行支持:招商银行、交通银行、中国工商银行、中国建设银行、中国农业银行、中国银行)</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：提交好评截图后多长时间可以返款？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：提交后36小时内审核通过，如果超时，系统会自动审核通过返到余额</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：申请提现后什么时间打款？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：一般情况下，财务每
						<text class="text-red">周一、四</text>
						打款，24小时内到账。
						<text class="text-red">当天提现当天不打款</text>
						，节假日期间打款会另行通知。、
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：银行卡填写错误怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：银行卡错误的不要担心哈，这边打款是必须核对您的打款信息的，只要信息对不上就会产生退票哈，不会说漏打款的，每周二，四，六会有退票，淘大熊客服会主动联系
						您更改卡号，方便再次成功打款。
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：显示打款已完成，没有收到怎么办？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：首先
						<text class="text-red">核对下银行卡信息是否正确</text>
						，银行卡信息包括：卡主和实名的名字是不是一致？卡行是不是支持的打款银行？银行卡有没有被银行限制！
						需修改银行卡记得联系淘大熊客服！一切正常可以进手机银行APP查看流水，部分到账信息是没有短信提醒的哦！
					</view>
				</view>

				<view class="bg-white margin-sm padding-sm text-center">
					<text class="text-bold text-lg text-black">熊抢购问题集：</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">熊抢购是什么？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						熊抢购里面的是商家的真实商品，属于
						<text class="text-red">淘宝真实购买</text>
						！不是返还全部本金 ，但是可以使用积分抵扣，
						<text class="text-red">100积分抵扣1元</text>
						，最多抵扣到免费 拿真货！！！例如在充话费和购买商品时可以抵扣现金使用，比如充五十话费，
						有5000积分可以抵扣五十元哦，就是免费充50元话费哦！！！在您确认收货上传好评截图后，抵扣的积分会折现和返还金额一起返还到您的余额中，之后自行提现就可以。
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：如何得到积分？积分有什么用？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>
						答：在限量免单任务中，标题上带有“积分”字样的，在得到礼品的同时
						，还会获得相应的积分，100积分=1元，积分不能直接折合为现金，但积分可以再熊抢购里用来抵扣金额使用。
					</view>
				</view>
				<view class="bg-white margin-sm padding-sm ">
					<text class="text-bold text-lg text-black">问：对平台有些建议，想留言怎么留言？</text>
					<view class="bottom-line-dashed margin-tb-sm"></view>
					<view>答：淘大熊平台——会员中心——下面有个意见反馈，或者联系淘大熊客 服述说登记记录</view>
				</view>
			</view>
		</view>
		<!--适配底部导航栏
		<view class="cu-tabbar-height"></view>
		-->
	</view>
</template>

<script>
export default {
	data() {
		return {
			CustomBar: this.CustomBar,
		};
	}
};
</script>

<style lang="scss" scoped>
.bottom-line-dashed {
	border-bottom: 2rpx dashed red;
}
</style>
