<template>
	<view class="footer-wrapper">
		<view class="title">O2O定單輪候管理系統由CLOZEUPP AUTO TECH LTD 研發提供.</view>
		<view class="footer-img flex-center">
			<image  src="../static/images/footer.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="scss" scoped>
	.footer-wrapper{
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		.title{
			color: rgb(0, 0, 0);
			font-family: Helvetica Neue;
			font-size: 24rpx;
			font-weight: 400;
			line-height: 30rpx;
			letter-spacing: 0px;
			width: 100%;
			text-align: center;
		}
	}
	.footer-img{
		width: 686rpx;
		margin: 20rpx auto;
	}
</style>
