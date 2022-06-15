<template>
	<view class="choose-wrapper bg">
		<login-header></login-header>
		<view class="number-list">
			<view class="success">
				<view class="icon flex-center">
					<image src="/static/images/success.png" mode=""></image>
				</view>
				<view class="name">吃茶三千</view>
				<view class="name">B組 3-4 位</view>
				<view class="name">已取得輪候號碼</view>
			</view>
			<view class="btn">返回首頁</view>
		</view>
		<view class="logout" @click="cancel">取消輪候</view>
	</view>
</template>

<script>
	export default {
		methods: {
			cancel() {
				const _this = this
				uni.showModal({
					title: '提示',
					content: '確定取消輪候',
					success: function (res) {
						if (res.confirm) {
							_this.$navGoto('/pages/choose/result')
						} 
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.choose-wrapper{
		width: 100%;
		height: 100%;
		.shop-name{
			width: 622rpx;
			height: 134rpx;
			background: rgba(237, 237, 237, 0.43);
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			margin: 0 auto;
			text-align: center;
			font-size: 44rpx;
			font-weight: 400;
			color: #49779A;
			line-height: 134rpx;
		}
		.number-list{
			width: 622rpx;
			padding: 18rpx 42rpx;
			background: rgba(237, 237, 237, 0.43);
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			margin: 0 auto;
			box-sizing: border-box;
			margin-top: 16rpx;
			.title{
				font-size: 44rpx;
				font-weight: 400;
				color: #49779A;
				margin-bottom: 10rpx;
			}
			.success{
				width: 100%;
				background: #FFFFFF;
				box-sizing: border-box;
				padding: 48rpx;
				border-radius: 10rpx;
				margin-bottom: 30rpx;
				.icon{
					width: 102rpx;
					height: 102rpx;
					background: #49779A;
					border-radius: 50%;
					margin: 0 auto;
					image{
						width: 80rpx;
						height: 80rpx;
					}
				}
				.name{
					font-size: 44rpx;
					font-weight: 400;
					color: #49779A;
					text-align: center;
					margin-top: 18rpx;
					width: 100%;
				}
			}
		}
		.btn{
			width: 100%;
			height: 102rpx;
			background: #49779A;
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			text-align: center;
			line-height: 102rpx;
			font-size: 36rpx;
			font-weight: 400;
			color: #FFFFFF;
		}
		.logout{
			width: 622rpx;
			margin: 0 auto;
			height: 102rpx;
			box-sizing: border-box;
			box-shadow: 0px 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			border: 4rpx solid #994861;
			margin-top: 20rpx;
			line-height: 102rpx;
			text-align: center;
			font-size: 36rpx;
			font-weight: 400;
			color: #9A4962;
			margin-bottom: 20rpx;
		}
	}
</style>
