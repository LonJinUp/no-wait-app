<template>
	<view class="index-wrapper bg">
		<logo />
		<view class="title">O2O定單輪候管理系統</view>
		<info-box v-for="(item,index) in info" :info="item" :key="index"  />
		<footer-box />
	</view>
</template>

<script>
	import InfoBox from './components/InfoBox'
	export default {
		components: {InfoBox},
		data() {
			return {
				info: [
					{title: '預約排隊提示', icon: '', qrcode: '/static/images/qrcode.png', tips: '早3個號碼會透過WhatsApp通知你'},
					{title: '網上落單', icon: '', qrcode: '/static/images/qrcode.png', tips: '完成訂單後, 透過WhatsApp通知你'},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index-wrapper{
		.title{
			color: rgb(73, 119, 154);
			font-size: 14px;
			text-align: center;
			margin-bottom: 30rpx;
			image{
				display: block;
				width: 90%;
			}
		}
	}
</style>
